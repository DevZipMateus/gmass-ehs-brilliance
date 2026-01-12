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
      {/* Barra azul no topo + curva */}
      <div className="relative">
        {/* Fundo azul que cobre toda navegação */}
        <div className="absolute top-0 left-0 right-0 h-14 sm:h-14 bg-primary" />
        
        <svg
          className="w-full h-[100px] sm:h-[130px] md:h-[160px]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curva azul principal - mais acentuada */}
          <path
            d="M0 0H1440V20Q1400 22 1300 28Q1100 40 900 60Q700 85 500 110Q300 135 150 150Q50 158 0 160V0Z"
            className="fill-primary"
          />
          {/* Curva verde accent */}
          <path
            d="M0 160Q50 158 150 150Q300 135 500 110Q700 85 900 60Q1100 40 1300 28Q1400 22 1440 20"
            className="stroke-accent"
            strokeWidth="8"
            fill="none"
          />
        </svg>

        {/* Logo maior posicionado sobre a curva */}
        <div className="absolute top-2 left-4 sm:left-8 md:left-12 z-10">
          <a href="#inicio" className="inline-block">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-20 xs:h-24 sm:h-28 md:h-36 lg:h-40 w-auto"
            />
          </a>
        </div>

        {/* Navegação desktop - posicionada no topo direito */}
        <nav className="hidden lg:flex absolute top-3 right-12 xl:right-16 items-center gap-4 xl:gap-6">
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
          className="lg:hidden absolute top-3 right-4 p-2 bg-primary-foreground/10 rounded-lg"
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
        <div className="lg:hidden absolute top-14 right-4 left-4 bg-background shadow-lg rounded-2xl overflow-hidden z-50 animate-fade-in">
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
