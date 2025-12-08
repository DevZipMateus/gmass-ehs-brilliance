import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';
const navLinks = [{
  label: 'Início',
  href: '#inicio'
}, {
  label: 'Sobre',
  href: '#sobre'
}, {
  label: 'Serviços',
  href: '#servicos'
}, {
  label: 'História',
  href: '#historia'
}, {
  label: 'Contato',
  href: '#contato'
}];
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoGmass} alt="Gmass Assessoria & Consultoria em EHS" className="h-20 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
              {link.label}
            </a>)}
          <Button asChild variant={isScrolled ? 'default' : 'heroPrimary'} size="lg">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
          {isMobileMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-card animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>)}
            <Button asChild variant="default" size="lg" className="mt-2">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </nav>
        </div>}
    </header>;
}