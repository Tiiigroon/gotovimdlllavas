import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const TELEGRAM_BOT_TOKEN = "8669443902:AAGD7aBsXI6-wI_1W5phMkcBBe3MwGqvhWw";
const TELEGRAM_CHAT_ID = "1214489048";

const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
};

const OrderForm = () => {
  const { t, lang } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [sending, setSending] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }, []);

  useEffect(() => { refreshCaptcha(); }, [refreshCaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(captchaInput) !== captcha.answer) {
      toast.error(t("form.captchaError"));
      refreshCaptcha();
      return;
    }

    const itemsList = items.map((i) => {
      const itemName = lang === "ru" ? i.nameRu : i.nameEn;
      return `  • ${itemName} x${i.quantity} — ${i.price * i.quantity} BYN`;
    }).join("\n");

    const message = `🍽 *Новый заказ / New Order*\n\n👤 *${t("form.name")}:* ${name}\n📞 *${t("form.phone")}:* ${phone}\n📍 *${t("form.address")}:* ${address}\n💬 *${t("form.comment")}:* ${comment || "—"}\n\n🛒 *${t("nav.cart")}:*\n${itemsList}\n\n💰 *${t("cart.total")}:* ${totalPrice.toFixed(2)} BYN`;

    setSending(true);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        toast.success(t("form.success"));
        setName(""); setPhone(""); setAddress(""); setComment("");
        clearCart();
        refreshCaptcha();
      } else {
        toast.error(t("form.error"));
      }
    } catch {
      toast.error(t("form.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">{t("form.name")} *</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
          className="bg-background border-border focus:ring-secondary"
        />
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">{t("form.phone")} *</label>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength={20}
          type="tel"
          placeholder="+375 (__) ___-__-__"
          className="bg-background border-border focus:ring-secondary"
        />
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">{t("form.address")} *</label>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          maxLength={200}
          className="bg-background border-border focus:ring-secondary"
        />
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">{t("form.comment")}</label>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={500}
          rows={3}
          className="bg-background border-border focus:ring-secondary"
        />
      </div>

      <div className="bg-muted rounded-lg p-4">
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          🔒 {t("form.captcha")}: <span className="text-lg font-bold text-secondary">{captcha.question} = ?</span>
        </label>
        <Input
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
          type="number"
          className="bg-background border-border w-32"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground font-body font-semibold text-base py-6"
      >
        {sending ? t("form.sending") : t("form.submit")}
      </Button>
    </form>
  );
};

export default OrderForm;
