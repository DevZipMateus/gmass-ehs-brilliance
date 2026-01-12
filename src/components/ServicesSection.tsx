import { 
  Shield, 
  FileText, 
  Users, 
  ClipboardCheck, 
  GraduationCap,
  Leaf,
  Building2,
  AlertTriangle,
  Truck,
  Settings,
  Flame,
  Wind,
  ArrowUpFromLine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import auditImage from '@/assets/services-audit.jpg';
import operationalImage from '@/assets/operational-management.jpg';

const servicesAdmin = [
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
    title: 'Gestão operacional',
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

const servicesOperacional = [
  {
    icon: Users,
    title: 'NR 05 - CIPA',
    description: 'Comissão Interna de Prevenção de Acidentes e assédio.',
    color: 'accent',
  },
  {
    icon: Settings,
    title: 'NR 10',
    description: 'Segurança em instalações e serviços em eletricidade.',
    color: 'primary',
  },
  {
    icon: Truck,
    title: 'NR 11 – Transporte, Mov.',
    description: 'Transporte, movimentação, armazenagem e manuseio de materiais.',
    color: 'accent',
  },
  {
    icon: ClipboardCheck,
    title: 'NR 12',
    description: 'Segurança no trabalho em máquinas e equipamentos.',
    color: 'primary',
  },
  {
    icon: AlertTriangle,
    title: 'NR 20',
    description: 'Segurança com inflamáveis e combustíveis.',
    color: 'accent',
  },
  {
    icon: Flame,
    title: 'NR 23 – Brigada de Incêndio',
    description: 'Proteção contra incêndios e formação de brigadas.',
    color: 'primary',
  },
  {
    icon: Wind,
    title: 'NR 33 – Espaço Confinado',
    description: 'Segurança em espaços confinados.',
    color: 'accent',
  },
  {
    icon: ArrowUpFromLine,
    title: 'NR 35 – Trabalho em Altura',
    description: 'Proteção para trabalhos acima de 2 metros.',
    color: 'primary',
  },
];

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
    title: 'Gestão operacional',
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
    <section id="servicos" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-secondary/50 relative overflow-hidden">
      {/* Parallax background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="container px-4 sm:px-6 relative">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-accent/10 backdrop-blur-sm text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 border border-accent/20">
            O que fazemos
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-1">
            Soluções completas em segurança do trabalho e meio ambiente para garantir a conformidade legal e a proteção de seus colaboradores.
          </p>
        </div>

        {/* Gestão Administrativas - Image + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Featured Image */}
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-xl lg:row-span-2">
            <img
              src={auditImage}
              alt="Gestão administrativa de segurança do trabalho"
              className="w-full h-48 xs:h-56 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 xs:p-4 border border-white/20 w-full">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-foreground mb-0.5 xs:mb-1">
                  Gestão administrativas
                </h3>
                <p className="text-primary-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Inspeções detalhadas para garantir conformidade
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4">
            {servicesAdmin.map((service, index) => {
              const Icon = service.icon;
              const isPrimary = service.color === 'primary';

              return (
                <div
                  key={index}
                  className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 xs:p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/40 dark:border-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 ${
                      isPrimary ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'
                    } backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-2 xs:mb-3 group-hover:scale-110 transition-transform duration-300 border`}
                  >
                    <Icon className={`w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-heading font-bold text-foreground mb-1 xs:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gestão Operacional - Placeholder for future cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Featured Image */}
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-xl lg:row-span-2">
            <img
              src={operationalImage}
              alt="Gestão operacional e sustentabilidade"
              className="w-full h-48 xs:h-56 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 xs:p-4 border border-white/20 w-full">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-accent-foreground mb-0.5 xs:mb-1">
                  Gestão operacional
                </h3>
                <p className="text-accent-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Conhecimentos com o atendimento normativo
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4">
            {servicesOperacional.map((service, index) => {
              const Icon = service.icon;
              const isPrimary = service.color === 'primary';

              return (
                <div
                  key={index}
                  className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 xs:p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/40 dark:border-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 ${
                      isPrimary ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'
                    } backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-2 xs:mb-3 group-hover:scale-110 transition-transform duration-300 border`}
                  >
                    <Icon className={`w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-heading font-bold text-foreground mb-1 xs:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
