export type TripType = 'oneWay' | 'roundWay' | 'hourly';
export type AirportDirection = 'fromAirport' | 'toAirport';
export type BookingTab = 'carRental' | 'airportRental';

export interface VehicleClass {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  icon: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'city' | 'airport';
  code?: string;
}

export interface Airport {
  id: string;
  name: string;
  code: string;
  city: string;
}

export interface CarRentalBooking {
  tripType: TripType;
  vehicleClass: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: Date | null;
  pickupTime: string;
}

export interface AirportRentalBooking {
  direction: AirportDirection;
  airport: string;
  destination: string;
  flightTime: Date | null;
  flightNumber: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export interface Metric {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}
