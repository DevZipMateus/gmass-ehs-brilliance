import safetyInspectionImage from '@/assets/safety-inspection.jpg';
import teamCollaborationImage from '@/assets/team-collaboration.jpg';

const timelineEvents = [
  {
    year: '2010',
    title: 'Fundação',
    description: 'Início das atividades como Ramon Segurança e Saúde.',
  },
  {
    year: '2013',
    title: 'Treinamentos InCompany',
    description: 'Inclusão de treinamentos corporativos e normativos presenciais.',
  },
  {
    year: '2018',
    title: 'Nova identidade',
    description: 'Mudança para Gmass Assessoria & Consultoria em EHS.',
  },
  {
    year: '2019',
    title: 'Treinamentos EAD',
    description: 'Lançamento dos treinamentos no formato a distância.',
  },
  {
    year: '2022',
    title: 'Gestão ambiental',
    description: 'Inclusão de serviços de gestão de meio ambiente.',
  },
  {
    year: '2023',
    title: 'Perícia ambiental',
    description: 'Ampliação com serviços de perícia ambiental.',
  },
  {
    year: '2024',
    title: 'Melhoria contínua',
    description: 'Consolidação e aprimoramento de todos os serviços.',
  },
];

export function HistorySection() {
  return (
    <section id="historia" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3">
            Trajetória
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
            Nossa história
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-1">
            Mais de uma década de experiência dedicada à segurança do trabalho e meio ambiente.
          </p>
        </div>

        {/* Featured images grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={safetyInspectionImage}
              alt="Inspeção de segurança do trabalho"
              className="w-full h-40 xs:h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-foreground mb-0.5">
                  Excelência em segurança
                </h3>
                <p className="text-primary-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Acompanhamento técnico especializado
                </p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={teamCollaborationImage}
              alt="Equipe de consultores em EHS"
              className="w-full h-40 xs:h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent flex items-end p-3 xs:p-4 sm:p-6">
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-accent-foreground mb-0.5">
                  Equipe qualificada
                </h3>
                <p className="text-accent-foreground/80 text-[10px] xs:text-xs sm:text-sm">
                  Profissionais dedicados ao seu sucesso
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
          
          {/* Timeline line - mobile/tablet */}
          <div className="absolute left-3 xs:left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:hidden" />

          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex items-start gap-3 xs:gap-4 sm:gap-6 md:gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="flex md:hidden items-center justify-center w-2.5 xs:w-3 h-2.5 xs:h-3 bg-accent rounded-full border-2 xs:border-4 border-background shadow-lg z-10 flex-shrink-0 mt-2" />

                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-card border border-border/50 inline-block w-full md:w-auto">
                      <span className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-primary">
                        {event.year}
                      </span>
                      <h3 className="text-sm xs:text-base sm:text-lg font-heading font-bold text-foreground mt-1 mb-1 xs:mb-2">
                        {event.title}
                      </h3>
                      <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - desktop */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Empty space for alignment - desktop */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
