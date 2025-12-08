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
    <section id="historia" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Trajetória
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Nossa história
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Mais de uma década de experiência dedicada à segurança do trabalho e meio ambiente.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
          
          {/* Timeline line - mobile/tablet */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:hidden" />

          <div className="space-y-6 sm:space-y-8">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex items-start gap-4 sm:gap-6 md:gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="flex md:hidden items-center justify-center w-3 h-3 bg-accent rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0 mt-2" />

                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card border border-border/50 inline-block w-full md:w-auto">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-primary">
                        {event.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mt-1 sm:mt-2 mb-1 sm:mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
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
