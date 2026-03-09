import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Snowflake, Thermometer, Flame, Salad, UtensilsCrossed, Cookie, Info } from "lucide-react";
import mountainsImg from "@/assets/mountains-banner.jpg";

interface MenuItem {
  id: string;
  nameRu: string;
  nameEn: string;
  price: number;
  unit: "kg" | "L" | "pcs" | "jar";
  category: string;
  noteRu?: string;
  noteEn?: string;
}

const menuItems: MenuItem[] = [
  // Замороженные — Чебуреки
  { id: "f1", nameRu: "Чебуреки мясные / мясные с сыром", nameEn: "Chebureki meat / meat with cheese", price: 20, unit: "kg", category: "frozen" },
  { id: "f2", nameRu: "Чебуреки с грибами", nameEn: "Chebureki with mushrooms", price: 20, unit: "kg", category: "frozen" },
  { id: "f3", nameRu: "Чебуреки с картошкой, сыром, яйцом и зеленью", nameEn: "Chebureki with potato, cheese, egg & herbs", price: 20, unit: "kg", category: "frozen" },
  { id: "f4", nameRu: "Пельмени (свинина + курица)", nameEn: "Dumplings (pork + chicken)", price: 22, unit: "kg", category: "frozen" },
  { id: "f5", nameRu: "Вареники с творогом / творогом и изюмом", nameEn: "Vareniki with cottage cheese / cottage cheese & raisins", price: 18, unit: "kg", category: "frozen" },
  { id: "f6", nameRu: "Вареники с картошкой", nameEn: "Vareniki with potato", price: 18, unit: "kg", category: "frozen" },

  // Охлаждённые — Блинчики
  { id: "c1", nameRu: "Блинчики с капустой", nameEn: "Crepes with cabbage", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c2", nameRu: "Блинчики творог + изюм", nameEn: "Crepes cottage cheese + raisins", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c3", nameRu: "Блинчики творог + ягода", nameEn: "Crepes cottage cheese + berries", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c4", nameRu: "Блинчики творог + яблоко + банан", nameEn: "Crepes cottage cheese + apple + banana", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c5", nameRu: "Блинчики с яблоком", nameEn: "Crepes with apple", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c6", nameRu: "Блинчики с мясом", nameEn: "Crepes with meat", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c7", nameRu: "Блинчики ветчина + сыр", nameEn: "Crepes ham + cheese", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c8", nameRu: "Блинчики курица + грибы", nameEn: "Crepes chicken + mushrooms", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },
  { id: "c9", nameRu: "Блинчики с печенью и яйцом", nameEn: "Crepes with liver & egg", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying" },

  // Супы
  { id: "s1", nameRu: "Гороховый суп", nameEn: "Pea soup", price: 12, unit: "L", category: "soups" },
  { id: "s2", nameRu: "Суп с фрикадельками", nameEn: "Meatball soup", price: 12, unit: "L", category: "soups" },
  { id: "s3", nameRu: "Сырный суп", nameEn: "Cheese soup", price: 12, unit: "L", category: "soups" },
  { id: "s4", nameRu: "Борщ", nameEn: "Borscht", price: 12, unit: "L", category: "soups" },
  { id: "s5", nameRu: "Щи", nameEn: "Shchi (cabbage soup)", price: 12, unit: "L", category: "soups" },

  // Полуфабрикаты
  { id: "sf1", nameRu: "Голубцы", nameEn: "Cabbage rolls", price: 22, unit: "kg", category: "semifinished", noteRu: "нужно тушить", noteEn: "needs stewing" },
  { id: "sf2", nameRu: "Курица фаршированная (сырая)", nameEn: "Stuffed chicken (raw)", price: 21, unit: "kg", category: "semifinished", noteRu: "запечь в духовке", noteEn: "bake in oven" },

  // Салаты
  { id: "sa1", nameRu: "Салат Оливье с мясом", nameEn: "Olivier salad with meat", price: 28, unit: "kg", category: "salads" },
  { id: "sa2", nameRu: "Селёдка под шубой", nameEn: "Herring under fur coat", price: 28, unit: "kg", category: "salads" },
  { id: "sa3", nameRu: "Мимоза (с тунцом)", nameEn: "Mimosa salad (with tuna)", price: 28, unit: "kg", category: "salads" },
  { id: "sa4", nameRu: "Шапка Мономаха (с орехами и сухофруктами)", nameEn: "Monomakh's hat (nuts & dried fruits)", price: 28, unit: "kg", category: "salads" },
  { id: "sa5", nameRu: "Салат с копчёной курицей", nameEn: "Smoked chicken salad", price: 28, unit: "kg", category: "salads" },
  { id: "sa6", nameRu: "Салат с крабовыми палочками", nameEn: "Crab stick salad", price: 28, unit: "kg", category: "salads" },
  { id: "sa7", nameRu: "Салат с курицей, грибами и ананасами", nameEn: "Chicken, mushroom & pineapple salad", price: 28, unit: "kg", category: "salads" },

  // Доставка в готовом виде
  { id: "r1", nameRu: "Картофель по-деревенски", nameEn: "Country-style potatoes", price: 20, unit: "kg", category: "ready" },
  { id: "r2", nameRu: "Окорочка в медово-соевом соусе", nameEn: "Drumsticks in honey-soy sauce", price: 32, unit: "kg", category: "ready" },
  { id: "r3", nameRu: "Окорочка жареные", nameEn: "Fried drumsticks", price: 30, unit: "kg", category: "ready" },
  { id: "r4", nameRu: "Драники с мясом / курицей и грибами / грибами", nameEn: "Potato pancakes with meat / chicken & mushrooms / mushrooms", price: 22, unit: "kg", category: "ready" },
  { id: "r5", nameRu: "Котлеты рубленые", nameEn: "Chopped cutlets", price: 28, unit: "kg", category: "ready" },
  { id: "r6", nameRu: "Котлеты в сложном кляре с сыром", nameEn: "Cutlets in batter with cheese", price: 28, unit: "kg", category: "ready", noteRu: "10 мин протушить", noteEn: "simmer 10 min" },
  { id: "r7", nameRu: "Котлеты куриные", nameEn: "Chicken cutlets", price: 28, unit: "kg", category: "ready" },
  { id: "r8", nameRu: "Шницель куриный", nameEn: "Chicken schnitzel", price: 28, unit: "kg", category: "ready" },
  { id: "r9", nameRu: "Котлеты из капусты", nameEn: "Cabbage cutlets", price: 18, unit: "kg", category: "ready" },
  { id: "r10", nameRu: "Котлеты из моркови", nameEn: "Carrot cutlets", price: 18, unit: "kg", category: "ready" },
  { id: "r11", nameRu: "Котлеты печёночные", nameEn: "Liver cutlets", price: 20, unit: "kg", category: "ready" },
  { id: "r12", nameRu: "Голубцы тушёные", nameEn: "Stewed cabbage rolls", price: 23, unit: "kg", category: "ready" },
  { id: "r13", nameRu: "Курица фаршированная запечённая", nameEn: "Baked stuffed chicken", price: 25, unit: "kg", category: "ready" },
  { id: "r14", nameRu: "Филе птицы в сыре", nameEn: "Poultry fillet in cheese", price: 30, unit: "kg", category: "ready" },
  { id: "r15", nameRu: "Бёдрышки на косточке с помидором под сыром", nameEn: "Bone-in thighs with tomato & cheese", price: 30, unit: "kg", category: "ready" },
  { id: "r16", nameRu: "Мясо запечённое с помидором / грибами и луком", nameEn: "Baked meat with tomato / mushrooms & onion", price: 33, unit: "kg", category: "ready" },
  { id: "r17", nameRu: "Рулетики из полендвицы с овощами в кляре", nameEn: "Tenderloin rolls with vegetables in batter", price: 33, unit: "kg", category: "ready", noteRu: "протушить 10 минут", noteEn: "simmer 10 min" },
  { id: "r18", nameRu: "Жульены с курицей и грибами в булочке", nameEn: "Julienne with chicken & mushrooms in bun", price: 6, unit: "pcs", category: "ready" },
  { id: "r19", nameRu: "Тортик печёночный", nameEn: "Liver cake", price: 22, unit: "kg", category: "ready" },
  { id: "r20", nameRu: "Сырники", nameEn: "Syrniki (curd fritters)", price: 22, unit: "kg", category: "ready" },
  { id: "r21", nameRu: "Оладьи", nameEn: "Pancakes (oladyi)", price: 15, unit: "kg", category: "ready" },

  // Десерты
  { id: "d1", nameRu: "Десерт медовый", nameEn: "Honey dessert", price: 32, unit: "kg", category: "desserts" },
  { id: "d2", nameRu: "Десерт «Графские развалины»", nameEn: "\"Count's Ruins\" dessert", price: 32, unit: "kg", category: "desserts" },

  // Прочее
  { id: "o1", nameRu: "Капуста квашеная (банка 3л)", nameEn: "Sauerkraut (3L jar)", price: 15, unit: "jar", category: "other" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  frozen: <Snowflake size={18} />,
  chilled: <Thermometer size={18} />,
  soups: <Flame size={18} />,
  semifinished: <UtensilsCrossed size={18} />,
  salads: <Salad size={18} />,
  ready: <Flame size={18} />,
  desserts: <Cookie size={18} />,
  other: <Info size={18} />,
};

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
              💰 {lang === "ru" ? "Минимальная сумма заказа — 50 BYN" : "Minimum order — 50 BYN"}
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
                className="bg-background rounded-xl p-5 shadow-card flex flex-col"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
