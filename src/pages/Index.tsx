import { FloatingHeader } from '@/components/FloatingHeader';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CoursesSection } from '@/components/CoursesSection';
import { HistorySection } from '@/components/HistorySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <HistorySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
