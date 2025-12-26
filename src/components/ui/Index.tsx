import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import RegionalSection from "@/components/RegionalSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ValenDevs | Desarrollo Web en el Oriente Antioqueño | Rionegro, La Ceja, Marinilla</title>
        <meta 
          name="description" 
          content="Agencia de desarrollo web en el Oriente Antioqueño. Creamos páginas web rápidas, seguras y diseñadas para vender. Atendemos Rionegro, La Ceja, Marinilla, Guarne y más." 
        />
        <meta name="keywords" content="desarrollo web rionegro, páginas web oriente antioqueño, diseño web la ceja, agencia digital marinilla, e-commerce guarne" />
        <link rel="canonical" href="https://valendevs.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ValenDevs | Tu Socio Tecnológico en el Oriente Antioqueño" />
        <meta property="og:description" content="Digitalizamos empresas con páginas web rápidas, seguras y diseñadas para vender en la región y el mundo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://valendevs.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ValenDevs",
            "description": "Agencia de desarrollo web en el Oriente Antioqueño",
            "url": "https://valendevs.com",
            "telephone": "+573001234567",
            "email": "hola@valendevs.com",
            "areaServed": [
              "Rionegro",
              "La Ceja", 
              "Marinilla",
              "Guarne",
              "El Carmen de Viboral",
              "El Retiro",
              "Santuario"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Antioquia",
              "addressCountry": "CO"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <RegionalSection />
        <PortfolioSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
