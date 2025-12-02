const Footer = () => {
  const attendanceLinks = [
    { label: "Fale Conosco", href: "#" },
    { label: "Perguntas Frequentes", href: "#" },
    { label: "Meus Pedidos", href: "#" },
    { label: "Nossas Lojas", href: "#" },
  ];

  const paymentMethods = [
    { src: "/images/mastercard.png", alt: "Mastercard" },
    { src: "/images/visa.png", alt: "Visa" },
    { src: "/images/pix.png", alt: "Pix" },
    { src: "/images/boleto.png", alt: "Boleto" },
  ];

  const socialMedia = [
    { src: "/images/instagram.png", alt: "Instagram", href: "#" },
    { src: "/images/facebook-passoia.png", alt: "Facebook", href: "#" },
    { src: "/images/youtube.png", alt: "YouTube", href: "#" },
    { src: "/images/twitter-passoia.png", alt: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Atendimentos */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">Atendimentos</h4>
            <ul className="space-y-2">
              {attendanceLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">Formas de Pagamento</h4>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {paymentMethods.map((method) => (
                <div 
                  key={method.alt}
                  className="bg-primary-foreground rounded p-2 h-10 flex items-center justify-center"
                >
                  <img 
                    src={method.src} 
                    alt={method.alt}
                    className="h-5 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="footer-title text-primary-foreground">Siga-nos nas Redes Sociais</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.alt}
                  href={social.href}
                  className="w-10 h-10 rounded overflow-hidden transition-transform hover:scale-110"
                  aria-label={social.alt}
                >
                  <img 
                    src={social.src} 
                    alt={social.alt}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Passoia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
