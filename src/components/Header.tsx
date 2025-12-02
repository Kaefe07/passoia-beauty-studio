import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src="/images/passoia.png" 
              alt="Passoia" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("look")}
              className="nav-link text-foreground"
            >
              Look
            </button>
            <button 
              onClick={() => scrollToSection("lancamentos")}
              className="nav-link text-foreground"
            >
              Lançamentos
            </button>
            <button 
              onClick={() => scrollToSection("novidades")}
              className="nav-link text-foreground"
            >
              Novidades
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-down">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection("look")}
                className="nav-link text-foreground px-4 py-3 text-left hover:bg-muted"
              >
                Look
              </button>
              <button 
                onClick={() => scrollToSection("lancamentos")}
                className="nav-link text-foreground px-4 py-3 text-left hover:bg-muted"
              >
                Lançamentos
              </button>
              <button 
                onClick={() => scrollToSection("novidades")}
                className="nav-link text-foreground px-4 py-3 text-left hover:bg-muted"
              >
                Novidades
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
