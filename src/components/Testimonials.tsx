import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, isRTL, language } = useLanguage();

  const testimonials = language === 'ar' ? [
    {
      name: 'أحمد المنصور',
      role: 'المدير التنفيذي، متجر الأناقة',
      content: 'فريق ثقاف حوّل رؤيتنا إلى متجر إلكتروني رائع. المبيعات زادت 300% خلال 6 أشهر!',
      rating: 5,
    },
    {
      name: 'سارة الخليفي',
      role: 'مؤسسة، بوتيك روز',
      content: 'احترافية عالية وإبداع لا مثيل له. أنصح بشدة بوكالة ثقاف لأي مشروع رقمي.',
      rating: 5,
    },
    {
      name: 'محمد العلي',
      role: 'مدير التسويق، تقنية الخليج',
      content: 'استراتيجيات التسويق الرقمي التي قدموها غيرت قواعد اللعبة لنا. نتائج مذهلة!',
      rating: 5,
    },
  ] : [
    {
      name: 'Ahmed Al-Mansour',
      role: 'CEO, Elegance Store',
      content: 'Thiqaf team transformed our vision into an amazing e-commerce store. Sales increased 300% in 6 months!',
      rating: 5,
    },
    {
      name: 'Sarah Al-Khalifi',
      role: 'Founder, Rose Boutique',
      content: 'High professionalism and unmatched creativity. I highly recommend Thiqaf Agency for any digital project.',
      rating: 5,
    },
    {
      name: 'Mohammed Al-Ali',
      role: 'Marketing Director, Gulf Tech',
      content: 'The digital marketing strategies they provided were a game-changer for us. Amazing results!',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
