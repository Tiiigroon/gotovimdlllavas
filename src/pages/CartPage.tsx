import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import OrderForm from "@/components/OrderForm";

const CartPage = () => {
  const { t, lang } = useLanguage();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="pt-16 min-h-screen bg-section-warm">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t("cart.title")}</h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <ShoppingBag className="mx-auto text-muted-foreground/30 mb-4" size={64} />
            <h2 className="font-display text-2xl text-muted-foreground mb-2">{t("cart.empty")}</h2>
            <p className="font-body text-muted-foreground/70 mb-6">{t("cart.empty.desc")}</p>
            <Link
              to="/prices"
              className="inline-block px-6 py-3 bg-secondary hover:bg-secondary-dark text-secondary-foreground font-body font-semibold rounded-lg transition-colors"
            >
              {t("cart.goMenu")}
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-background rounded-xl p-4 shadow-card flex items-center gap-4"
                >
                  <div className="flex-grow">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {lang === "ru" ? item.nameRu : item.nameEn}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{item.price.toFixed(2)} BYN</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-body font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <span className="font-display font-bold text-secondary min-w-[80px] text-right">
                    {(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}

              <div className="bg-background rounded-xl p-4 shadow-card flex items-center justify-between">
                <span className="font-display text-xl font-bold text-foreground">{t("cart.total")}:</span>
                <span className="font-display text-2xl font-bold text-secondary">{totalPrice.toFixed(2)} BYN</span>
              </div>
            </div>

            {/* Order Form */}
            <div className="bg-background rounded-xl p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">{t("form.title")}</h2>
              <OrderForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
