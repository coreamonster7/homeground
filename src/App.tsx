import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Globe, 
  TrendingUp, 
  ChevronRight, 
  ChevronDown,
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Edit,
  Save,
  ArrowRight
} from 'lucide-react';
import { PortfolioItem, Contact, SiteConfig } from './types';

// --- Translations ---

const translations = {
  EN: {
    home: "Home",
    whyKorea: "Investment",
    portfolio: "Investment Cases",
    contact: "Contact",
    heroTitle: "HOMEGROUND",
    heroSubtitle: "Your Secure Gateway to Premium Korean Real Estate",
    investNow: "Invest Now",
    whyKoreaTitle: "The World's Safest Destination, South Korea.",
    whyKoreaSubtitle: "Your assets are protected in the most stable environment.",
    curatedInvestments: "Curated Investments",
    beginLegacy: "Begin Your Legacy",
    sendInquiry: "Send Inquiry",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    purposeOfPurchase: "Purpose of Purchase",
    messageLabel: "Message",
    purposeOptions: {
      hq: "Company HQ",
      res: "Residential",
      apt: "Apartment",
      rent: "Rent",
      other: "Other"
    }
  },
  KR: {
    home: "홈",
    whyKorea: "인베스트먼트",
    portfolio: "투자 사례",
    contact: "문의하기",
    heroTitle: "홈그라운드",
    heroSubtitle: "대한민국 프리미엄 부동산 투자의 시작",
    investNow: "지금 투자하기",
    whyKoreaTitle: "세상에서 가장 저평가 되고, 가장 안전한 나라\n대한민국",
    whyKoreaSubtitle: "",
    curatedInvestments: "엄선된 투자 기회",
    beginLegacy: "당신의 유산을 시작하세요",
    sendInquiry: "문의 보내기",
    fullName: "성함",
    emailAddress: "이메일 주소",
    phoneNumber: "전화번호",
    purposeOfPurchase: "구매 목적",
    messageLabel: "메시지",
    purposeOptions: {
      hq: "사옥",
      res: "주택",
      apt: "아파트",
      rent: "렌트",
      other: "기타"
    }
  },
  JP: {
    home: "ホーム",
    whyKorea: "なぜ韓国か",
    portfolio: "ポートフォリオ",
    contact: "お問い合わせ",
    heroTitle: "HOMEGROUND",
    heroSubtitle: "韓国プレミアム不動産投資のゲートウェイ",
    investNow: "今すぐ投資",
    whyKoreaTitle: "世界で最も安全な国、韓国。",
    whyKoreaSubtitle: "あなたの資産も最も安定した環境で守られます。",
    curatedInvestments: "厳選された投資",
    beginLegacy: "あなたのレガシーを始める",
    sendInquiry: "お問い合わせ送信",
    fullName: "氏名",
    emailAddress: "メールアドレス",
    phoneNumber: "電話番号",
    purposeOfPurchase: "購入目的",
    messageLabel: "メッセージ",
    purposeOptions: {
      hq: "社屋",
      res: "住宅",
      apt: "アパート",
      rent: "賃貸",
      other: "その他"
    }
  },
  ES: {
    home: "Inicio",
    whyKorea: "Por qué Corea",
    portfolio: "Portafolio",
    contact: "Contacto",
    heroTitle: "HOMEGROUND",
    heroSubtitle: "Su puerta de enlace segura a bienes raíces premium en Corea",
    investNow: "Invertir ahora",
    whyKoreaTitle: "El destino más seguro del mundo, Corea del Sur.",
    whyKoreaSubtitle: "Sus activos están protegidos en el entorno más estable.",
    curatedInvestments: "Inversiones curadas",
    beginLegacy: "Comience su legado",
    sendInquiry: "Enviar consulta",
    fullName: "Nombre completo",
    emailAddress: "Correo electrónico",
    phoneNumber: "Número de teléfono",
    purposeOfPurchase: "Propósito de compra",
    messageLabel: "Mensaje",
    purposeOptions: {
      hq: "Sede de la empresa",
      res: "Residencial",
      apt: "Apartamento",
      rent: "Alquiler",
      other: "Otro"
    }
  }
};

