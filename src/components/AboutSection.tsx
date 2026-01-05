import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-training.jpg';

export function AboutSection() {
  return (
    <section id="sobre" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration with parallax effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Equipe diversa em treinamento de segurança do trabalho"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
            />
            {/* Glassmorphism overlay effect */}
            <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-6 sm:-right-6 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 bg-primary/20 backdrop-blur-sm rounded-xl sm:rounded-2xl -z-10 hidden xs:block border border-primary/10" />
            <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 sm:-top-6 sm:-left-6 w-16 xs:w-20 sm:w-24 md:w-28 h-16 xs:h-20 sm:h-24 md:h-28 bg-accent/20 backdrop-blur-sm rounded-lg sm:rounded-xl -z-10 hidden xs:block border border-accent/10" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 border border-primary/20">
              Quem somos
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
              Sobre a Gmass
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground mb-3">
              Com mais de uma década de experiência, a G.mass é especializada em consultoria e assessoria em segurança do trabalho, saúde ocupacional e meio ambiente.
            </p>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground">
              Nossa equipe de profissionais qualificados está preparada para atender às necessidades específicas de cada cliente, oferecendo soluções personalizadas e eficientes.
            </p>
          </div>
        </div>

        {/* Glassmorphism cards for Vision, Mission, Values */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          <div className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-white/10 hover:-translate-y-1">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 border border-primary/20">
              <Eye className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">Visão</h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Todos podemos contribuir com a melhoria contínua dos processos.
            </p>
          </div>

          <div className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-white/10 hover:-translate-y-1">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-accent/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 border border-accent/20">
              <Target className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">Missão</h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Trabalhar na implantação de uma cultura de segurança e prevenção do meio ambiente.
            </p>
          </div>

          <div className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-white/10 hover:-translate-y-1 xs:col-span-2 md:col-span-1">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 border border-primary/20">
              <Heart className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">Valores</h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Atender de forma objetiva as legislações vigentes e normas institucionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
