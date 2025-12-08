import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';

export function ContactSection() {
  return (
    <section id="contato" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-3 border border-primary-foreground/20">
            Fale conosco
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2 xs:mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/80 max-w-3xl mx-auto px-1">
            Estamos prontos para atender sua empresa e oferecer as melhores soluções em segurança do trabalho e meio ambiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-accent/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-0.5">
                  Telefone / WhatsApp
                </h3>
                <a
                  href="https://wa.me/5515991463756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs xs:text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (15) 99146-3756
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-accent/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-0.5">
                  E-mail
                </h3>
                <a
                  href="mailto:ricardoandremonteiro@gmail.com"
                  className="text-xs xs:text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors break-all"
                >
                  ricardoandremonteiro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-accent/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-0.5">
                  Endereço
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-primary-foreground/80">
                  Três de Março, 2025 - Aparecidinha
                  <br />
                  Sorocaba - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-accent/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-0.5">
                  Horário de funcionamento
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-primary-foreground/80">
                  Segunda a sexta: 08h às 22h
                  <br />
                  Sábado: 09h às 17h
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-2 xs:mb-3 sm:mb-4">
                Redes sociais
              </h3>
              <div className="flex gap-2 xs:gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-accent transition-colors border border-primary-foreground/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com/gmassoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 xs:w-10 sm:w-12 h-9 xs:h-10 sm:h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-accent transition-colors border border-primary-foreground/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/20">
            <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6">
              <img
                src={logoGmass}
                alt="Gmass logo"
                className="h-12 xs:h-14 sm:h-16 md:h-20 w-auto"
              />
            </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-center mb-2 xs:mb-3 sm:mb-4">
              Solicite um orçamento
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-primary-foreground/80 text-center mb-4 xs:mb-6 sm:mb-8">
              Clique no botão abaixo para falar diretamente com nossa equipe pelo WhatsApp e receber um atendimento personalizado.
            </p>
            <Button asChild variant="heroPrimary" size="lg" className="w-full">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
            <p className="text-[10px] xs:text-xs sm:text-sm text-primary-foreground/60 text-center mt-2 xs:mt-3 sm:mt-4">
              Resposta rápida • Atendimento especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
