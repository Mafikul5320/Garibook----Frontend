import type { VehicleClass, Location, Airport, Service, Testimonial, Metric } from './types';

export const vehicleClasses: VehicleClass[] = [
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Allion / Premio / Axio',
    priceRange: '৳2,500 - ৳4,000',
    icon: 'car',
  },
  {
    id: 'suv',
    name: 'SUV / Microbus',
    description: 'Noah / Voxy / HiAce',
    priceRange: '৳5,000 - ৳8,000',
    icon: 'bus',
  },
  {
    id: 'premium',
    name: 'Premium / Luxury',
    description: 'Land Cruiser / Alphard',
    priceRange: '৳10,000 - ৳20,000',
    icon: 'car-front',
  },
];

export const cities: Location[] = [
  { id: 'dhaka', name: 'Dhaka', type: 'city' },
  { id: 'chattogram', name: 'Chattogram', type: 'city' },
  { id: 'sylhet', name: 'Sylhet', type: 'city' },
  { id: 'coxs-bazar', name: "Cox's Bazar", type: 'city' },
  { id: 'rajshahi', name: 'Rajshahi', type: 'city' },
  { id: 'khulna', name: 'Khulna', type: 'city' },
  { id: 'barishal', name: 'Barishal', type: 'city' },
  { id: 'rangpur', name: 'Rangpur', type: 'city' },
  { id: 'mymensingh', name: 'Mymensingh', type: 'city' },
  { id: 'comilla', name: 'Comilla', type: 'city' },
  { id: 'gazipur', name: 'Gazipur', type: 'city' },
  { id: 'narayanganj', name: 'Narayanganj', type: 'city' },
];

export const airports: Airport[] = [
  {
    id: 'dac',
    name: 'Hazrat Shahjalal International Airport',
    code: 'DAC',
    city: 'Dhaka',
  },
  {
    id: 'cgp',
    name: 'Shah Amanat International Airport',
    code: 'CGP',
    city: 'Chattogram',
  },
  {
    id: 'zyl',
    name: 'Osmani International Airport',
    code: 'ZYL',
    city: 'Sylhet',
  },
  {
    id: 'cxb',
    name: "Cox's Bazar Airport",
    code: 'CXB',
    city: "Cox's Bazar",
  },
  {
    id: 'jsb',
    name: 'Jessore Airport',
    code: 'JSB',
    city: 'Jessore',
  },
];

export const services: Service[] = [
  {
    id: 'intercity',
    title: 'Intercity Car Rental',
    description: 'Comfortable and safe city-to-city travel across Bangladesh with professional drivers.',
    icon: 'map-pin',
    features: [
      'Door-to-door service',
      'All 64 districts covered',
      'Fixed & bidding options',
      'Real-time GPS tracking',
    ],
  },
  {
    id: 'airport',
    title: 'Airport Pick & Drop',
    description: 'Reliable airport transfers with flight tracking and punctual service.',
    icon: 'plane',
    features: [
      'Flight status monitoring',
      'Meet & greet service',
      'Luggage assistance',
      '24/7 availability',
    ],
  },
  {
    id: 'hourly',
    title: 'Hourly Car Rental',
    description: 'Flexible hourly rentals for business meetings, shopping, and local errands.',
    icon: 'clock',
    features: [
      'Minimum 2-hour booking',
      'Within city limits',
      'Multiple stops allowed',
      'Professional chauffeurs',
    ],
  },
  {
    id: 'business',
    title: 'Garibook Business & VMS',
    description: 'Enterprise fleet management with corporate billing and advanced analytics.',
    icon: 'briefcase',
    features: [
      'Centralized billing',
      'Employee ride management',
      'Cost control dashboard',
      'Monthly reporting',
    ],
  },
];

export const metrics: Metric[] = [
  {
    id: 'trips',
    value: 150000,
    label: 'Trip Requests',
    suffix: '+',
  },
  {
    id: 'customers',
    value: 50000,
    label: 'Happy Customers',
    suffix: '+',
  },
  {
    id: 'drivers',
    value: 5000,
    label: 'Active Drivers',
    suffix: '+',
  },
  {
    id: 'districts',
    value: 64,
    label: 'Districts Covered',
    suffix: '',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    role: 'Business Traveler',
    rating: 5,
    comment: 'Excellent service from Dhaka to Sylhet. Driver was professional and the car was spotless. Will definitely use Garibook again for all my intercity travels.',
  },
  {
    id: '2',
    name: 'Fatema Rahman',
    role: 'Corporate Client',
    rating: 5,
    comment: 'We use Garibook Business for our company and the VMS system is incredible. Real-time tracking and transparent billing make fleet management so easy.',
  },
  {
    id: '3',
    name: 'Kamal Uddin',
    role: 'Tourist',
    rating: 5,
    comment: 'Booked an airport pickup for my family visit to Cox\'s Bazar. Driver was waiting with a name board, helped with luggage. Perfect start to our vacation!',
  },
  {
    id: '4',
    name: 'Nusrat Jahan',
    role: 'Entrepreneur',
    rating: 4,
    comment: 'Love the hourly rental option for my business meetings around Dhaka. The bidding system helps me get competitive rates. Highly recommended!',
  },
];

export const timeSlots = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM',
];
