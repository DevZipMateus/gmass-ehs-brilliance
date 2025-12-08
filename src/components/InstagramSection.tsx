import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const INSTAGRAM_URL = 'https://www.instagram.com/gmassoficial/';
const INSTAGRAM_HANDLE = '@gmassoficial';

export function InstagramSection() {
  return (
    <section id="instagram" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4]/5 via-[#fd1d1d]/5 to-[#fcb045]/5" />
      
      <div className="container px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Instagram className="w-4 h-4" />
              Siga-nos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Acompanhe nosso Instagram
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Fique por dentro das novidades, dicas de segurança do trabalho, treinamentos e muito mais!
            </p>
          </div>

          {/* Instagram Card */}
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-card border border-border/50 text-center">
            {/* Instagram Icon with Gradient */}
            <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shadow-lg">
              <Instagram className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
            </div>

            {/* Handle */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              {INSTAGRAM_HANDLE}
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8">
              Gmass Assessoria & Consultoria em EHS
            </p>

            {/* Stats/Features */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-[#fd1d1d]" />
                <span className="text-sm sm:text-base">Conteúdo exclusivo</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-[#833ab4]" />
                <span className="text-sm sm:text-base">Dicas de segurança</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="xl"
              className="w-full sm:w-auto bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90 transition-opacity border-0"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                Seguir no Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Clique para visitar nosso perfil
            </p>
          </div>

          {/* Content highlights */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center border border-border/50 hover:shadow-card transition-shadow">
              <div className="text-3xl sm:text-4xl mb-2">📚</div>
              <h4 className="font-heading font-bold text-foreground mb-1">Treinamentos</h4>
              <p className="text-sm text-muted-foreground">Novidades sobre nossos cursos</p>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center border border-border/50 hover:shadow-card transition-shadow">
              <div className="text-3xl sm:text-4xl mb-2">⚠️</div>
              <h4 className="font-heading font-bold text-foreground mb-1">Dicas de SST</h4>
              <p className="text-sm text-muted-foreground">Conteúdo educativo diário</p>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center border border-border/50 hover:shadow-card transition-shadow">
              <div className="text-3xl sm:text-4xl mb-2">🏆</div>
              <h4 className="font-heading font-bold text-foreground mb-1">Bastidores</h4>
              <p className="text-sm text-muted-foreground">Conheça nossa equipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
