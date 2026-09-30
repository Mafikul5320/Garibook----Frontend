'use client';

import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Youtube
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press & Media', href: '#press' },
    { label: 'Blog', href: '#blog' },
  ],
  services: [
    { label: 'Car Rental', href: '#rental' },
    { label: 'Airport Transfer', href: '#airport' },
    { label: 'Hourly Rental', href: '#hourly' },
    { label: 'Corporate Solutions', href: '#business' },
  ],
  partners: [
    { label: 'Drive with Garibook', href: '#drive' },
    { label: 'Garibook Business', href: '#business' },
    { label: 'Garibook Club', href: '#club' },
    { label: 'Partner Portal', href: '#portal' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Safety', href: '#safety' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
};

const paymentMethods = [
  { name: 'bKash', color: 'bg-pink-600' },
  { name: 'Nagad', color: 'bg-orange-600' },
  { name: 'Visa', color: 'bg-blue-600' },
  { name: 'Mastercard', color: 'bg-red-600' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Gari<span className="text-primary-500">book</span>
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Bangladesh's premier car rental platform connecting travelers with
              verified drivers across all 64 districts. Experience freedom in
              every journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Customer Support</p>
                  <p className="font-semibold">+880 1XXX-XXXXXX</p>
                  <p className="font-semibold">+880 1XXX-XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-semibold">support@garibook.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Head Office</p>
                  <p className="font-semibold">
                    Police Plaza Concord, Level-5<br />
                    Plot 2, Sonargaon Road, Dhaka 1205
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-400 mb-4">Accepted Payment Methods</p>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className={`px-4 py-2 ${method.color} rounded-lg text-white font-semibold text-sm shadow-lg`}
              >
                {method.name}
              </div>
            ))}
            <div className="px-4 py-2 bg-slate-800 rounded-lg text-white font-semibold text-sm">
              SSLCommerz
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Garibook. All rights reserved. Trade
              License: TRAD/DNCC/013806/2024
            </p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="hover:text-primary-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
