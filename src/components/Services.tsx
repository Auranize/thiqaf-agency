import { ShoppingCart, Megaphone, Search, Share2, BarChart3, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.desc'),
    },
    {
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
    },
    {
      icon: Search,
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
    },
    {
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.desc'),
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.desc'),
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
