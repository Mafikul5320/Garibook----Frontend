'use client';

import { motion } from 'framer-motion';
import { Smartphone, Apple, Download } from 'lucide-react';

export default function MobileAppBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Download the Garibook App
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Book rides, track your driver in real-time, and manage your trips
              with ease. Available on iOS and Android.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                'Real-time GPS tracking',
                'Instant booking & confirmation',
                'Secure in-app payments',
                'Trip history & receipts',
                '24/7 customer support',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/95">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-3 px-6 py-4 bg-black hover:bg-slate-900 text-white rounded-xl transition-all shadow-lg hover:shadow-xl">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
              <button className="inline-flex items-center gap-3 px-6 py-4 bg-white hover:bg-slate-50 text-slate-950 rounded-xl transition-all shadow-lg hover:shadow-xl">
                <Download className="w-6 h-6 text-primary-500" />
                <div className="text-left">
                  <div className="text-xs opacity-70">GET IT ON</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-50 to-emerald-50 flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-primary-500" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
