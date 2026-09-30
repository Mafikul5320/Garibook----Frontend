'use client';

import { motion } from 'framer-motion';
import { Briefcase, Car, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function CorporateDriverCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Garibook Business */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-950 to-slate-800 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,168,89,0.5)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold mb-4">
                Garibook Business & VMS
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Enterprise-grade Vehicle Management System for corporate fleet
                operations with complete control and transparency
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  'Centralized Corporate Billing',
                  'Real-time Route Monitoring',
                  'Advanced Cost Control Dashboard',
                  'Monthly Analytics & Reporting',
                  'Employee Ride Management',
                  'Dedicated Account Manager',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Get Started with Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Drive with Garibook */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-500 to-emerald-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                0% Commission
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold mb-4">
                Drive with Garibook
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Join Bangladesh's fastest-growing mobility platform and earn more
                with zero commission on all your trips
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  '0% Commission - Keep 100% Earnings',
                  'Flexible Working Hours',
                  'Weekly Payouts',
                  'Insurance Coverage',
                  '24/7 Driver Support',
                  'Performance Bonuses',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/95">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-white text-primary-600 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Join as Driver
                </button>
                <button className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/30">
                  Download App
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
