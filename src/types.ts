/**
 * Shared TypeScript interfaces for the Async Weather News Dashboard
 */

export interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  timestamp: Date;
}

export interface NewsArticle {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface ApiError {
  message: string;
  status?: number;
}

// Callback type definitions
export type WeatherCallback = (error: ApiError | null, data?: WeatherData) => void;
export type NewsCallback = (error: ApiError | null, data?: NewsArticle[]) => void;
export type DashboardCallback = (error: ApiError | null, data?: { weather: WeatherData; news: NewsArticle[] }) => void;

// API URLs
export const API_URLS = {
  // Using Open-Meteo API (no API key required)
  WEATHER: 'https://api.open-meteo.com/v1/forecast',
  // Using DummyJSON Posts API
  NEWS: 'https://dummyjson.com/posts'
} as const;
