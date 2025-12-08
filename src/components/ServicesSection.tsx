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
    <section id="servicos" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em segurança do trabalho e meio ambiente para garantir a conformidade legal e a proteção de seus colaboradores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
