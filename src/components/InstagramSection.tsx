import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const INSTAGRAM_URL = 'https://www.instagram.com/gmassoficial/';
const INSTAGRAM_HANDLE = '@gmassoficial';

export function InstagramSection() {
  return (
    <section id="instagram" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Animated background gradient with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4]/5 via-[#fd1d1d]/5 to-[#fcb045]/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#833ab4]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#fcb045]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#fd1d1d]/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="container px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <span className="inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1 xs:py-1.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full text-xs sm:text-sm font-semibold mb-3 shadow-lg">
              <Instagram className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
              Siga-nos
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
              Acompanhe nosso Instagram
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
              Fique por dentro das novidades, dicas de segurança do trabalho, treinamentos e muito mais!
            </p>
          </div>

          {/* Glassmorphism Instagram Card */}
          <div className="bg-white/70 dark:bg-black/30 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 md:p-10 shadow-2xl border border-white/40 dark:border-white/10 text-center">
            {/* Instagram Icon with Gradient and glow */}
            <div className="w-16 xs:w-20 sm:w-24 md:w-28 h-16 xs:h-20 sm:h-24 md:h-28 mx-auto mb-4 xs:mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
              <Instagram className="w-8 xs:w-10 sm:w-12 md:w-14 h-8 xs:h-10 sm:h-12 md:h-14 text-white relative z-10" />
            </div>

            {/* Handle */}
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-1 xs:mb-2">
              {INSTAGRAM_HANDLE}
            </h3>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6 sm:mb-8">
              Gmass Assessoria & Consultoria em EHS
            </p>

            {/* Stats/Features with glassmorphism */}
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-4 xs:mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/50 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 dark:border-white/10">
                <Heart className="w-4 xs:w-5 h-4 xs:h-5 text-[#fd1d1d]" />
                <span className="text-xs xs:text-sm sm:text-base text-foreground">Conteúdo exclusivo</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/50 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 dark:border-white/10">
                <MessageCircle className="w-4 xs:w-5 h-4 xs:h-5 text-[#833ab4]" />
                <span className="text-xs xs:text-sm sm:text-base text-foreground">Dicas de segurança</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full xs:w-auto bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90 transition-opacity border-0 shadow-xl"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 xs:w-5 h-4 xs:h-5" />
                Seguir no Instagram
                <ExternalLink className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
              </a>
            </Button>

            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground mt-3 xs:mt-4">
              Clique para visitar nosso perfil
            </p>
          </div>

          {/* Glassmorphism content highlights */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mt-6 xs:mt-8 sm:mt-10 md:mt-12">
            <div className="bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 text-center border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-1 xs:mb-2">📚</div>
              <h4 className="font-heading font-bold text-foreground text-sm xs:text-base mb-0.5 xs:mb-1">Treinamentos</h4>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">Novidades sobre nossos cursos</p>
            </div>
            <div className="bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 text-center border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-1 xs:mb-2">⚠️</div>
              <h4 className="font-heading font-bold text-foreground text-sm xs:text-base mb-0.5 xs:mb-1">Dicas de SST</h4>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">Conteúdo educativo diário</p>
            </div>
            <div className="bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 text-center border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-1 xs:mb-2">🏆</div>
              <h4 className="font-heading font-bold text-foreground text-sm xs:text-base mb-0.5 xs:mb-1">Bastidores</h4>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">Conheça nossa equipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
