
import { GoogleGenAI } from "@google/genai";

// Create a new instance right before the call to ensure the latest API key is used
export const getSpiritualAdvice = async (userQuery: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are a specialized consultant for Umrah & Hajj Plus. You help pilgrims with religious information, ritual steps (Tawaf, Sa'i, etc.), and package recommendations. Keep your tone respectful, spiritual, and informative.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently meditating on your request. Please try again in a moment, or contact our human support for urgent inquiries.";
  }
};
