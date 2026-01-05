import { GraduationCap, BookOpen, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import trainingSessionImage from '@/assets/training-session.jpg';
import elearningImage from '@/assets/elearning-course.jpg';

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

export function CoursesSection() {
  return (
    <section id="cursos" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Animated parallax background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-primary-foreground/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container px-4 sm:px-6 relative">
        {/* Diferenciais - Features grid at top */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:-translate-y-1 ${index === 2 ? 'xs:col-span-2 md:col-span-1' : ''}`}
            >
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-accent/30 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 border border-accent/20">
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

        {/* Title section */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1 xs:py-1.5 bg-white/10 backdrop-blur-md text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-3 border border-white/20 shadow-lg">
            <GraduationCap className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
            Capacitação profissional
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2 xs:mb-3 sm:mb-4 drop-shadow-lg">
            Nossos cursos e treinamentos
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/80 max-w-3xl mx-auto px-1">
            Oferecemos uma ampla variedade de cursos e treinamentos em segurança do trabalho, 
            saúde ocupacional e meio ambiente, todos ministrados por profissionais qualificados.
          </p>
        </div>

        {/* Featured training images with glassmorphism overlays */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
            <img
              src={trainingSessionImage}
              alt="Treinamento presencial de segurança do trabalho"
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                  Treinamentos presenciais
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  Capacitação InCompany com instrutores especializados
                </p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
            <img
              src={elearningImage}
              alt="Plataforma de cursos EAD"
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent flex items-end p-4 sm:p-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-accent-foreground mb-1">
                  Cursos EAD
                </h3>
                <p className="text-accent-foreground/80 text-xs sm:text-sm">
                  Aprenda no seu ritmo com nossa plataforma online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solicitar orçamento button */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Button asChild variant="heroPrimary" size="lg" className="w-full xs:w-auto shadow-xl">
            <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>

        {/* CTA to courses platform */}
        <div className="text-center">
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3 xs:mb-4 sm:mb-6 drop-shadow-lg">
            Acesse nossa plataforma de cursos
          </h3>
          <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/80 mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto">
            Explore todos os nossos cursos disponíveis, inscreva-se e comece a aprender hoje mesmo. 
            Nossa plataforma oferece uma experiência completa de aprendizado online.
          </p>
          <Button
            asChild
            variant="heroPrimary"
            size="lg"
            className="w-full xs:w-auto shadow-2xl"
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
    </section>
  );
}
