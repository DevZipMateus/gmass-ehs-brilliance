import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function WhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/5515991463756"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
