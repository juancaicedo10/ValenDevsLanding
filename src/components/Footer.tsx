import { motion } from "framer-motion";
import { Code2, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative pt-20 pb-8 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(185, 100%, 50%, 0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display text-2xl font-bold neon-text">
                  ValenDevs
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Tu socio tecnológico en el Oriente Antioqueño. Creamos
                experiencias digitales que impulsan el crecimiento de tu
                negocio.
              </p>
              <div className="flex gap-4">
                {[Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="https://www.instagram.com/valen_devs/"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Portafolio", href: "#portafolio" },
                { name: "Precios", href: "#precios" },
                { name: "Contacto", href: "#contacto" }
              ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@valendevs.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@valendevs.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573001234567"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +57 300 123 4567
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} ValenDevs. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs text-center md:text-right max-w-md">
            Desarrollo web y marketing digital en el Oriente Antioqueño y
            Medellín. Rionegro, La Ceja, Marinilla, Guarne, El Carmen de
            Viboral, El Retiro, Santuario.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
