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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { z } from 'zod';
import { supabaseClient } from '@/lib/supabase';

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
    
    try {
      const { data, error } = await supabaseClient.functions.invoke('send-contact-email', {
        body: {
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          mensagem: formData.message,
        },
      });

      if (error) {
        console.error('Erro ao enviar email:', error);
        toast({
          title: "Erro ao enviar mensagem",
          description: "Ocorreu um erro. Tente novamente mais tarde.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Mensagem enviada!",
          description: "Retornaremos em até 24 horas.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-3 border border-primary-foreground/20">
            Fale conosco
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-stretch">
          {/* Contact Info Card */}
          <div className="bg-card/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/20 flex flex-col">
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 flex-grow">
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
            </div>

            {/* Social Links Card */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold mb-3 xs:mb-4 text-center">
                Siga-nos nas redes sociais
              </h3>
              <TooltipProvider>
                <div className="flex justify-center gap-3 xs:gap-4 sm:gap-5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.linkedin.com/in/g-mass-assessoria-e-consultoria-em-ehs-7187331a5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-accent/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 border border-accent/30"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 xs:w-6 sm:w-7 h-5 xs:h-6 sm:h-7 text-accent" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Siga-nos no LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.instagram.com/gmassoficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-accent/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 border border-accent/30"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 xs:w-6 sm:w-7 h-5 xs:h-6 sm:h-7 text-accent" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Siga-nos no Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>

          {/* Contact Form */}
          <div id="cadastro" className="bg-card/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/20">
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
