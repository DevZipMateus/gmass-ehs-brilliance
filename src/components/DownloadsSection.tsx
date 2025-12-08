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
    <section id="downloads" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Materiais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Downloads
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Acesse nossos formulários e documentos para avaliação de treinamentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-soft border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Preview da imagem */}
              <div className="relative bg-muted/50 p-3 sm:p-4 flex items-center justify-center">
                <img
                  src="/documents/formulario-avaliacao-treinamento.jpg"
                  alt="Formulário de Avaliação do Treinamento"
                  className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Informações e botão de download */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                      Formulário de avaliação do treinamento
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Documento JPG
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Utilize este formulário para avaliar a qualidade dos treinamentos realizados.
                  Inclui avaliação do treinamento, instrutor e autoavaliação do aluno.
                </p>

                <ul className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Informações do cliente e treinamento
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Avaliação do treinamento e instrutor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Autoavaliação do aluno
                  </li>
                </ul>

                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full gap-2"
                >
                  <Download className="w-4 sm:w-5 h-4 sm:h-5" />
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
