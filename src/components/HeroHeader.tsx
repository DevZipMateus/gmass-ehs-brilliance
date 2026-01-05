import { useState } from 'react';
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

export function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      {/* Barra azul no topo + curva */}
      <div className="relative">
        {/* Fundo azul que cobre toda navegação */}
        <div className="absolute top-0 left-0 right-0 h-12 sm:h-14 bg-primary" />
        
        <svg
          className="w-full h-[100px] sm:h-[120px] md:h-[140px]"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curva azul principal - parte de cima reta, curva só na esquerda */}
          <path
            d="M0 0H1440V40C1440 40 1400 40 1300 40C1100 40 900 50 700 65C500 80 300 95 150 105C75 110 0 115 0 115V0Z"
            className="fill-primary"
          />
          {/* Linha verde accent */}
          <path
            d="M0 115C0 115 75 110 150 105C300 95 500 80 700 65C900 50 1100 40 1300 40C1400 40 1440 40 1440 40"
            className="stroke-accent"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* Logo posicionado sobre a curva */}
        <div className="absolute top-2 left-4 sm:left-8 md:left-12 z-10">
          <a href="#inicio" className="inline-block">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-14 xs:h-16 sm:h-20 md:h-24 w-auto"
            />
          </a>
        </div>

        {/* Navegação desktop - posicionada no topo direito */}
        <nav className="hidden lg:flex absolute top-4 right-8 xl:right-12 items-center gap-4 xl:gap-6">
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
            href="https://wa.me/5515991463756"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors whitespace-nowrap"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 bg-primary-foreground/10 rounded-lg"
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
        <div className="lg:hidden absolute top-[100px] sm:top-[120px] right-4 left-4 bg-background shadow-lg rounded-2xl overflow-hidden z-50 animate-fade-in">
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
    </div>
  );
}
