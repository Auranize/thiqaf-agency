import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { number: t('about.stat1.number'), label: t('about.stat1.label') },
    { number: t('about.stat2.number'), label: t('about.stat2.label') },
    { number: t('about.stat3.number'), label: t('about.stat3.label') },
    { number: t('about.stat4.number'), label: t('about.stat4.label') },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">
              {t('about.subtitle')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.desc')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-primary/10 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold font-serif text-primary mb-4">
                    Thiqaf
                  </div>
                  <div className="text-2xl text-muted-foreground">
                    {isRTL ? 'وكالة رقمية' : 'Digital Agency'}
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-foreground/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
