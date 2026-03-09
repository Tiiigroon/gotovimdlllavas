import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";

type Translations = {
  [key: string]: { ru: string; en: string };
};

const translations: Translations = {
  // Nav
  "nav.home": { ru: "Главная", en: "Home" },
  "nav.about": { ru: "О нас", en: "About" },
  "nav.prices": { ru: "Цены", en: "Prices" },
  "nav.cart": { ru: "Корзина", en: "Cart" },
  "nav.contacts": { ru: "Контакты", en: "Contacts" },
  "nav.order": { ru: "Заказать", en: "Order" },

  // Hero
  "hero.title": { ru: "Домашняя еда\nс душой и заботой", en: "Homemade Food\nwith Heart & Care" },
  "hero.subtitle": { ru: "Готовим для вас из свежих продуктов по домашним рецептам", en: "We cook for you using fresh ingredients and homemade recipes" },
  "hero.cta": { ru: "Смотреть меню", en: "View Menu" },
  "hero.order": { ru: "Сделать заказ", en: "Place Order" },

  // About
  "about.title": { ru: "О нас", en: "About Us" },
  "about.subtitle": { ru: "Наша история", en: "Our Story" },
  "about.p1": { ru: "«Готовим Для Вас» — это домашняя еда приготовленная с душой. Мы верим, что вкусная еда объединяет людей.", en: "\"Cooking For You\" is homemade food prepared with heart. We believe delicious food brings people together." },
  "about.p2": { ru: "Каждое блюдо мы готовим из свежих и натуральных продуктов, используя проверенные домашние рецепты. Никаких полуфабрикатов — только настоящая домашняя кухня.", en: "Every dish is made from fresh, natural ingredients using tried-and-true homemade recipes. No pre-made products — only real home cooking." },
  "about.p3": { ru: "Мы доставляем по всему Минску и Минскому району, чтобы вы могли насладиться вкусом домашней еды, не выходя из дома.", en: "We deliver across Minsk and the Minsk region so you can enjoy homemade food without leaving your home." },
  "about.values.title": { ru: "Наши ценности", en: "Our Values" },
  "about.value1.title": { ru: "Свежесть", en: "Freshness" },
  "about.value1.desc": { ru: "Только свежие продукты каждый день", en: "Only fresh products every day" },
  "about.value2.title": { ru: "Качество", en: "Quality" },
  "about.value2.desc": { ru: "Высокие стандарты приготовления", en: "High cooking standards" },
  "about.value3.title": { ru: "Забота", en: "Care" },
  "about.value3.desc": { ru: "Готовим как для своей семьи", en: "We cook as if for our own family" },

  // Prices
  "prices.title": { ru: "Наше меню", en: "Our Menu" },
  "prices.subtitle": { ru: "Выберите любимые блюда", en: "Choose your favorite dishes" },
  "prices.add": { ru: "В корзину", en: "Add to Cart" },
  "prices.added": { ru: "Добавлено!", en: "Added!" },
  "prices.cat.soups": { ru: "Супы", en: "Soups" },
  "prices.cat.main": { ru: "Основные блюда", en: "Main Dishes" },
  "prices.cat.salads": { ru: "Салаты", en: "Salads" },
  "prices.cat.desserts": { ru: "Десерты", en: "Desserts" },

  // Cart
  "cart.title": { ru: "Ваша корзина", en: "Your Cart" },
  "cart.empty": { ru: "Корзина пуста", en: "Cart is empty" },
  "cart.empty.desc": { ru: "Добавьте блюда из меню", en: "Add dishes from our menu" },
  "cart.total": { ru: "Итого", en: "Total" },
  "cart.checkout": { ru: "Оформить заказ", en: "Checkout" },
  "cart.remove": { ru: "Удалить", en: "Remove" },
  "cart.goMenu": { ru: "Перейти в меню", en: "Go to Menu" },

  // Contacts
  "contacts.title": { ru: "Контакты", en: "Contacts" },
  "contacts.subtitle": { ru: "Свяжитесь с нами", en: "Get in Touch" },
  "contacts.phone": { ru: "Телефон", en: "Phone" },
  "contacts.email": { ru: "Email", en: "Email" },
  "contacts.address": { ru: "Адрес", en: "Address" },
  "contacts.address.value": { ru: "г. Дзержинск, Минский район", en: "Dzerzhinsk, Minsk region" },
  "contacts.hours": { ru: "Часы работы", en: "Working Hours" },
  "contacts.hours.value": { ru: "Пн-Вс: 9:00 - 21:00", en: "Mon-Sun: 9:00 AM - 9:00 PM" },

  // Form
  "form.title": { ru: "Оформить заказ", en: "Place an Order" },
  "form.name": { ru: "Ваше имя", en: "Your Name" },
  "form.phone": { ru: "Телефон", en: "Phone" },
  "form.address": { ru: "Адрес доставки", en: "Delivery Address" },
  "form.comment": { ru: "Комментарий", en: "Comment" },
  "form.captcha": { ru: "Решите пример", en: "Solve the equation" },
  "form.submit": { ru: "Отправить заказ", en: "Submit Order" },
  "form.sending": { ru: "Отправка...", en: "Sending..." },
  "form.success": { ru: "Заказ отправлен! Мы свяжемся с вами.", en: "Order sent! We will contact you." },
  "form.error": { ru: "Ошибка отправки. Попробуйте снова.", en: "Sending error. Please try again." },
  "form.captchaError": { ru: "Неверный ответ капчи", en: "Incorrect captcha answer" },
  "form.minOrder": { ru: "Минимальная сумма заказа — 50 BYN", en: "Minimum order amount is 50 BYN" },
  "form.orderNotice": { ru: "⏰ Заказ продукции оформляется за 1–2 дня до доставки", en: "⏰ Orders are placed 1–2 days before delivery" },

  // Footer
  "footer.rights": { ru: "Все права защищены", en: "All rights reserved" },
  "footer.tagline": { ru: "Домашняя еда с доставкой по Минску и Минскому району", en: "Homemade food delivery in Minsk and Minsk region" },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
