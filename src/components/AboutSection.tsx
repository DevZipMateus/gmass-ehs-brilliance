import { Target, Eye, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Quem somos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sobre a Gmass
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proporcionamos aos clientes a aplicação de uma gestão administrativa e operacional em segurança do trabalho e meio ambiente, garantindo o atendimento e cumprimento da legislação trabalhista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Eye className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Todos podemos contribuir com a melhoria contínua dos processos.
            </p>
          </div>

          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <Target className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhar na implantação de uma cultura de segurança e prevenção do meio ambiente.
            </p>
          </div>

          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Heart className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Atender de forma objetiva as legislações vigentes e normas institucionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
