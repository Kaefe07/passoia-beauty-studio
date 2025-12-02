import { useState } from "react";

const colorMap: Record<string, string> = {
  "cinza-color": "/images/cinza-boca.png",
  "vermelho-color": "/images/vermelho-boca.png",
  "bordo-color": "/images/bordo-boca.png",
  "nude-color": "/images/nude-boca.png",
};

const colors = [
  { id: "cinza-color", image: "/images/cinza-color.png", name: "Cinza" },
  { id: "vermelho-color", image: "/images/vermelho-color.png", name: "Vermelho" },
  { id: "bordo-color", image: "/images/bordo-color.png", name: "Bordô" },
  { id: "nude-color", image: "/images/nude-color.png", name: "Nude" },
];

const LaunchesSection = () => {
  const [selectedColor, setSelectedColor] = useState("cinza-color");
  const [mainImage, setMainImage] = useState("/images/cinza-boca.png");

  const handleColorClick = (colorId: string) => {
    setSelectedColor(colorId);
    setMainImage(colorMap[colorId]);
  };

  return (
    <section id="lancamentos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title mb-12 md:mb-16 text-foreground">
          Aproveite os Lançamentos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* 1ª Divisão - Produtos (hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-4 items-center">
            <img 
              src="/images/aberto.png" 
              alt="Batom aberto"
              className="w-full max-w-[200px] h-auto object-contain"
            />
            <img 
              src="/images/fechado.png" 
              alt="Batom fechado"
              className="w-full max-w-[200px] h-auto object-contain"
            />
            <img 
              src="/images/batom.png" 
              alt="Batons"
              className="w-full max-w-[200px] h-auto object-contain"
            />
          </div>

          {/* 2ª Divisão - Imagem principal */}
          <div className="flex justify-center">
            <img 
              src={mainImage} 
              alt="Modelo com batom"
              className="w-full max-w-[350px] h-auto object-contain rounded-lg shadow-lg transition-all duration-500"
            />
          </div>

          {/* 3ª Divisão - Descrição e cores */}
          <div className="space-y-6">
            {/* Estrelas */}
            <img 
              src="/images/estrelas.png" 
              alt="5 estrelas"
              className="h-6 w-auto"
            />

            {/* Título do produto */}
            <h3 className="text-2xl font-display font-semibold text-foreground">
              Matte Premium
            </h3>

            {/* Cores disponíveis */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Cores disponíveis
              </p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorClick(color.id)}
                    className={`color-swatch ${selectedColor === color.id ? 'active' : ''}`}
                    title={color.name}
                    aria-label={`Cor ${color.name}`}
                  >
                    <img 
                      src={color.image} 
                      alt={color.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Descrição */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Descrição
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
