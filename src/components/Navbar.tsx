'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Rideshare', href: '#rideshare' },
  { label: 'Earn With Garibook', href: '#earn' },
  { label: 'Garibook Business', href: '#business' },
  { label: 'Garibook Club', href: '#club' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-950">
                  Gari<span className="text-primary-500">book</span>
                </h1>
                <span className="absolute -bottom-1 right-0 text-[10px] font-medium text-primary-600 whitespace-nowrap">
                  City to City Rental
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden"
                    >
                      {['EN', 'BN'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setCurrentLanguage(lang);
                            setIsLanguageOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-sm text-left hover:bg-slate-50 transition-colors ${
                            currentLanguage === lang
                              ? 'bg-primary-50 text-primary-600 font-semibold'
                              : 'text-slate-700'
                          }`}
                        >
                          {lang === 'EN' ? 'English' : 'বাংলা'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Login Button */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Login / Sign Up
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-white shadow-2xl xl:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-slate-950">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t space-y-3">
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-5 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Login / Sign Up
                </button>
                <div className="flex justify-center gap-4">
                  {['EN', 'BN'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCurrentLanguage(lang)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentLanguage === lang
                          ? 'bg-primary-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-slate-950 mb-2">
                  Welcome to Garibook
                </h2>
                <p className="text-slate-600 mb-6">
                  Sign in to book your ride and manage your trips
                </p>
                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                    Continue
                  </button>
                  <p className="text-xs text-center text-slate-500">
                    By continuing, you agree to our Terms of Service and Privacy
                    Policy
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
