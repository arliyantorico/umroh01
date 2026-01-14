
export interface Package {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  duration: string;
  image: string;
  tag: string;
  tagColor: string;
  features: string[];
  itinerary?: { day: string; activity: string }[];
  inclusions?: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}
