import Navbar from '@/components/Navbar';
import HeroBookingWidget from '@/components/HeroBookingWidget';
import ValueProposition from '@/components/ValueProposition';
import ServicesGrid from '@/components/ServicesGrid';
import MetricsSection from '@/components/MetricsSection';
import Testimonials from '@/components/Testimonials';
import CorporateDriverCTA from '@/components/CorporateDriverCTA';
import MobileAppBanner from '@/components/MobileAppBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBookingWidget />
      <ValueProposition />
      <ServicesGrid />
      <MetricsSection />
      <Testimonials />
      <CorporateDriverCTA />
      <MobileAppBanner />
      <Footer />
    </main>
  );
}
