import { useState } from "react";
import { X } from "lucide-react";

interface LookItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

const looks: LookItem[] = [
  {
    id: "labios",
    image: "/images/labios.png",
    title: "Lábios",
    description: "Batons e glosses com cores vibrantes e duradouras. Fórmula hidratante com vitamina E.",
    price: "R$ 49,90"
  },
  {
    id: "olhos",
    image: "/images/olhos.png",
    title: "Olhos",
    description: "Paletas de sombras com pigmentação intensa e acabamento matte ou cintilante.",
    price: "R$ 89,90"
  },
  {
    id: "rosto",
    image: "/images/rosto.png",
    title: "Rosto",
    description: "Bases, corretivos e blushes para uma pele impecável e luminosa.",
    price: "R$ 79,90"
  },
  {
    id: "tendencia",
    image: "/images/tendencia.png",
    title: "Tendência",
    description: "As últimas tendências em maquiagem para você arrasar em qualquer ocasião.",
    price: "R$ 129,90"
  }
];

const LooksSection = () => {
  const [selectedLook, setSelectedLook] = useState<LookItem | null>(null);

  const closeModal = () => setSelectedLook(null);

  return (
    <section id="look" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title mb-12 md:mb-16 text-foreground">
          Looks e Dicas de Maquiagem
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {looks.map((look) => (
            <div 
              key={look.id}
              className="look-card group aspect-[3/4] rounded-lg"
              onClick={() => setSelectedLook(look)}
            >
              <img 
                src={look.image} 
                alt={look.title}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLook && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
            
            <img 
              src={selectedLook.image} 
              alt={selectedLook.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
              {selectedLook.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {selectedLook.description}
            </p>
            
            <p className="text-2xl font-semibold text-accent">
              {selectedLook.price}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LooksSection;
