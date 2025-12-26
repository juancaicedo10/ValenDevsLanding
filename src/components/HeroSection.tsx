import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(185, 100%, 50%) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(280, 100%, 60%) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(185, 100%, 50%, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(185, 100%, 50%, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Agencia Digital del Oriente Antioqueño
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Tu Socio Tecnológico en todo el{" "}
            <span className="neon-text">Oriente Antioqueño</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Desde Rionegro hasta los embalses. Digitalizamos empresas con páginas web 
            rápidas, seguras y diseñadas para vender en la región y el mundo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="neon-button font-display text-lg flex items-center gap-2 group">
              Cotizar mi Sitio Web
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-foreground font-semibold hover:bg-card">
              Ver Portafolio
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "50+", label: "Proyectos Entregados" },
              { value: "7", label: "Municipios Atendidos" },
              { value: "98%", label: "Clientes Satisfechos" },
              { value: "24/7", label: "Soporte Activo" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-4 sm:p-6"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
