import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-training.jpg';

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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Treinamento de segurança do trabalho"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-xl -z-10" />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Excelência em segurança e saúde ocupacional
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Com mais de uma década de experiência, a Gmass é referência em consultoria e assessoria em segurança do trabalho, saúde ocupacional e meio ambiente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe de profissionais qualificados está preparada para atender às necessidades específicas de cada cliente, oferecendo soluções personalizadas e eficientes.
            </p>
          </div>
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
