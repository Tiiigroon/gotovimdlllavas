import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Готовлю Для Вас</h3>
            <p className="font-body text-primary-foreground/70 text-sm">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-3">{t("nav.home")}</h4>
            <div className="flex flex-col gap-2 font-body text-sm">
              <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors">{t("nav.home")}</Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-secondary transition-colors">{t("nav.about")}</Link>
              <Link to="/prices" className="text-primary-foreground/70 hover:text-secondary transition-colors">{t("nav.prices")}</Link>
              <Link to="/contacts" className="text-primary-foreground/70 hover:text-secondary transition-colors">{t("nav.contacts")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-3">{t("contacts.title")}</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><Phone size={14} className="text-secondary" />+375 (33) 361-81-11</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-secondary" />drugus88@gmail.com</span>
              <span className="flex items-center gap-2"><MapPin size={14} className="text-secondary" /> {t("contacts.address.value")}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-6 text-center font-body text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Готовлю Для Вас. {t("footer.rights")}.
        </div>
      </div>
    </footer>);

};

export default Footer;