import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Leaf, Award, Heart } from "lucide-react";
import aboutImg from "@/assets/about-cooking.jpg";
import mountainsImg from "@/assets/mountains-banner.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Leaf, title: t("about.value1.title"), desc: t("about.value1.desc") },
    { icon: Award, title: t("about.value2.title"), desc: t("about.value2.desc") },
    { icon: Heart, title: t("about.value3.title"), desc: t("about.value3.desc") },
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={mountainsImg} alt="Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 font-display text-4xl md:text-5xl font-bold text-primary-foreground"
        >
          {t("about.title")}
        </motion.h1>
      </section>

      {/* Story */}
      <section className="py-16 bg-section-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={aboutImg}
              alt="Cooking"
              className="rounded-2xl shadow-warm w-full"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t("about.subtitle")}</h2>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">{t("about.p1")}</p>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">{t("about.p2")}</p>
              <p className="font-body text-muted-foreground leading-relaxed">{t("about.p3")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">{t("about.values.title")}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 shadow-card"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <v.icon className="text-secondary" size={32} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
