export type CarCategory = 'all' | 'hatchback' | 'sedan' | 'suv' | 'group';

export interface FleetCar {
  id: string;
  name: string;
  category: 'hatchback' | 'sedan' | 'suv' | 'group';
  tagline: string;
  image: string;
  seats: number;
  luggage: number;
  ac: boolean;
  baseFarePerKm: number;
  cityPackageRate: number; // 8 hrs / 80 km
  features: string[];
  bestFor: string;
  popular: boolean;
}

export interface TaxiRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  duration: string;
  sedanFareEst: number;
  suvFareEst: number;
  routeVia: string;
  highlight: string;
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  days: string;
  places: string[];
  sedanPrice: number;
  ertigaPrice: number;
  crystaPrice: number;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  trip: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'fare' | 'airport' | 'safety';
}
