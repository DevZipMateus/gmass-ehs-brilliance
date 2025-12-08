import { GraduationCap, BookOpen, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courseFeatures = [
  {
    icon: BookOpen,
    title: 'Conteúdo atualizado',
    description: 'Material didático sempre em conformidade com as normas vigentes',
  },
  {
    icon: Award,
    title: 'Certificação reconhecida',
    description: 'Certificados válidos em todo território nacional',
  },
  {
    icon: Users,
    title: 'Instrutores qualificados',
    description: 'Profissionais experientes e certificados na área',
  },
];

const coursesList = [
  'NR-10 - Segurança em instalações elétricas',
  'NR-35 - Trabalho em altura',
  'NR-33 - Espaços confinados',
  'NR-11 - Operador de empilhadeira',
  'CIPA - Comissão interna de prevenção de acidentes',
  'Brigada de incêndio',
];

export function CoursesSection() {
  return (
    <section id="cursos" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 relative">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1 xs:py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-3 border border-primary-foreground/20">
            <GraduationCap className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
            Capacitação profissional
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2 xs:mb-3 sm:mb-4">
            Nossos cursos e treinamentos
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/80 max-w-3xl mx-auto px-1">
            Oferecemos uma ampla variedade de cursos e treinamentos em segurança do trabalho, 
            saúde ocupacional e meio ambiente, todos ministrados por profissionais qualificados.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 ${index === 2 ? 'xs:col-span-2 md:col-span-1' : ''}`}
            >
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-primary-foreground mb-1 xs:mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Courses list and CTA */}
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 border border-primary-foreground/10">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-primary-foreground mb-3 xs:mb-4 sm:mb-6">
              Alguns de nossos cursos
            </h3>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              {coursesList.map((course, index) => (
                <li key={index} className="flex items-start gap-2 xs:gap-3">
                  <CheckCircle className="w-4 xs:w-5 h-4 xs:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs xs:text-sm sm:text-base text-primary-foreground/90">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3 xs:mb-4 sm:mb-6">
              Acesse nossa plataforma de cursos
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/80 mb-4 xs:mb-6 sm:mb-8">
              Explore todos os nossos cursos disponíveis, inscreva-se e comece a aprender hoje mesmo. 
              Nossa plataforma oferece uma experiência completa de aprendizado online.
            </p>
            <Button
              asChild
              variant="heroPrimary"
              size="lg"
              className="w-full xs:w-auto"
            >
              <a
                href="https://gmass.etreinare.com.br/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="w-4 xs:w-5 h-4 xs:h-5" />
                Ver nossos cursos
                <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
