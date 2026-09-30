'use client';

import { motion } from 'framer-motion';
import { Car, UserCheck, DollarSign, Shield, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Choose Your Car',
    description: 'Select from economy sedans to VIP luxury vehicles',
    highlights: ['Toyota Allion', 'Noah Microbus', 'Land Cruiser VX'],
  },
  {
    icon: UserCheck,
    title: 'Choose Your Driver',
    description: 'Verified professionals with excellent ratings',
    highlights: ['Police Clearance', '5-Star Ratings', 'Experienced'],
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Fixed rates or competitive bidding system',
    highlights: ['No Hidden Fees', 'Best Price Guarantee', 'Instant Quotes'],
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-4">
            Freedom in Every <span className="text-primary-500">Journey</span>
          </h2>
          <p className="text-lg text-slate-600">
            Experience the Garibook difference with complete transparency, verified
            drivers, and flexible pricing options
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Value Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Shield, text: 'Secure Payments' },
            { icon: Star, text: '5-Star Experience' },
            { icon: TrendingUp, text: 'Best Market Rates' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-500" />
              </div>
              <span className="font-semibold text-slate-950">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
