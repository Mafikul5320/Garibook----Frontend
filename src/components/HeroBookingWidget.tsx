'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Clock,
  Search,
  Plane,
  ArrowRight,
} from 'lucide-react';
import {
  vehicleClasses,
  cities,
  airports,
  timeSlots,
} from '@/lib/data';
import type {
  BookingTab,
  TripType,
  AirportDirection,
  CarRentalBooking,
  AirportRentalBooking,
} from '@/lib/types';

export default function HeroBookingWidget() {
  const [activeTab, setActiveTab] = useState<BookingTab>('carRental');

  // Car Rental State
  const [carBooking, setCarBooking] = useState<CarRentalBooking>({
    tripType: 'oneWay',
    vehicleClass: 'sedan',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: null,
    pickupTime: '09:00 AM',
  });

  // Airport Rental State
  const [airportBooking, setAirportBooking] = useState<AirportRentalBooking>({
    direction: 'fromAirport',
    airport: '',
    destination: '',
    flightTime: null,
    flightNumber: '',
  });

  const handleCarSearch = () => {
    console.log('Searching cars with:', carBooking);
    alert('Searching for available cars...');
  };

  const handleAirportSearch = () => {
    console.log('Searching airport transfer with:', airportBooking);
    alert('Searching for airport transfers...');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-emerald-50 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,168,89,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(5,150,105,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-950 mb-4 leading-tight">
                Freedom in Every{' '}
                <span className="text-primary-500">Journey</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                Experience seamless car rentals across Bangladesh. Choose your
                car, choose your driver, and travel with complete transparency.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>All 64 Districts Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8"
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('carRental')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'carRental'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Car Rental
              </button>
              <button
                onClick={() => setActiveTab('airportRental')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'airportRental'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Plane className="inline-block w-4 h-4 mr-2" />
                Airport
              </button>
            </div>

            {/* Car Rental Tab */}
            {activeTab === 'carRental' && (
              <div className="space-y-5">
                {/* Trip Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Trip Type
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: 'oneWay', label: 'One Way' },
                      { value: 'roundWay', label: 'Round Way' },
                      { value: 'hourly', label: 'Hourly' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() =>
                          setCarBooking({
                            ...carBooking,
                            tripType: type.value as TripType,
                          })
                        }
                        className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          carBooking.tripType === type.value
                            ? 'bg-primary-500 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vehicle Class */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vehicle Class
                  </label>
                  <select
                    value={carBooking.vehicleClass}
                    onChange={(e) =>
                      setCarBooking({
                        ...carBooking,
                        vehicleClass: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {vehicleClasses.map((vc) => (
                      <option key={vc.id} value={vc.id}>
                        {vc.name} - {vc.description} ({vc.priceRange})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MapPin className="inline-block w-4 h-4 mr-1" />
                    Pickup Location
                  </label>
                  <select
                    value={carBooking.pickupLocation}
                    onChange={(e) =>
                      setCarBooking({
                        ...carBooking,
                        pickupLocation: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select pickup city</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dropoff Location */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MapPin className="inline-block w-4 h-4 mr-1" />
                    Drop-off Location
                  </label>
                  <select
                    value={carBooking.dropoffLocation}
                    onChange={(e) =>
                      setCarBooking({
                        ...carBooking,
                        dropoffLocation: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select drop-off city</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) =>
                        setCarBooking({
                          ...carBooking,
                          pickupDate: new Date(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Clock className="inline-block w-4 h-4 mr-1" />
                      Time
                    </label>
                    <select
                      value={carBooking.pickupTime}
                      onChange={(e) =>
                        setCarBooking({
                          ...carBooking,
                          pickupTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleCarSearch}
                  className="w-full px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Search className="w-5 h-5" />
                  Search Available Cars
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Airport Rental Tab */}
            {activeTab === 'airportRental' && (
              <div className="space-y-5">
                {/* Direction */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direction
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: 'fromAirport', label: 'From Airport' },
                      { value: 'toAirport', label: 'To Airport' },
                    ].map((dir) => (
                      <button
                        key={dir.value}
                        onClick={() =>
                          setAirportBooking({
                            ...airportBooking,
                            direction: dir.value as AirportDirection,
                          })
                        }
                        className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          airportBooking.direction === dir.value
                            ? 'bg-primary-500 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {dir.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Airport Selector */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Plane className="inline-block w-4 h-4 mr-1" />
                    Airport
                  </label>
                  <select
                    value={airportBooking.airport}
                    onChange={(e) =>
                      setAirportBooking({
                        ...airportBooking,
                        airport: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select airport</option>
                    {airports.map((airport) => (
                      <option key={airport.id} value={airport.id}>
                        {airport.name} ({airport.code}) - {airport.city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MapPin className="inline-block w-4 h-4 mr-1" />
                    Destination Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your destination address"
                    value={airportBooking.destination}
                    onChange={(e) =>
                      setAirportBooking({
                        ...airportBooking,
                        destination: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Flight Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      Flight Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      min={new Date().toISOString().slice(0, 16)}
                      onChange={(e) =>
                        setAirportBooking({
                          ...airportBooking,
                          flightTime: new Date(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Flight Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BG123"
                      value={airportBooking.flightNumber}
                      onChange={(e) =>
                        setAirportBooking({
                          ...airportBooking,
                          flightNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleAirportSearch}
                  className="w-full px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Search className="w-5 h-5" />
                  Search Airport Transfer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
