import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import OrderForm from "@/components/OrderForm";
import mountainsImg from "@/assets/mountains-banner.jpg";

const Contacts = () => {
  const { t } = useLanguage();

  const info = [
    { icon: Phone, label: t("contacts.phone"), value: "+375 (33) 361-81-11" },
    { icon: Mail, label: t("contacts.email"), value: "drugus88@gmail.com" },
    { icon: MapPin, label: t("contacts.address"), value: t("contacts.address.value") },
    { icon: Clock, label: t("contacts.hours"), value: t("contacts.hours.value") },
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
        <img src={mountainsImg} alt="Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("contacts.title")}</h1>
          <p className="font-body text-primary-foreground/70 mt-2">{t("contacts.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-section-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">{t("contacts.subtitle")}</h2>
              <div className="space-y-6">
                {info.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-secondary" size={22} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">{item.label}</h3>
                      <p className="font-body text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Form */}
            <div className="bg-background rounded-xl p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">{t("form.title")}</h2>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
