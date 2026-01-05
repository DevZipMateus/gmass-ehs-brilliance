import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório').max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string().trim().email('E-mail inválido').max(255, 'E-mail deve ter no máximo 255 caracteres'),
  phone: z.string().trim().min(1, 'Telefone é obrigatório').max(20, 'Telefone deve ter no máximo 20 caracteres'),
  message: z.string().trim().min(1, 'Mensagem é obrigatória').max(1000, 'Mensagem deve ter no máximo 1000 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Integrate with Lovable Cloud to send email
    // For now, show success message
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos em até 24 horas.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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

          {/* Contact Form */}
          <div className="bg-card/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/20">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-center mb-2 xs:mb-3">
              Envie sua mensagem
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-primary-foreground/80 text-center mb-4 xs:mb-6">
              Preencha o formulário abaixo e retornaremos em até <strong>24 horas</strong>.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-primary-foreground text-xs xs:text-sm">
                  Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent text-sm"
                />
                {errors.name && <p className="text-accent text-xs">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-primary-foreground text-xs xs:text-sm">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent text-sm"
                />
                {errors.email && <p className="text-accent text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-primary-foreground text-xs xs:text-sm">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent text-sm"
                />
                {errors.phone && <p className="text-accent text-xs">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-primary-foreground text-xs xs:text-sm">
                  Como podemos ajudar?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Descreva sua necessidade..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent text-sm resize-none"
                />
                {errors.message && <p className="text-accent text-xs">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                variant="heroPrimary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-[10px] xs:text-xs sm:text-sm text-primary-foreground/60 text-center mt-3 xs:mt-4">
              ⏰ Resposta garantida em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
