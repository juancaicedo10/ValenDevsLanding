import { motion } from "framer-motion";
import { Check, Rocket, Building2, ShoppingCart } from "lucide-react";

const pricingPlans = [
  {
    name: "Landing Page",
    description: "Para negocios que necesitan presencia ya",
    price: "100.000",
    icon: Rocket,
    features: [
      "Diseño personalizado",
      "Optimización móvil",
      "Formulario de contacto",
      "Hosting incluido",
      "Dominio .com incluido",
      "Certificado SSL",
    ],
    popular: true,
  },
  {
    name: "Sitio Corporativo",
    description: "Para empresas de servicios y consultoría en crecimiento",
    price: "500.000",
    icon: Building2,
    features: [
      "Hasta 8 páginas",
      "Blog integrado",
      "SEO avanzado",
      "Integración redes sociales",
      "Soporte prioritario 6 meses",
      "Analíticas de visitas",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const PricingSection = () => {
  return (
    <section id="precios" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(280, 100%, 60%, 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(185, 100%, 50%, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Planes a tu <span className="neon-text">Medida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Precios transparentes sin sorpresas. Elige el paquete que mejor se
            adapte a tu negocio.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative group ${
                plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""
              }`}
            >
              {/* Popular Badge */}

              {plan.popular && <div className="popular-badge">Más Vendido</div>}

              <div
                className={`glass-card p-8 h-full mt-5 items-center md:items-start flex flex-col transition-all duration-500 hover:translate-y-[-4px] ${
                  plan.popular ? "border-primary/30" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Plan Name */}
                <h3 className="font-display text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-muted-foreground text-sm">Desde</span>
                  <div className="flex-col xs:flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold neon-text">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm max-w-[100px]">
                      COP / MES
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-[90%] md:w-[70%] md:w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "neon-button"
                      : "border border-border hover:border-primary/50 text-foreground hover:bg-card"
                  }`}
                >
                  Solicitar Cotización
                </button>

                {/* Hover Glow */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: "0 0 60px hsl(185, 100%, 50%, 0.1)",
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Todos los planes incluyen garantía de satisfacción. Pagos flexibles
          disponibles.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
