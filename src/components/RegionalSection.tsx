import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const municipalities = [
  "Rionegro",
  "La Ceja",
  "Marinilla",
  "Guarne",
  "El Carmen de Viboral",
  "El Retiro",
  "Santuario",
];

const RegionalSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(185, 100%, 50%, 0.05) 0%, 
            hsl(240, 15%, 4%) 50%, 
            hsl(280, 100%, 60%, 0.05) 100%
          )`,
        }}
      />

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(280, 100%, 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="0%"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Impulsando el <span className="neon-text">Crecimiento Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            En todos los municipios del Oriente Antioqueño
          </p>
        </motion.div>

        {/* Municipalities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {municipalities.map((municipality, index) => (
            <motion.div
              key={municipality}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="glass-card px-6 py-3 flex items-center gap-2 cursor-default"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{municipality}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-[16/9]">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 glass-card overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Connected Nodes */}
                <svg className="w-full h-full p-8" viewBox="0 0 400 200">
                  {/* Connection Lines */}
                  <motion.path
                    d="M80 100 L160 60 L260 80 L340 50"
                    fill="none"
                    stroke="hsl(185, 100%, 50%)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  <motion.path
                    d="M80 100 L150 130 L250 120 L340 150"
                    fill="none"
                    stroke="hsl(280, 100%, 60%)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3 }}
                  />
                  <motion.path
                    d="M160 60 L150 130"
                    fill="none"
                    stroke="hsl(220, 100%, 60%)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M260 80 L250 120"
                    fill="none"
                    stroke="hsl(220, 100%, 60%)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />

                  {/* Nodes */}
                  {[
                    { x: 80, y: 100, label: "Rionegro", size: 12 },
                    { x: 160, y: 60, label: "Guarne", size: 8 },
                    { x: 260, y: 80, label: "Marinilla", size: 10 },
                    { x: 340, y: 50, label: "El Carmen", size: 8 },
                    { x: 150, y: 130, label: "La Ceja", size: 9 },
                    { x: 250, y: 120, label: "El Retiro", size: 8 },
                    { x: 340, y: 150, label: "Santuario", size: 7 },
                  ].map((node, i) => (
                    <motion.g key={node.label}>
                      {/* Glow Effect */}
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size + 8}
                        fill="hsl(185, 100%, 50%)"
                        opacity="0.1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                      />
                      {/* Main Node */}
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size}
                        fill="url(#nodeGradient)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                      />
                      {/* Inner Glow */}
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size / 2}
                        fill="hsl(185, 100%, 70%)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 * i }}
                      />
                    </motion.g>
                  ))}

                  {/* Gradient Definition */}
                  <defs>
                    <radialGradient id="nodeGradient">
                      <stop offset="0%" stopColor="hsl(185, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(280, 100%, 60%)" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalSection;
