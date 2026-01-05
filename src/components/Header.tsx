import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'História', href: '#historia' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Header flutuante após scroll
  if (isScrolled) {
    return (
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-primary/95 backdrop-blur-md rounded-full shadow-lg py-2 px-4 sm:px-6 transition-all duration-500 animate-fade-in">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-300 text-primary-foreground/90 hover:text-primary-foreground text-sm whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="heroPrimary" size="sm" className="whitespace-nowrap">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </nav>

          <button
            className="lg:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background shadow-card animate-fade-in rounded-2xl overflow-hidden">
            <nav className="py-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/5 font-medium py-3 px-2 transition-colors rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="default" size="lg" className="mt-3 w-full">
                <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    );
  }

  // Header inicial transparente com curva
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Navigation no topo */}
      <nav className="hidden lg:flex justify-center gap-6 xl:gap-8 py-4 text-primary-foreground">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-medium transition-colors duration-300 text-primary-foreground/90 hover:text-primary-foreground text-sm xl:text-base whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5515991463756"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors duration-300 text-primary-foreground/90 hover:text-primary-foreground text-sm xl:text-base whitespace-nowrap"
        >
          Fale Conosco
        </a>
      </nav>

      {/* Logo com curva decorativa */}
      <div className="relative">
        {/* Curva azul/verde */}
        <svg
          className="absolute top-0 left-0 w-full h-[200px] sm:h-[280px] md:h-[350px]"
          viewBox="0 0 1440 350"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H400C400 0 450 0 500 50C550 100 600 200 700 250C800 300 1000 320 1200 330C1300 335 1440 340 1440 340V350H0V0Z"
            className="fill-primary"
          />
          <path
            d="M0 0H380C380 0 430 0 480 45C530 90 580 185 680 235C780 285 980 305 1180 315C1280 320 1440 325 1440 325V330C1440 330 1300 325 1200 320C1000 310 800 290 700 240C600 190 550 90 500 45C450 0 400 0 400 0H0V0Z"
            className="fill-accent"
          />
        </svg>

        {/* Logo */}
        <div className="relative z-10 pl-4 sm:pl-8 md:pl-12 pt-2">
          <a href="#inicio" className="inline-block">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-20 xs:h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden absolute top-4 right-4 p-2 touch-manipulation bg-primary/80 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-primary-foreground" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 left-4 bg-background shadow-card animate-fade-in rounded-2xl overflow-hidden z-50">
          <nav className="py-4 flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary hover:bg-primary/5 font-medium py-3 px-2 transition-colors rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="default" size="lg" className="mt-3 w-full">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}