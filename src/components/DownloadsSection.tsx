import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadsSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/formulario-avaliacao-treinamento.jpg';
    link.download = 'formulario-avaliacao-treinamento.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="downloads" className="py-10 xs:py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Parallax background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 py-1 xs:py-1.5 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 border border-primary/20">
            Materiais
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
            Downloads
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
            Acesse nossos formulários e documentos para avaliação de treinamentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism download card */}
          <div className="bg-white/70 dark:bg-black/30 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-white/40 dark:border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Preview da imagem */}
              <div className="relative bg-muted/30 p-2 xs:p-3 sm:p-4 flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/documents/formulario-avaliacao-treinamento.jpg"
                    alt="Formulário de Avaliação do Treinamento"
                    className="w-full h-auto max-h-[200px] xs:max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-xl"
                  />
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 backdrop-blur-0 hover:backdrop-blur-sm transition-all duration-300 rounded-lg" />
                </div>
              </div>

              {/* Informações e botão de download */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-start gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4">
                  <div className="p-1.5 xs:p-2 sm:p-3 bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex-shrink-0 border border-primary/20">
                    <FileText className="w-5 xs:w-6 sm:w-8 h-5 xs:h-6 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-foreground leading-tight">
                      Formulário de avaliação do treinamento
                    </h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
                      Documento JPG
                    </p>
                  </div>
                </div>

                <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-3 xs:mb-4 sm:mb-6">
                  Utilize este formulário para avaliar a qualidade dos treinamentos realizados.
                  Inclui avaliação do treinamento, instrutor e autoavaliação do aluno.
                </p>

                {/* Glassmorphism list items */}
                <ul className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground mb-3 xs:mb-4 sm:mb-6 space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-1.5 xs:gap-2 bg-primary/5 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/10">
                    <span className="w-1 xs:w-1.5 h-1 xs:h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Informações do cliente e treinamento
                  </li>
                  <li className="flex items-center gap-1.5 xs:gap-2 bg-primary/5 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/10">
                    <span className="w-1 xs:w-1.5 h-1 xs:h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Avaliação do treinamento e instrutor
                  </li>
                  <li className="flex items-center gap-1.5 xs:gap-2 bg-primary/5 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/10">
                    <span className="w-1 xs:w-1.5 h-1 xs:h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Autoavaliação do aluno
                  </li>
                </ul>

                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full gap-2 shadow-xl"
                >
                  <Download className="w-4 xs:w-5 h-4 xs:h-5" />
                  Baixar formulário
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
