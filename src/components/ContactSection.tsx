import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoGmass from '@/assets/logo-gmass.png';

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa e oferecer as melhores soluções em segurança do trabalho e meio ambiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-1">Telefone / WhatsApp</h3>
                <a 
                  href="https://wa.me/5515991463756" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (15) 99146-3756
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-1">E-mail</h3>
                <a 
                  href="mailto:ricardoandremonteiro@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  ricardoandremonteiro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-1">Endereço</h3>
                <p className="text-primary-foreground/80">
                  Três de Março, 2025 - Aparecidinha<br />
                  Sorocaba - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-1">Horário de funcionamento</h3>
                <p className="text-primary-foreground/80">
                  Segunda a sexta: 08h às 22h<br />
                  Sábado: 09h às 17h
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-heading font-bold mb-4">Redes sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent transition-colors border border-primary-foreground/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/gmassoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent transition-colors border border-primary-foreground/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20">
            <div className="flex justify-center mb-6">
              <img src={logoGmass} alt="Gmass logo" className="h-20 w-auto" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-center mb-4">
              Solicite um orçamento
            </h3>
            <p className="text-primary-foreground/80 text-center mb-8">
              Clique no botão abaixo para falar diretamente com nossa equipe pelo WhatsApp e receber um atendimento personalizado.
            </p>
            <Button asChild variant="heroPrimary" size="xl" className="w-full">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/60 text-center mt-4">
              Resposta rápida • Atendimento especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
