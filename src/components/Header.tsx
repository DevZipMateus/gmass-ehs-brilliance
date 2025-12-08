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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary overflow-hidden ${
        isScrolled ? 'shadow-card py-2 md:py-3' : 'py-3 md:py-5'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-10 -left-20 w-40 h-40 bg-accent rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-20 w-60 h-60 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="container relative flex items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoGmass}
            alt="Gmass Assessoria & Consultoria em EHS"
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium transition-colors duration-300 text-primary-foreground/90 hover:text-primary-foreground text-sm xl:text-base"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="heroPrimary" size="default" className="lg:size-default xl:size-lg">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 -mr-2"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-card animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container py-4 sm:py-6 flex flex-col gap-2 sm:gap-4 px-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-medium py-2 sm:py-3 transition-colors border-b border-border/30 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="default" size="lg" className="mt-2 w-full">
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