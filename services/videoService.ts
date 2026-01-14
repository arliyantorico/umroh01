
import { GoogleGenAI } from "@google/genai";

export const generatePackageTour = async (
  pkgTitle: string, 
  onStatusUpdate: (status: string) => void
): Promise<string | null> => {
  try {
    // Create a new instance right before making an API call to ensure it always uses the most up-to-date API key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompts = [
      "Cinematic, serene 1080p video tour of the sacred Masjid al-Haram at sunset, spiritual atmosphere, high resolution.",
      "Immersive first-person view of the peaceful courtyard of the Prophet's Mosque in Madinah, morning light, high detail.",
      "Cinematic 1080p footage of luxury accommodations overlooking the Kaaba, golden hour, spiritual ambiance."
    ];
    
    const randomPrompt = `${prompts[Math.floor(Math.random() * prompts.length)]} Specifically for a package titled ${pkgTitle}.`;

    onStatusUpdate("Envisioning the sacred journey...");
    
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: randomPrompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    const statusMessages = [
      "Mapping the spiritual path...",
      "Rendering immersive details...",
      "Capturing the essence of the Haram...",
      "Finalizing your spiritual preview...",
      "Preparing the sacred visuals..."
    ];
    let messageIndex = 0;

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      messageIndex = (messageIndex + 1) % statusMessages.length;
      onStatusUpdate(statusMessages[messageIndex]);
      
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed to return a URI.");

    // Fetch the MP4 with the API key appended
    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const videoBlob = await videoResponse.blob();
    return URL.createObjectURL(videoBlob);
  } catch (error) {
    console.error("Video Generation Error:", error);
    throw error;
  }
};

// Properly declare global types for aistudio to match the environment's AIStudio type
declare global {
  interface AIStudio {
    hasSelectedApiKey(): Promise<boolean>;
    openSelectKey(): Promise<void>;
  }
  interface Window {
    aistudio: AIStudio;
  }
}
