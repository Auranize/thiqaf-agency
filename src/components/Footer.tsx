import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const footerLinks = {
    services: [
      { label: isRTL ? 'تطوير المتاجر الإلكترونية' : 'E-Commerce Development', href: '#' },
      { label: isRTL ? 'التسويق الرقمي' : 'Digital Marketing', href: '#' },
      { label: isRTL ? 'تحسين محركات البحث' : 'SEO Optimization', href: '#' },
      { label: isRTL ? 'وسائل التواصل' : 'Social Media', href: '#' },
    ],
    company: [
      { label: isRTL ? 'من نحن' : 'About Us', href: '#about' },
      { label: isRTL ? 'أعمالنا' : 'Our Work', href: '#' },
      { label: isRTL ? 'المدونة' : 'Blog', href: '#' },
      { label: isRTL ? 'الوظائف' : 'Careers', href: '#' },
    ],
  };

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold font-serif mb-4 block">
              Thiqaf<span className="text-primary">Agency</span>
            </a>
            <p className="text-background/70 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} ThiqafAgency. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              {isRTL ? 'الشروط والأحكام' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
