import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Contato', href: '#contato' },
];

export function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
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

  if (!isVisible) return null;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-primary/95 backdrop-blur-md rounded-full shadow-lg py-2 px-4 sm:px-6 animate-fade-in">
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
              className="font-medium text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="font-medium text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors whitespace-nowrap"
          >
            Cadastro
          </a>
          <Button asChild variant="heroPrimary" size="sm" className="whitespace-nowrap">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>

        <button
          className="lg:hidden p-2"
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
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background shadow-lg rounded-2xl overflow-hidden animate-fade-in">
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
            <a
              href="#cadastro"
              className="text-foreground hover:text-primary hover:bg-primary/5 font-medium py-3 px-2 transition-colors rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cadastro
            </a>
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
