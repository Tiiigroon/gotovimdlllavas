import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ChefHat, Truck, Heart, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import foodImg from "@/assets/food-spread.jpg";

const features = [
  { icon: ChefHat, keyTitle: "about.value2.title", keyDesc: "about.value2.desc" },
  { icon: Truck, keyTitle: "contacts.hours", keyDesc: "contacts.hours.value" },
  { icon: Heart, keyTitle: "about.value3.title", keyDesc: "about.value3.desc" },
  { icon: Leaf, keyTitle: "about.value1.title", keyDesc: "about.value1.desc" },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 whitespace-pre-line leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/prices"
              className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-secondary-foreground font-body font-semibold rounded-lg transition-colors text-lg"
            >
              {t("hero.cta")}
            </Link>
            <Link
              to="/contacts"
              className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold rounded-lg transition-colors text-lg"
            >
              {t("hero.order")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-section-warm py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <f.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t(f.keyTitle)}</h3>
                <p className="font-body text-sm text-muted-foreground">{t(f.keyDesc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{t("about.subtitle")}</h2>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">{t("about.p1")}</p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">{t("about.p2")}</p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-body font-semibold rounded-lg transition-colors"
              >
                {t("nav.about")} →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={foodImg} alt="Homemade food" className="rounded-2xl shadow-warm w-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
