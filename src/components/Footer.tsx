import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import logoGmass from '@/assets/logo-gmass.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src={logoGmass} alt="Gmass Assessoria & Consultoria em EHS" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Especialistas em segurança do trabalho, saúde ocupacional e gestão ambiental. 
              Implantamos uma cultura de prevenção e garantimos o cumprimento das legislações vigentes.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              CNPJ: 49.956.700/0001-43
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#historia" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  História
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Training */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Redes sociais</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gmassoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <h4 className="font-heading font-bold text-lg mb-3">Treinamentos EAD</h4>
            <a
              href="https://gmass.etreinare.com.br/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
            >
              Acesse a plataforma
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Gmass Assessoria & Consultoria em EHS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
