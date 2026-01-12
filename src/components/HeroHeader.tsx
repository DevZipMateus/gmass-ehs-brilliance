import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      {/* Header com curvatura côncava usando SVG */}
      <div className="relative">
        <svg
          className="w-full h-[100px] sm:h-[120px] md:h-[140px]"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fundo azul com curva côncava - desce da direita para esquerda */}
          <path
            d="M0 0 H1440 V40 Q1200 40, 900 60 Q600 80, 300 95 Q100 108, 0 115 Z"
            className="fill-primary"
          />
          {/* Linha verde accent acompanhando a curva */}
          <path
            d="M0 115 Q100 108, 300 95 Q600 80, 900 60 Q1200 40, 1440 40"
            className="stroke-accent"
            strokeWidth="5"
            fill="none"
          />
        </svg>

        {/* Logo posicionado sobre o fundo azul */}
        <div className="absolute top-2 sm:top-3 md:top-4 right-4 sm:right-8 md:right-12 z-10">
          <a href="#inicio" className="inline-block">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
            />
          </a>
        </div>

        {/* Navegação desktop - posicionada no topo esquerdo */}
        <nav className="hidden lg:flex absolute top-3 md:top-4 left-12 xl:left-16 items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-primary-foreground/90 hover:text-accent text-[15px] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="font-medium text-primary-foreground/90 hover:text-accent text-[15px] transition-colors whitespace-nowrap"
          >
            Cadastro
          </a>
          <a
            href="https://wa.me/5515991463756"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium bg-accent text-accent-foreground px-4 py-2 rounded-full text-[15px] transition-colors hover:bg-accent/90 whitespace-nowrap"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute top-3 sm:top-4 left-4 p-2 bg-primary-foreground/10 rounded-lg z-10"
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
        <div className="lg:hidden absolute top-[70px] sm:top-[90px] right-4 left-4 bg-background shadow-lg rounded-2xl overflow-hidden z-50 animate-fade-in">
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
    </div>
  );
}
