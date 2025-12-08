import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CoursesSection } from '@/components/CoursesSection';
import { HistorySection } from '@/components/HistorySection';
import { DownloadsSection } from '@/components/DownloadsSection';
import { InstagramSection } from '@/components/InstagramSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <HistorySection />
      <DownloadsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
