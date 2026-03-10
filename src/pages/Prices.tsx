import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import mountainsImg from "@/assets/mountains-banner.jpg";
import { menuItems, type MenuItem } from "@/data/menuItems";

const Prices = () => {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const categories = [
    { key: "all", labelRu: "Все", labelEn: "All" },
    { key: "frozen", labelRu: "🧊 Замороженные", labelEn: "🧊 Frozen" },
    { key: "chilled", labelRu: "❄️ Охлаждённые", labelEn: "❄️ Chilled" },
    { key: "soups", labelRu: "🍲 Супы", labelEn: "🍲 Soups" },
    { key: "semifinished", labelRu: "🥘 Полуфабрикаты", labelEn: "🥘 Semi-finished" },
    { key: "salads", labelRu: "🥗 Салаты", labelEn: "🥗 Salads" },
    { key: "ready", labelRu: "🍽 Готовые блюда", labelEn: "🍽 Ready-made" },
    { key: "desserts", labelRu: "🍰 Десерты", labelEn: "🍰 Desserts" },
    { key: "other", labelRu: "🫙 Прочее", labelEn: "🫙 Other" },
  ];

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((i) => i.category === activeCategory);

  const unitLabel = (unit: string) => {
    const labels: Record<string, { ru: string; en: string }> = {
      kg: { ru: "кг", en: "kg" },
      L: { ru: "л", en: "L" },
      pcs: { ru: "шт", en: "pcs" },
      jar: { ru: "банка", en: "jar" },
    };
    return labels[unit]?.[lang] || unit;
  };

  const handleAdd = (item: MenuItem) => {
    addItem({ id: item.id, nameRu: item.nameRu, nameEn: item.nameEn, price: item.price });
    setAddedIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => setAddedIds((prev) => {
      const next = new Set(prev);
      next.delete(item.id);
      return next;
    }), 1500);
  };

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
        <img src={mountainsImg} alt="Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("prices.title")}</h1>
          <p className="font-body text-primary-foreground/70 mt-2">{t("prices.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 bg-section-warm">
        <div className="container mx-auto px-4">
          {/* Delivery Info */}
          <div className="bg-accent/50 border border-accent rounded-xl p-4 mb-8 space-y-2">
            <p className="font-body text-sm text-foreground font-medium">
              ⏰ {lang === "ru" ? "Заказы принимаются не позднее чем за сутки до дня доставки (или по договорённости)" : "Orders accepted no later than 1 day before delivery (or by arrangement)"}
            </p>
            <p className="font-body text-sm text-foreground">
              🚚 {lang === "ru"
                ? "При заказе на Минск, Дзержинск, Фаниполь от 100 руб — доставка до квартиры БЕСПЛАТНО"
                : "Orders to Minsk, Dzerzhinsk, Fanipol from 100 BYN — FREE delivery to your door"}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              💰 {lang === "ru" ? "Минимальная сумма заказа — 100 BYN" : "Minimum order — 100 BYN"}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                {lang === "ru" ? cat.labelRu : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-background rounded-xl shadow-card flex flex-col overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={lang === "ru" ? item.nameRu : item.nameEn}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight">
                    {lang === "ru" ? item.nameRu : item.nameEn}
                  </h3>
                  {(item.noteRu || item.noteEn) && (
                    <p className="font-body text-xs text-muted-foreground mt-1 italic">
                      💡 {lang === "ru" ? item.noteRu : item.noteEn}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-3">
                    <span className="font-display text-xl font-bold text-secondary">
                      {item.price} BYN<span className="text-sm font-normal text-muted-foreground">/{unitLabel(item.unit)}</span>
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-body text-sm font-medium transition-colors ${
                        addedIds.has(item.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      }`}
                    >
                      {addedIds.has(item.id) ? <Check size={16} /> : <ShoppingCart size={16} />}
                      {addedIds.has(item.id) ? t("prices.added") : t("prices.add")}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
