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
      {/* Barra azul no topo + curva côncava */}
      <div className="relative">
        {/* Fundo azul principal do header */}
        <div className="bg-primary h-[80px] sm:h-[100px] md:h-[120px]" />
        
        {/* Curvatura côncava usando pseudo-elemento */}
        <div className="relative">
          <div 
            className="absolute -top-[60px] sm:-top-[80px] md:-top-[100px] left-0 w-full h-[80px] sm:h-[100px] md:h-[120px] bg-transparent"
            style={{
              background: 'transparent',
            }}
          />
          {/* Elemento que cria a curva côncava */}
          <div 
            className="absolute -top-[60px] sm:-top-[80px] md:-top-[100px] left-0 w-full h-[80px] sm:h-[100px] md:h-[120px]"
            style={{
              backgroundColor: 'hsl(var(--background))',
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            }}
          />
          {/* Linha verde accent na borda da curva */}
          <div 
            className="absolute -top-[60px] sm:-top-[80px] md:-top-[100px] left-0 w-full h-[80px] sm:h-[100px] md:h-[120px] pointer-events-none"
            style={{
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
              border: '4px solid hsl(var(--accent))',
              borderBottom: 'none',
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Logo posicionado sobre o fundo azul */}
        <div className="absolute top-3 sm:top-4 md:top-6 left-4 sm:left-8 md:left-12 z-10">
          <a href="#inicio" className="inline-block">
            <img
              src={logoGmass}
              alt="Gmass Assessoria & Consultoria em EHS"
              className="h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </a>
        </div>

        {/* Navegação desktop - posicionada no topo direito */}
        <nav className="hidden lg:flex absolute top-6 md:top-8 right-12 xl:right-16 items-center gap-4 xl:gap-6">
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
          className="lg:hidden absolute top-4 sm:top-6 right-4 p-2 bg-primary-foreground/10 rounded-lg z-10"
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
