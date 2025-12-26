import { motion } from "framer-motion";
import { MapPin, Cloud, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Conocemos el Mercado Local",
    description:
      "No somos una agencia remota en otro país. Entendemos la dinámica comercial de Marinilla, El Retiro, Guarne y La Ceja.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Cloud,
    title: "Velocidad de Nube Global",
    description:
      "Tu sitio alojado en servidores de última generación. Carga instantánea para clientes impacientes.",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    icon: MessageCircle,
    title: "Soporte Directo por WhatsApp",
    description:
      "Habla con humanos, no con tickets eternos. Estamos aquí mismo, a un mensaje de distancia.",
    gradient: "from-neon-purple to-neon-magenta",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(185, 100%, 50%, 0.1) 0%, transparent 70%)",
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
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué <span className="neon-text">ValenDevs</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Somos la agencia digital que entiende las necesidades del empresario
            antioqueño
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass-card p-8 h-full transition-all duration-500 hover:translate-y-[-4px]">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} p-[1px]`}
                >
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(400px at 50% 50%, hsl(185, 100%, 50%, 0.05) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
