const logos = [
  "https://storage.googleapis.com/brandbird/assets/company-logos/Logomark/Stripe%20Logomark.svg",
  "https://storage.googleapis.com/brandbird/assets/company-logos/Logomark/Google%20Logomark.svg",
  "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
  "https://storage.googleapis.com/brandbird/assets/company-logos/Logomark/Zapier%20Logomark.svg",
  "https://storage.googleapis.com/brandbird/assets/company-logos/Logomark/Shopify%20Logomark.svg"
];

export const CompanyLogos = () => {
  return (
    <div className="flex items-center justify-center gap-12 text-neutral-400">
      {logos.map((logo, idx) => (
        <div 
          key={idx} 
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          <img 
            src={logo} 
            alt="Company logo" 
            className="h-12 w-auto"
          />
        </div>
      ))}
    </div>
  );
}; 