export interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
  date: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  whyKoreaText: string;
}
