import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Transform Your Digital Presence',
    'hero.subtitle': 'We create stunning e-commerce websites and powerful digital marketing strategies that drive results.',
    'hero.cta': 'Start Your Project',
    'hero.secondary': 'View Our Work',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive digital solutions tailored to your business needs',
    'services.ecommerce.title': 'E-Commerce Development',
    'services.ecommerce.desc': 'Custom online stores built with modern technologies. From simple shops to complex marketplaces, we deliver scalable solutions.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.desc': 'Data-driven marketing strategies that increase your visibility, engage your audience, and convert leads into customers.',
    'services.seo.title': 'SEO Optimization',
    'services.seo.desc': 'Boost your search rankings with our expert SEO services. We help you get found by the right customers.',
    'services.social.title': 'Social Media Management',
    'services.social.desc': 'Engage your audience across all platforms. We create compelling content that builds your brand.',
    'services.analytics.title': 'Analytics & Insights',
    'services.analytics.desc': 'Make informed decisions with comprehensive analytics. Track performance and optimize your strategy.',
    'services.support.title': '24/7 Support',
    'services.support.desc': 'Round-the-clock support to ensure your business never stops. We\'re always here when you need us.',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your business goals',
    'pricing.starter.title': 'Starter',
    'pricing.starter.price': '$999',
    'pricing.starter.period': '/project',
    'pricing.starter.desc': 'Perfect for small businesses getting started online',
    'pricing.starter.f1': 'Basic E-Commerce Website',
    'pricing.starter.f2': 'Up to 50 Products',
    'pricing.starter.f3': 'Mobile Responsive Design',
    'pricing.starter.f4': 'Basic SEO Setup',
    'pricing.starter.f5': '30 Days Support',
    
    'pricing.professional.title': 'Professional',
    'pricing.professional.price': '$2,499',
    'pricing.professional.period': '/project',
    'pricing.professional.desc': 'For growing businesses ready to scale',
    'pricing.professional.f1': 'Advanced E-Commerce Website',
    'pricing.professional.f2': 'Unlimited Products',
    'pricing.professional.f3': 'Custom Design & Branding',
    'pricing.professional.f4': 'Full SEO Optimization',
    'pricing.professional.f5': 'Social Media Integration',
    'pricing.professional.f6': '90 Days Support',
    'pricing.popular': 'Most Popular',
    
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.period': '',
    'pricing.enterprise.desc': 'For large businesses with custom requirements',
    'pricing.enterprise.f1': 'Custom Development',
    'pricing.enterprise.f2': 'Multi-vendor Marketplace',
    'pricing.enterprise.f3': 'API Integrations',
    'pricing.enterprise.f4': 'Digital Marketing Package',
    'pricing.enterprise.f5': 'Dedicated Account Manager',
    'pricing.enterprise.f6': 'Priority 24/7 Support',
    
    'pricing.cta': 'Get Started',
    'pricing.contact': 'Contact Sales',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by businesses across the region',
    
    // About
    'about.title': 'About Thiqaf Agency',
    'about.subtitle': 'Your Partner in Digital Excellence',
    'about.desc': 'With years of experience in digital transformation, we help businesses of all sizes establish a powerful online presence. Our team of experts combines creativity with technical expertise to deliver solutions that exceed expectations.',
    'about.stat1.number': '200+',
    'about.stat1.label': 'Projects Completed',
    'about.stat2.number': '150+',
    'about.stat2.label': 'Happy Clients',
    'about.stat3.number': '5+',
    'about.stat3.label': 'Years Experience',
    'about.stat4.number': '24/7',
    'about.stat4.label': 'Support Available',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact us today',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.desc': 'Transforming businesses through innovative digital solutions. Your success is our mission.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.pricing': 'الأسعار',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero
    'hero.title': 'حوّل حضورك الرقمي',
    'hero.subtitle': 'نصمم متاجر إلكترونية مذهلة واستراتيجيات تسويق رقمي قوية تحقق نتائج ملموسة.',
    'hero.cta': 'ابدأ مشروعك',
    'hero.secondary': 'شاهد أعمالنا',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم حلولاً رقمية شاملة مصممة خصيصاً لاحتياجات عملك',
    'services.ecommerce.title': 'تطوير المتاجر الإلكترونية',
    'services.ecommerce.desc': 'متاجر إلكترونية مخصصة مبنية بأحدث التقنيات. من المتاجر البسيطة إلى الأسواق المعقدة، نقدم حلولاً قابلة للتوسع.',
    'services.marketing.title': 'التسويق الرقمي',
    'services.marketing.desc': 'استراتيجيات تسويقية مبنية على البيانات تزيد من ظهورك وتشرك جمهورك وتحول العملاء المحتملين إلى عملاء فعليين.',
    'services.seo.title': 'تحسين محركات البحث',
    'services.seo.desc': 'عزز ترتيبك في نتائج البحث مع خدمات SEO المتخصصة. نساعدك في الوصول للعملاء المناسبين.',
    'services.social.title': 'إدارة وسائل التواصل',
    'services.social.desc': 'تفاعل مع جمهورك عبر جميع المنصات. نصنع محتوى جذاباً يبني علامتك التجارية.',
    'services.analytics.title': 'التحليلات والرؤى',
    'services.analytics.desc': 'اتخذ قرارات مدروسة مع تحليلات شاملة. تتبع الأداء وحسّن استراتيجيتك.',
    'services.support.title': 'دعم على مدار الساعة',
    'services.support.desc': 'دعم متواصل لضمان استمرارية عملك. نحن هنا دائماً عندما تحتاجنا.',
    
    // Pricing
    'pricing.title': 'أسعار بسيطة وشفافة',
    'pricing.subtitle': 'اختر الخطة التي تناسب أهداف عملك',
    'pricing.starter.title': 'البداية',
    'pricing.starter.price': '$999',
    'pricing.starter.period': '/للمشروع',
    'pricing.starter.desc': 'مثالية للشركات الصغيرة التي تبدأ رحلتها الرقمية',
    'pricing.starter.f1': 'موقع تجارة إلكترونية أساسي',
    'pricing.starter.f2': 'حتى 50 منتج',
    'pricing.starter.f3': 'تصميم متجاوب للموبايل',
    'pricing.starter.f4': 'إعداد SEO أساسي',
    'pricing.starter.f5': 'دعم لمدة 30 يوم',
    
    'pricing.professional.title': 'الاحترافية',
    'pricing.professional.price': '$2,499',
    'pricing.professional.period': '/للمشروع',
    'pricing.professional.desc': 'للشركات النامية المستعدة للتوسع',
    'pricing.professional.f1': 'موقع تجارة إلكترونية متقدم',
    'pricing.professional.f2': 'منتجات غير محدودة',
    'pricing.professional.f3': 'تصميم وعلامة تجارية مخصصة',
    'pricing.professional.f4': 'تحسين SEO كامل',
    'pricing.professional.f5': 'تكامل وسائل التواصل',
    'pricing.professional.f6': 'دعم لمدة 90 يوم',
    'pricing.popular': 'الأكثر شعبية',
    
    'pricing.enterprise.title': 'المؤسسات',
    'pricing.enterprise.price': 'مخصص',
    'pricing.enterprise.period': '',
    'pricing.enterprise.desc': 'للشركات الكبيرة ذات المتطلبات الخاصة',
    'pricing.enterprise.f1': 'تطوير مخصص',
    'pricing.enterprise.f2': 'سوق متعدد البائعين',
    'pricing.enterprise.f3': 'تكامل API',
    'pricing.enterprise.f4': 'باقة تسويق رقمي',
    'pricing.enterprise.f5': 'مدير حساب مخصص',
    'pricing.enterprise.f6': 'دعم أولوية 24/7',
    
    'pricing.cta': 'ابدأ الآن',
    'pricing.contact': 'تواصل مع المبيعات',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'موثوق من قبل الشركات في جميع أنحاء المنطقة',
    
    // About
    'about.title': 'عن وكالة ثقاف',
    'about.subtitle': 'شريكك في التميز الرقمي',
    'about.desc': 'مع سنوات من الخبرة في التحول الرقمي، نساعد الشركات من جميع الأحجام على تأسيس حضور رقمي قوي. فريقنا من الخبراء يجمع بين الإبداع والخبرة التقنية لتقديم حلول تفوق التوقعات.',
    'about.stat1.number': '+200',
    'about.stat1.label': 'مشروع مكتمل',
    'about.stat2.number': '+150',
    'about.stat2.label': 'عميل سعيد',
    'about.stat3.number': '+5',
    'about.stat3.label': 'سنوات خبرة',
    'about.stat4.number': '24/7',
    'about.stat4.label': 'دعم متواصل',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لبدء مشروعك؟ تواصل معنا اليوم',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    
    // Footer
    'footer.desc': 'نحول الأعمال من خلال حلول رقمية مبتكرة. نجاحك هو مهمتنا.',
    'footer.services': 'خدماتنا',
    'footer.company': 'الشركة',
    'footer.connect': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
