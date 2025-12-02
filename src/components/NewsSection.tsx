const NewsSection = () => {
  return (
    <section id="novidades" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title mb-12 md:mb-16 text-foreground">
          Novidades Para Você
        </h2>

        <div className="w-full h-[30vh] rounded-lg overflow-hidden">
          <img 
            src="/images/novidades.png" 
            alt="Novidades em maquiagem"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
