import { Shield, Leaf, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/40 to-primary/30" />

      {/* Background pattern effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-xs sm:text-sm font-medium border border-primary-foreground/20">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              Segurança do trabalho
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 backdrop-blur-sm rounded-full text-primary-foreground text-xs sm:text-sm font-medium border border-accent/30">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              Meio ambiente
            </span>
          </div>

          <h1
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-up leading-tight"
            style={{ animationDelay: '0.2s' }}
          >
            Gmass Assessoria & Consultoria em EHS
          </h1>

          <h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 animate-fade-up font-light px-2"
            style={{ animationDelay: '0.3s' }}
          >
            Sua parceira especializada em segurança do trabalho, saúde ocupacional e gestão ambiental. Implantamos uma cultura de prevenção e garantimos o cumprimento das legislações vigentes.
          </h2>

          <p
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent mb-8 sm:mb-10 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            "Agora é com a gente!!!"
          </p>

          <div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-fade-up px-4 sm:px-0"
            style={{ animationDelay: '0.5s' }}
          >
            <Button asChild variant="heroPrimary" size="lg" className="w-full sm:w-auto sm:size-lg md:size-xl">
              <a href="https://wa.me/5515991463756" target="_blank" rel="noopener noreferrer">
                Solicite um orçamento
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto sm:size-lg md:size-xl">
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto sm:size-lg md:size-xl">
              <a href="https://gmass.etreinare.com.br/home" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                Ver nossos cursos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 50C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
