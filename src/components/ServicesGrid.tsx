'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Plane,
  Clock,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/data';

const iconMap = {
  'map-pin': MapPin,
  plane: Plane,
  clock: Clock,
  briefcase: Briefcase,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
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
            Our Premium <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive mobility solutions designed for your comfort, safety,
            and convenience across Bangladesh
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-2xl hover:border-primary-500 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
