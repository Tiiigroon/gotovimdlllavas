import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import mountainsImg from "@/assets/mountains-banner.jpg";

interface MenuItem {
  id: string;
  nameRu: string;
  nameEn: string;
  descRu: string;
  descEn: string;
  price: number;
  category: string;
  emoji: string;
}

const menuItems: MenuItem[] = [
  { id: "1", nameRu: "Борщ", nameEn: "Borscht", descRu: "Классический домашний борщ со сметаной", descEn: "Classic homemade borscht with sour cream", price: 8.5, category: "soups", emoji: "🥣" },
  { id: "2", nameRu: "Куриный суп", nameEn: "Chicken Soup", descRu: "Наваристый суп с домашней лапшой", descEn: "Rich soup with homemade noodles", price: 7.5, category: "soups", emoji: "🍲" },
  { id: "3", nameRu: "Грибной крем-суп", nameEn: "Mushroom Cream Soup", descRu: "Нежный крем-суп из лесных грибов", descEn: "Delicate cream soup from wild mushrooms", price: 9.0, category: "soups", emoji: "🍄" },
  { id: "4", nameRu: "Пельмени", nameEn: "Dumplings", descRu: "Домашние пельмени ручной лепки", descEn: "Handmade homestyle dumplings", price: 12.0, category: "main", emoji: "🥟" },
  { id: "5", nameRu: "Котлеты с пюре", nameEn: "Cutlets with Mash", descRu: "Сочные котлеты с картофельным пюре", descEn: "Juicy cutlets with mashed potatoes", price: 11.0, category: "main", emoji: "🥩" },
  { id: "6", nameRu: "Голубцы", nameEn: "Cabbage Rolls", descRu: "Голубцы с мясной начинкой в томатном соусе", descEn: "Cabbage rolls with meat filling in tomato sauce", price: 10.5, category: "main", emoji: "🥬" },
  { id: "7", nameRu: "Драники", nameEn: "Potato Pancakes", descRu: "Хрустящие драники со сметаной", descEn: "Crispy potato pancakes with sour cream", price: 9.0, category: "main", emoji: "🥔" },
  { id: "8", nameRu: "Салат Оливье", nameEn: "Olivier Salad", descRu: "Классический салат с домашним майонезом", descEn: "Classic salad with homemade mayo", price: 7.0, category: "salads", emoji: "🥗" },
  { id: "9", nameRu: "Винегрет", nameEn: "Vinaigrette", descRu: "Свекольный салат с маслом", descEn: "Beet salad with oil dressing", price: 6.0, category: "salads", emoji: "🥬" },
  { id: "10", nameRu: "Шарлотка", nameEn: "Apple Charlotte", descRu: "Яблочный пирог по домашнему рецепту", descEn: "Apple pie from a homemade recipe", price: 6.5, category: "desserts", emoji: "🍰" },
  { id: "11", nameRu: "Блины с творогом", nameEn: "Crepes with Cottage Cheese", descRu: "Тонкие блины с нежной творожной начинкой", descEn: "Thin crepes with delicate cottage cheese filling", price: 8.0, category: "desserts", emoji: "🥞" },
];

const Prices = () => {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const categories = [
    { key: "all", label: lang === "ru" ? "Все" : "All" },
    { key: "soups", label: t("prices.cat.soups") },
    { key: "main", label: t("prices.cat.main") },
    { key: "salads", label: t("prices.cat.salads") },
    { key: "desserts", label: t("prices.cat.desserts") },
  ];

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((i) => i.category === activeCategory);

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
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-xl p-6 shadow-card flex flex-col"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {lang === "ru" ? item.nameRu : item.nameEn}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1 flex-grow">
                  {lang === "ru" ? item.descRu : item.descEn}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-display text-2xl font-bold text-secondary">{item.price.toFixed(2)} BYN</span>
                  <button
                    onClick={() => handleAdd(item)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors ${
                      addedIds.has(item.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    {addedIds.has(item.id) ? <Check size={16} /> : <ShoppingCart size={16} />}
                    {addedIds.has(item.id) ? t("prices.added") : t("prices.add")}
                  </button>
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
