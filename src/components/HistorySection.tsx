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
    <section id="historia" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossa história
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de uma década de experiência dedicada à segurança do trabalho e meio ambiente.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 inline-block">
                      <span className="text-2xl font-heading font-bold text-primary">{event.year}</span>
                      <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Empty space for alignment */}
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
