import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-training.jpg';

export function AboutSection() {
  return (
    <section id="sobre" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3">
            Quem somos
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
            Sobre a Gmass
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-1">
            Proporcionamos aos clientes a aplicação de uma gestão administrativa e operacional em segurança do trabalho e meio ambiente, garantindo o atendimento e cumprimento da legislação trabalhista.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Treinamento de segurança do trabalho"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 xs:-bottom-3 xs:-right-3 sm:-bottom-4 sm:-right-4 w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 bg-primary/20 rounded-xl sm:rounded-2xl -z-10 hidden xs:block" />
            <div className="absolute -top-2 -left-2 xs:-top-3 xs:-left-3 sm:-top-4 sm:-left-4 w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-accent/20 rounded-lg sm:rounded-xl -z-10 hidden xs:block" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
              Excelência em segurança e saúde ocupacional
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-2 xs:mb-3 sm:mb-4 leading-relaxed">
              Com mais de uma década de experiência, a Gmass é referência em consultoria e assessoria em segurança do trabalho, saúde ocupacional e meio ambiente.
            </p>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nossa equipe de profissionais qualificados está preparada para atender às necessidades específicas de cada cliente, oferecendo soluções personalizadas e eficientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          <div className="group bg-card rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Eye className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">Visão</h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Todos podemos contribuir com a melhoria contínua dos processos.
            </p>
          </div>

          <div className="group bg-card rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <Target className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">Missão</h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
              Trabalhar na implantação de uma cultura de segurança e prevenção do meio ambiente.
            </p>
          </div>

          <div className="group bg-card rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 xs:col-span-2 md:col-span-1">
            <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
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
