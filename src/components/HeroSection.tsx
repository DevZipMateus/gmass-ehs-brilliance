import { Shield, Leaf } from 'lucide-react';

import { HeroHeader } from '@/components/HeroHeader';
import heroBackground from '@/assets/hero-background.jpg';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Hero Header com curva */}
      <HeroHeader />

      {/* Hero image positioned to the right/bottom of the curved header */}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 lg:left-[30%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Gradient overlay from left to blend with curve */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:from-background lg:via-background/50 lg:to-transparent" />

      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-primary/20" />

      {/* Animated background pattern effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container relative pt-[220px] sm:pt-[240px] md:pt-[260px] lg:pt-48 pb-12 xs:pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl lg:max-w-2xl lg:ml-0 mx-auto lg:mx-0 text-center lg:text-left">
          {/* Glassmorphism badges */}
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 xs:mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-primary/80 backdrop-blur-md rounded-full text-primary-foreground text-[10px] xs:text-xs sm:text-sm font-medium border border-white/20 shadow-lg">
              <Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
              Segurança do trabalho
            </span>
            <span className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-accent/80 backdrop-blur-md rounded-full text-primary-foreground text-[10px] xs:text-xs sm:text-sm font-medium border border-accent/30 shadow-lg">
              <Leaf className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
              Meio ambiente
            </span>
          </div>

          <h1
            className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 xs:mb-4 sm:mb-6 animate-fade-up leading-tight px-1 lg:px-0 drop-shadow-lg"
            style={{ animationDelay: '0.2s' }}
          >
            G.Mass
            <br />
            <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">Assessoria & Consultoria em EHS</span>
          </h1>

          {/* Glassmorphism content box */}
          <div 
            className="bg-primary/10 backdrop-blur-sm rounded-2xl p-4 xs:p-5 sm:p-6 mb-6 xs:mb-8 border border-primary/20 animate-fade-up mx-2 xs:mx-4 sm:mx-0"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/90 font-light">
              Sua parceira especializada em segurança do trabalho, saúde ocupacional e meio ambiente. Com o formato de uma gestão administrativa e operacional, implantamos uma cultura de prevenção no cumprimento das legislações vigentes.
            </h2>
          </div>

          <p
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent mb-6 xs:mb-8 sm:mb-10 animate-fade-up drop-shadow-lg"
            style={{ animationDelay: '0.4s' }}
          >
            "Agora é com a gente!!!"
          </p>

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