type Lang = keyof typeof translations;

// --- Components ---

const Navbar = ({ onAdminToggle, lang, setLang }: { onAdminToggle: () => void, lang: Lang, setLang: (l: Lang) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = translations[lang];

  const langNames: Record<Lang, string> = {
    EN: "English",
    KR: "한국어",
    JP: "日本語",
    ES: "Español"
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
          <span className="group-hover:text-sky-400 transition-colors duration-300">HOMEGROUND</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[14px] font-bold uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-sky-400 transition-colors">{t.home}</a>
          <a href="#why-korea" className="hover:text-sky-400 transition-colors">{t.whyKorea}</a>
          <a href="#portfolio" className="hover:text-sky-400 transition-colors">{t.portfolio}</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">{t.contact}</a>
          
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 text-[11px]"
            >
              <Globe size={14} className="text-sky-400" />
              <span>{langNames[lang]}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {(Object.keys(translations) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[12px] transition-colors hover:bg-white/5 ${lang === l ? 'text-sky-400 bg-sky-500/5' : 'text-gray-400'}`}
                    >
                      {langNames[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={onAdminToggle}
            className="p-2 hover:bg-white/10 rounded-full transition-colors ml-2"
            title="Admin Dashboard"
          >
            <LayoutDashboard size={16} />
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>{t.home}</a>
            <a href="#why-korea" onClick={() => setIsMobileMenuOpen(false)}>{t.whyKorea}</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>{t.portfolio}</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</a>
            <div className="flex flex-wrap gap-4 py-4 border-y border-white/10">
              {(Object.keys(translations) as Lang[]).map((l) => (
                <button 
                  key={l} 
                  onClick={() => { setLang(l); setIsMobileMenuOpen(false); }} 
                  className={`text-[12px] px-3 py-1 rounded-full border ${lang === l ? 'text-sky-400 border-sky-400/50 bg-sky-400/10' : 'text-gray-500 border-white/10'}`}
                >
                  {langNames[l]}
                </button>
              ))}
            </div>
            <button onClick={() => { onAdminToggle(); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-sky-400">
              <LayoutDashboard size={18} /> Admin
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ config, lang }: { config: SiteConfig, lang: Lang }) => {
  const t = translations[lang];
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <img 
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=2000" 
        alt="Tadao Ando Architecture" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="text-sky-400 text-[16px] uppercase tracking-[0.8em] font-bold">The Future of Investment</span>
        </motion.div>
        
        {/* Soft Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-7xl md:text-[10rem] font-serif italic mb-8 leading-none text-gradient tracking-tighter"
        >
          {lang === 'EN' ? config.heroTitle : t.heroTitle}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-16 font-light tracking-[0.4em] max-w-3xl mx-auto uppercase"
        >
          {lang === 'EN' ? config.heroSubtitle : t.heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#contact" className="group relative inline-flex items-center gap-6 bg-transparent border border-sky-500/30 hover:border-sky-500 text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all overflow-hidden">
            <span className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span className="relative z-10">{t.investNow}</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold">Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-20 bg-gradient-to-b from-sky-500 to-transparent"
        />
      </div>
    </section>
  );
};

const WhyKorea = ({ config, lang }: { config: SiteConfig, lang: Lang }) => {
  const t = translations[lang];
  return (
    <section id="why-korea" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xl uppercase tracking-[0.3em] text-sky-400 mb-4 font-bold">{t.whyKorea}</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-white">
              {t.whyKoreaTitle.includes('\n') ? (
                <>
                  <span className="font-extralight block mb-2 opacity-90">{t.whyKoreaTitle.split('\n')[0]}</span>
                  <span className="font-bold block tracking-tighter">{t.whyKoreaTitle.split('\n')[1]}</span>
                </>
              ) : (
                <span className="font-bold">{t.whyKoreaTitle}</span>
              )}
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 font-semibold">
              {lang === 'EN' ? config.whyKoreaText : t.whyKoreaSubtitle}
            </p>
            <div className="space-y-6">
              {[
                { icon: <Shield className="text-sky-400" />, title: lang === 'KR' ? "완벽한 치안" : "Top-tier Security", desc: lang === 'KR' ? "밤거리를 거닐 수 있는 세계 최고 수준의 안전성" : "World-class safety where you can walk freely at night." },
                { icon: <Globe className="text-sky-400" />, title: lang === 'KR' ? "글로벌 허브" : "Global Hub", desc: lang === 'KR' ? "아시아를 넘어 세계로 뻗어나가는 경제의 중심" : "A central economic hub expanding beyond Asia to the world." },
                { icon: <TrendingUp className="text-sky-400" />, title: lang === 'KR' ? "안정적 투자" : "Stable Investment", desc: lang === 'KR' ? "타인의 재산을 존중하는 훌륭한 국민성과 법적 보호" : "A culture of respect for property and strong legal protection." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-extrabold text-xl text-white">{item.title}</h4>
                    <p className="text-gray-200 font-bold text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Seoul Building Forest" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-xl hidden lg:block max-w-xs">
              <p className="text-sm italic text-gray-300">
                {t.whyKoreaSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ items, lang }: { items: PortfolioItem[], lang: Lang }) => {
  const t = translations[lang];
  const categories = [
    { id: '사옥', label: t.purposeOptions.hq },
    { id: '주택', label: t.purposeOptions.res },
    { id: '아파트', label: t.purposeOptions.apt },
    { id: '렌트', label: t.purposeOptions.rent },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-4">{t.portfolio}</h2>
          <h3 className="text-4xl md:text-5xl font-serif">{t.curatedInvestments}</h3>
        </div>

        {categories.map((cat) => {
          const catItems = items.filter(item => item.category === cat.id);
          if (catItems.length === 0) return null;

          return (
            <div key={cat.id} className="mb-24 last:mb-0">
              <div className="flex items-center gap-6 mb-12">
                <h4 className="text-sm md:text-lg font-bold text-white uppercase tracking-widest whitespace-nowrap">{cat.label}</h4>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {catItems.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className="text-white text-sm font-medium line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                    <h5 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">{item.title}</h5>
                    <p className="text-gray-400 mb-2 flex items-center gap-2 font-semibold text-sm"><MapPin size={14} className="text-sky-400" /> {item.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ContactForm = ({ lang }: { lang: Lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '사옥',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Send to Formspree
      await fetch('https://formspree.io/f/xqegqeqg', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // Also send to local API for Admin Dashboard
      await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', purpose: '사옥', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-4">{t.contact}</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">{t.beginLegacy}</h3>
            <p className="text-gray-400 text-lg mb-12">
              Our experts are ready to guide you through the most exclusive real estate opportunities in Korea.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-500/30">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-xl font-bold">JJ@homeground.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-500/30">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-xl font-bold">+82 10 2914 0111</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-300 font-bold">{t.fullName}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border-2 border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-lg font-medium"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-300 font-bold">{t.emailAddress}</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border-2 border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-lg font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-300 font-bold">{t.phoneNumber}</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border-2 border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-lg font-medium"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm uppercase tracking-widest text-gray-300 font-bold">{t.purposeOfPurchase}</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/5 border-2 border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-lg font-medium text-left flex justify-between items-center"
                    >
                      <span>{
                        formData.purpose === '사옥' ? t.purposeOptions.hq :
                        formData.purpose === '주택' ? t.purposeOptions.res :
                        formData.purpose === '아파트' ? t.purposeOptions.apt :
                        formData.purpose === '렌트' ? t.purposeOptions.rent :
                        t.purposeOptions.other
                      }</span>
                      <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-full mt-2 bg-[#1a1a1a] border-2 border-white/20 rounded-xl overflow-hidden z-50 shadow-2xl">
                        {[
                          { value: '사옥', label: t.purposeOptions.hq },
                          { value: '주택', label: t.purposeOptions.res },
                          { value: '아파트', label: t.purposeOptions.apt },
                          { value: '렌트', label: t.purposeOptions.rent },
                          { value: '기타', label: t.purposeOptions.other }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            className="w-full px-4 py-3 text-left hover:bg-sky-500 transition-colors text-lg font-medium"
                            onClick={() => {
                              setFormData({...formData, purpose: opt.value});
                              setIsDropdownOpen(false);
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-300 font-bold">{t.messageLabel}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border-2 border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors resize-none text-lg font-medium"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all sky-glow disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : t.sendInquiry}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Admin Dashboard ---

const AdminDashboard = ({ onClose }: { onClose: () => void }) => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'contacts' | 'config'>('portfolio');
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);

  useEffect(() => {
    fetch('/api/portfolio').then(res => res.json()).then(setPortfolio);
    fetch('/api/contacts').then(res => res.json()).then(setContacts);
    fetch('/api/config').then(res => res.json()).then(setConfig);
  }, []);

  const handleDeletePortfolio = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
    setPortfolio(portfolio.filter(p => p.id !== id));
  };

  const handleSavePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const method = editingItem.id ? 'POST' : 'POST'; // Simplified for this mock setup, usually PUT for edit
    // Our mock server only has POST /api/portfolio which adds a new item. 
    // Let's assume we want to support both. 
    // Actually, the current server.ts only has POST /api/portfolio for adding.
    // I'll update server.ts later if needed, but for now let's implement the UI.

    const response = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingItem)
    });
    
    if (response.ok) {
      const savedItem = await response.json();
      if (editingItem.id) {
        setPortfolio(portfolio.map(p => p.id === savedItem.id ? savedItem : p));
      } else {
        setPortfolio([...portfolio, savedItem]);
      }
      setEditingItem(null);
      // Refresh to get latest state from server
      fetch('/api/portfolio').then(res => res.json()).then(setPortfolio);
    }
  };

  const handleSaveConfig = async () => {
    if (!config) return;
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    alert('Configuration saved!');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      <header className="border-b border-white/10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <LayoutDashboard className="text-sky-400" /> Admin Dashboard
          </h1>
          <div className="flex gap-2 ml-8">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === 'portfolio' ? 'bg-sky-500' : 'hover:bg-white/10'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === 'contacts' ? 'bg-sky-500' : 'hover:bg-white/10'}`}
            >
              Inquiries
            </button>
            <button 
              onClick={() => setActiveTab('config')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === 'config' ? 'bg-sky-500' : 'hover:bg-white/10'}`}
            >
              Site Config
            </button>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X /></button>
      </header>

      <main className="flex-1 overflow-y-auto p-8">
        {activeTab === 'portfolio' && (
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Manage Portfolio</h2>
              <button 
                onClick={() => setEditingItem({ title: '', location: '', description: '', image: '', category: '사옥' })}
                className="bg-sky-500 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold"
              >
                <Plus size={18} /> Add New Project
              </button>
            </div>

            {editingItem && (
              <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
                <div className="glass-card p-8 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold">{editingItem.id ? 'Edit Project' : 'Add New Project'}</h3>
                    <button onClick={() => setEditingItem(null)} className="p-2 hover:bg-white/10 rounded-full"><X /></button>
                  </div>
                  <form onSubmit={handleSavePortfolio} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Title</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                          value={editingItem.title}
                          onChange={e => setEditingItem({...editingItem, title: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Location</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                          value={editingItem.location}
                          onChange={e => setEditingItem({...editingItem, location: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Category</label>
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                          value={editingItem.category}
                          onChange={e => setEditingItem({...editingItem, category: e.target.value})}
                        >
                          <option value="사옥">사옥 (Company HQ)</option>
                          <option value="주택">주택 (Residential)</option>
                          <option value="아파트">아파트 (Apartment)</option>
                          <option value="렌트">렌트 (Rent)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Image URL</label>
                        <input 
                          required
                          type="url" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                          value={editingItem.image}
                          onChange={e => setEditingItem({...editingItem, image: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Description</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 resize-none"
                        value={editingItem.description}
                        onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all">
                      Save Project
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {portfolio.map(item => (
                <div key={item.id} className="glass-card p-4 rounded-xl flex gap-6 items-center group">
                  <img src={item.image} className="w-24 h-24 object-cover rounded-lg" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.location} • <span className="text-sky-400">{item.category}</span></p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setEditingItem(item)}
                      className="p-2 text-sky-400 hover:bg-sky-500/10 rounded-lg"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDeletePortfolio(item.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Customer Inquiries</h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 text-xs uppercase tracking-widest text-gray-500">Date</th>
                    <th className="p-4 text-xs uppercase tracking-widest text-gray-500">Name</th>
                    <th className="p-4 text-xs uppercase tracking-widest text-gray-500">Purpose</th>
                    <th className="p-4 text-xs uppercase tracking-widest text-gray-500">Email</th>
                    <th className="p-4 text-xs uppercase tracking-widest text-gray-500">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-sm text-gray-400">{new Date(contact.date).toLocaleDateString()}</td>
                      <td className="p-4 font-medium">{contact.name}</td>
                      <td className="p-4">
                        <span className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-xs">
                          {contact.purpose}
                        </span>
                      </td>
                      <td className="p-4 text-sm">{contact.email}</td>
                      <td className="p-4 text-sm text-gray-400 truncate max-w-xs">{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'config' && config && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Site Configuration</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Hero Title</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                  value={config.heroTitle}
                  onChange={e => setConfig({...config, heroTitle: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Hero Subtitle</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                  value={config.heroSubtitle}
                  onChange={e => setConfig({...config, heroSubtitle: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Why Korea Text</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 resize-none"
                  value={config.whyKoreaText}
                  onChange={e => setConfig({...config, whyKoreaText: e.target.value})}
                ></textarea>
              </div>
              <button 
                onClick={handleSaveConfig}
                className="bg-sky-500 px-8 py-3 rounded-xl font-bold flex items-center gap-2"
              >
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('EN');

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch portfolio');
        return res.json();
      })
      .then(setPortfolio)
      .catch(err => {
        console.error('Portfolio fetch error:', err);
        // Fallback to empty portfolio if API fails
        setPortfolio([]);
      });

    fetch('/api/config')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch config');
        return res.json();
      })
      .then(setConfig)
      .catch(err => {
        console.error('Config fetch error:', err);
        // Fallback config if API fails (useful for static hosting or local dev)
        setConfig({
          heroTitle: "HOMEGROUND",
          heroSubtitle: "Your Secure Gateway to Premium Korean Real Estate",
          whyKoreaText: "Korea is the world's safest investment destination. With top-tier security and a culture of respect, your assets are protected in the most stable environment."
        });
      });
  }, []);

  if (!config) return <div className="h-screen flex items-center justify-center bg-black text-sky-400 animate-pulse">Loading HOMEGROUND...</div>;

  return (
    <div className="min-h-screen selection:bg-sky-500 selection:text-white">
      <Navbar onAdminToggle={() => setIsAdminOpen(true)} lang={lang} setLang={setLang} />
      
      <Hero config={config} lang={lang} />
      <WhyKorea config={config} lang={lang} />
      <Portfolio items={portfolio} lang={lang} />
      <ContactForm lang={lang} />

      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            HOMEGROUND
          </div>
          <div className="flex gap-8 text-sm text-gray-300 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-200 font-bold">JJ@homeground.com</p>
            <p className="text-sm text-gray-200 font-bold">+82 10 2914 0111</p>
            <p className="text-xs text-gray-500 mt-2 font-medium">© 2026 HOMEGROUND. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
}
