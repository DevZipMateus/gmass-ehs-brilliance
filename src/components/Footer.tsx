import { Linkedin, Instagram, Youtube, Facebook, Phone, Mail, Headphones } from 'lucide-react';
import logoGmass from '@/assets/logo-gmass.png';

export function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-white py-8 sm:py-10 md:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src={logoGmass} 
              alt="Gmass Assessoria & Consultoria em EHS" 
              className="h-14 sm:h-16 w-auto" 
            />
          </div>

          {/* Sobre a G.mass */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
              SOBRE A G.mass
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>

          {/* Para Você */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
              PARA VOCÊ
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://gmass.etreinare.com.br/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  Área do Aluno
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Cresça Conosco */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
              CRESÇA CONOSCO
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#contato" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Torne-se uma empresa parceira
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/60 hover:text-accent transition-colors text-xs sm:text-sm">
                  Seja um professor
                </a>
              </li>
            </ul>
          </div>

          {/* Institucionais */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
              INSTITUCIONAIS
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/60 text-xs sm:text-sm">(Somente WhatsApp)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/60 text-xs sm:text-sm"></span>
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-accent" />
                <span className="text-white/60 text-xs sm:text-sm">Atendimento</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/gmassoficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" 
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
