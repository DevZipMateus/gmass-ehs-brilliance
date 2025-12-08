import { 
  Shield, 
  FileText, 
  Users, 
  ClipboardCheck, 
  GraduationCap,
  Leaf,
  Building2,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import auditImage from '@/assets/services-audit.jpg';
import environmentalImage from '@/assets/environmental.jpg';

const services = [
  {
    icon: Building2,
    title: 'Implantação e gestão do SESMT',
    description: 'Estruturação completa do serviço especializado em engenharia de segurança e medicina do trabalho conforme NR-4.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Gestão administrativa I',
    description: 'Brigada de emergência, CIPA e gestão ambiental com acompanhamento especializado.',
    color: 'accent',
  },
  {
    icon: FileText,
    title: 'Elaboração de documentos',
    description: 'PGR, PCMSO, PPP, Ordens de Serviço, CAT, Licença Ambiental, CADRI, CLCB e e-Social.',
    color: 'primary',
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos normativos',
    description: 'Capacitações InCompany e EAD para NRs, integração de novos colaboradores e DDS/DSS.',
    color: 'accent',
  },
  {
    icon: ClipboardCheck,
    title: 'Auditoria interna',
    description: 'Verificação de segurança, simulados de emergência e acompanhamento de conformidade.',
    color: 'primary',
  },
  {
    icon: Leaf,
    title: 'Gestão ambiental',
    description: 'Educação ambiental, perícia ambiental e assessoria em licenciamento.',
    color: 'accent',
  },
  {
    icon: AlertTriangle,
    title: 'Análise de riscos',
    description: 'Identificação, avaliação e controle de riscos ocupacionais e ambientais.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Consultoria em EHS',
    description: 'Assessoria completa em saúde, segurança e meio ambiente para sua empresa.',
    color: 'accent',
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3">
            O que fazemos
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-1">
            Soluções completas em segurança do trabalho e meio ambiente para garantir a conformidade legal e a proteção de seus colaboradores.
          </p>
        </div>

        {/* Featured images */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8 sm:mb-12">
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={auditImage}
              alt="Auditoria de segurança do trabalho"
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-foreground mb-0.5 xs:mb-1">
                  Auditorias especializadas
                </h3>
                <p className="text-primary-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Inspeções detalhadas para garantir conformidade
                </p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={environmentalImage}
              alt="Gestão ambiental e sustentabilidade"
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-accent-foreground mb-0.5 xs:mb-1">
                  Gestão ambiental
                </h3>
                <p className="text-accent-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Compromisso com a sustentabilidade
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';

            return (
              <div
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-card hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-8 xs:w-10 sm:w-12 md:w-14 h-8 xs:h-10 sm:h-12 md:h-14 ${
                    isPrimary ? 'bg-primary/10' : 'bg-accent/10'
                  } rounded-lg sm:rounded-xl flex items-center justify-center mb-2 xs:mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-4 xs:w-5 sm:w-6 md:w-7 h-4 xs:h-5 sm:h-6 md:h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold text-foreground mb-1 xs:mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 xs:mt-8 sm:mt-12 text-center">
          <Button asChild variant="default" size="lg" className="w-full xs:w-auto">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
