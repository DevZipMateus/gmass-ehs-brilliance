import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import logoGmass from '@/assets/logo-gmass.png';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-primary-foreground py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-6 sm:gap-8 mb-5 xs:mb-6 sm:mb-8">
          {/* Logo & About */}
          <div className="xs:col-span-2">
            <img src={logoGmass} alt="Gmass Assessoria & Consultoria em EHS" className="h-12 xs:h-14 sm:h-16 w-auto mb-2 xs:mb-3 sm:mb-4" />
            <p className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm leading-relaxed max-w-md">
              Especialistas em segurança do trabalho, saúde ocupacional e gestão ambiental.
              Implantamos uma cultura de prevenção e garantimos o cumprimento das legislações vigentes.
            </p>
            <p className="text-primary-foreground/50 text-[10px] xs:text-xs mt-2 xs:mt-3 sm:mt-4">
              CNPJ: 49.956.700/0001-43
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm xs:text-base sm:text-lg mb-2 xs:mb-3 sm:mb-4">
              Links rápidos
            </h4>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#historia" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  História
                </a>
              </li>
              <li>
                <a href="#downloads" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors text-[10px] xs:text-xs sm:text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Training */}
          <div>
            <h4 className="font-heading font-bold text-sm xs:text-base sm:text-lg mb-2 xs:mb-3 sm:mb-4">
              Redes sociais
            </h4>
            <div className="flex gap-2 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
              <a href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/" target="_blank" rel="noopener noreferrer" className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/gmassoficial/" target="_blank" rel="noopener noreferrer" className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5" />
              </a>
            </div>

            <h4 className="font-heading font-bold text-sm xs:text-base sm:text-lg mb-1.5 xs:mb-2 sm:mb-3">
              Treinamentos EAD
            </h4>
            <a href="https://gmass.etreinare.com.br/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 xs:gap-2 text-accent hover:text-accent/80 transition-colors text-[10px] xs:text-xs sm:text-sm">
              Acesse a plataforma
              <ExternalLink className="w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4 xs:pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/50 text-[10px] xs:text-xs sm:text-sm">
            © {currentYear} Gmass Assessoria & Consultoria em EHS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}