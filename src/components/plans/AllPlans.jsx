import React, { useState } from 'react';
import { CheckCircle, X, Calendar, Clock } from 'lucide-react';

function AllPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isYearly, setIsYearly] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handlePlanSelect = (planTitle) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Будь ласка, заповніть всі обов\'язкові ');
      return;
    }
    
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMWqj5HexBu3lH3RF1ERoR_60f4634Lic8xopOFhMFNgp1bQ/formResponse';
    
    const submitData = new FormData();
    submitData.append('entry.634840961', formData.name);
    submitData.append('entry.1757251368', formData.phone);
    submitData.append('entry.1916382504', formData.message);
    submitData.append('entry.403844381', selectedPlan);
    
    fetch(googleFormUrl, {
      method: 'POST',
      body: submitData,
      mode: 'no-cors'
    }).then(() => {
      alert('Дякуємо! Ваша заявка надіслана. Ми зв\'яжемося з вами найближчим часом.');
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', message: '' });
    }).catch(() => {
      alert('Виникла помилка. Спробуйте ще раз.');
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  const plans = [
    {
      title: 'ЗДОБУВАЧ ОСВІТИ "ПРОАКТИВНИЙ" (1-4 клас)',
      old_price_month: "3000",
      price_month: "1500",
      old_price_year: "30000",
      price_year: "15000",
      features: ["Малі класи (до 15 учнів)", "Нова Українська Школа", "STEM-освіта", "\"Живе\" онлайн навчання", "Відеозаписи уроків"],
      bg_color: "bg-gradient-to-br from-green-400 to-emerald-400",
      accent_color: "from-cyan-500 to-emerald-500"
    },
    {
      title: 'ЗДОБУВАЧ ОСВІТИ "ПРОАКТИВНИЙ" (5-9 клас)',
      old_price_month: "3400",
      price_month: "1800",
      old_price_year: "34000",
      price_year: "18000",
      features: ["Малі класи (до 15 учнів)", "Профорієнтація", "Індивідуальні консультації", "Розвиток особистості", "НУШ для 5-8 класів", "Підготовка до ДПА"],
      bg_color: "bg-gradient-to-br from-emerald-400 via-green-400 to-emerald-400",
      accent_color: "from-emerald-500 to-blue-500",
      popular: true
    },
    {
      title: 'ЗДОБУВАЧ ОСВІТИ "ПРОАКТИВНИЙ" (10-11 клас)',
      old_price_month: "4000",
      price_month: "2000",
      old_price_year: "40000",
      price_year: "20000",
      features: ["Малі класи (до 15 учнів)", "Профорієнтація", "Підготовка до ЗНО/НМТ", "Індивідуальні консультації", "Університетська підготовка"],
      bg_color: "bg-gradient-to-br from-emerald-400 to-green-400",
      accent_color: "from-blue-500 to-cyan-500"
    },
    {
      title: 'ЕКСТЕРНАТ (5-9 клас)',
      old_price_month: "3400",
      price_month: "1800",
      old_price_year: "34000",
      price_year: "18000",
      features: ["Повний доступ до освітнього процесу", "Комбіновані уроки з елементами анімації та мультиплікації, навчальні ігри та моделі 3D", "Постійний зв'язок із класним керівником", "ДПА в дистанційній формі", "Державний документ про освіту"],
      bg_color: "bg-gradient-to-br from-cyan-400 via-emerald-400 to-cyan-400",
      accent_color: "from-emerald-500 to-blue-500",
    },
    {
      title: 'ЕКСТЕРНАТ (10-11 клас)',
      old_price_month: "4000",
      price_month: "2000",
      old_price_year: "40000",
      price_year: "20000",
      features: ["Повний доступ до освітнього процесу", "Комбіновані уроки з елементами анімації та мультиплікації, навчальні ігри та моделі 3D", "Постійний зв'язок із класним керівником", "ДПА в дистанційній формі, а ЗНО/НМТ за місцем проживання", "Повна перевірка робіт", "Державний документ про освіту"],
      bg_color: "bg-gradient-to-br from-emerald-400 to-cyan-400",
      accent_color: "from-blue-500 to-cyan-500"
    },
    {
      title: 'СІМЕЙНЕ НАВЧАННЯ (1-4 клас)',
      old_price_month: "1000",
      price_month: "500",
      old_price_year: "10000",
      price_year: "5000",
      features: ["Зв'язок з класним керівником", "Письмові та усні завдання від учителів", "Атестація знань", "Індивідуальні консультації", "Перегляд записів онлайн уроків", "Свідоцтво досягнень/табель", "Документ про освіту"],
      bg_color: "bg-gradient-to-br from-cyan-400 to-blue-400",
      accent_color: "from-cyan-500 to-emerald-500",
      family: true,
    },
    {
      title: 'СІМЕЙНЕ НАВЧАННЯ (5-9 клас)',
      old_price_month: "1400",
      price_month: "700",
      old_price_year: "14000",
      price_year: "7000",
      features: ["Письмові та усні завдання з перевіркою від учителів", "Письмовий чат і консультації онлайн з учителями ", "Звязок із класним керівником", "Інтерактивні платформи для вивчення іноземних мов(оплачуються додатково)", "Звіт про успішність", "Додатково можна отримати довідку про те, що дитина навчається дистанційно та виписку навчальних результатів", "Дистанційне проведення ДПА", "Документ про базову загальну середню освіту"],
      bg_color: "bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-400",
      accent_color: "from-emerald-500 to-blue-500",
      family: true,
    },
    {
      title: 'СІМЕЙНЕ НАВЧАННЯ (10-11 клас)',
      old_price_month: "9000",
      price_month: "900",
      old_price_year: "18000",
      price_year: "9000",
      features: ["Письмові завдання з перевіркою від учителів", "Зв'язок із вчителями", "Звіт про досягнення", "Атестація знань", "Контроль за успішність", "Онлайн консультації до ЗНО/НМТ", "Документ про повну загальну середню освіту державного зразка"],
      bg_color: "bg-gradient-to-br from-blue-400 to-cyan-400",
      accent_color: "from-blue-500 to-cyan-500",
      family: true,
    },
    {
      title: 'УКРАЇНОЗНАВЧИЙ КОМПОНЕНТ (1-4 клас)',
      old_price_month: "1200",
      price_month: "600",
      old_price_year: "12000",
      price_year: "6000",
      features: ["Навчання для дітей з будь якого куточку світу", "Державний документ про освіту", "Доступ до предметів українознавчого компоненту + 2 навчальних предмета", "Перезарахування оцінок з іноземної школи", "Допоміжні матеріали: відео, аудіо, 3D-моделі", "Перевірка письмових і практичних робіт", "Автоматизована перевірка робіт", "ДПА-онлайн у місті проживання", "Додаткові сервіси"],
      bg_color: "bg-gradient-to-br from-cyan-400 to-blue-400",
      accent_color: "from-cyan-500 to-emerald-500",
      family: true,
    },
    {
      title: 'УКРАЇНОЗНАВЧИЙ КОМПОНЕНТ (5-9 клас)',
      old_price_month: "1500",
      price_month: "750",
      old_price_year: "15000",
      price_year: "7500",
      features: ["Навчання для дітей з будь якого куточку світу", "Державний документ про освіту", "Доступ до предметів українознавчого компоненту + 2 навчальних предмета", "Перезарахування оцінок з іноземної школи", "Допоміжні матеріали: відео, аудіо, 3D-моделі", "Автоматизована перевірка робіт", "ДПА-онлайн у місті проживання", "Додаткові сервіси"],
      bg_color: "bg-gradient-to-br from-cyan-400 to-blue-400",
      accent_color: "from-cyan-500 to-emerald-500",
      family: true,
    },
    {
      title: 'УКРАЇНОЗНАВЧИЙ КОМПОНЕНТ (10-11 клас)',
      old_price_month: "1800",
      price_month: "900",
      old_price_year: "18000",
      price_year: "9000",
      features: ["Державний документ про освіту", "Доступ до предметів українознавчого компоненту + 2 навчальних предмета", "Перезарахування оцінок з іноземної школи", "Допоміжні матеріали: відео, аудіо, 3D-моделі", "Автоматизована перевірка робіт", "НМТ у місті проживання", "Додаткові сервіси"],
      bg_color: "bg-gradient-to-br from-cyan-400 to-blue-400",
      accent_color: "from-cyan-500 to-emerald-500",
      family: true,
    },
  ];

  return (
    <>
      <section id="prices" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-10px) translateX(5px) rotate(1deg); }
            50% { transform: translateY(-5px) translateX(-5px) rotate(-1deg); }
            75% { transform: translateY(-15px) translateX(3px) rotate(0.5deg); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-8px) translateX(-4px) rotate(-1deg); }
            66% { transform: translateY(-12px) translateX(6px) rotate(1deg); }
          }
          
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-8px) translateX(-6px) rotate(1deg); }
            50% { transform: translateY(-3px) translateX(4px) rotate(-0.5deg); }
            75% { transform: translateY(-12px) translateX(-2px) rotate(0.5deg); }
          }
          
          .float-1 { animation: float 4s ease-in-out infinite; }
          .float-2 { animation: float-slow 6s ease-in-out infinite; }
          .float-3 { animation: float-reverse 5s ease-in-out infinite; }
          .float-4 { animation: float 7s ease-in-out infinite; }
          .float-5 { animation: float-slow 4.5s ease-in-out infinite; }
          .float-6 { animation: float-reverse 6.5s ease-in-out infinite; }
          .float-7 { animation: float 5.5s ease-in-out infinite; }
        `}</style>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full opacity-70 shadow-lg float-1"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-70 shadow-lg float-2"></div>
        <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-300 to-green-500 rounded-full opacity-70 shadow-lg float-3"></div>
        <div className="absolute top-60 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-70 shadow-lg float-4"></div>
        <div className="absolute top-80 right-40 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-70 shadow-lg float-5"></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full opacity-60 shadow-lg float-6"></div>
        <div className="absolute top-10 left-1/2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-green-400 to-green-300 rounded-full opacity-60 shadow-lg float-7"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
              Вартість навчання 2025-2026 навчальний рік
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Інвестиція в майбутнє вашої дитини
            </p>
          </div>

          {/* Period Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 flex items-center">
              <button
                onClick={() => setIsYearly(false)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  !isYearly 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-medium">Щомісяця</span>
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isYearly 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Щорічно</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Популярний
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col">
                  {/* Header with gradient */}
                  <div className={`${plan.bg_color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full transform -translate-x-8 translate-y-8"></div>
                    
                    <h4 className="text-lg md:text-xl font-bold text-center relative z-10 leading-tight">
                      {plan.title}
                    </h4>
                  </div>

                  {/* Pricing */}
                  <div className="p-6 pb-4 text-center">
                    <div className="space-y-2">
                      {/* Old price */}
                      {!plan.family && (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg md:text-xl font-bold text-gray-400 line-through">
                          {isYearly ? plan.old_price_year : plan.old_price_month}
                        </span>
                        <span className="text-sm text-gray-500">
                          {isYearly ? 'грн/рік' : 'грн/місяць'}
                        </span>
                      </div>
                    )}


                      {/* New price */}
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-300 group-hover:scale-110">
                          {isYearly ? plan.price_year : plan.price_month}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {isYearly ? 'грн/рік' : 'грн/місяць'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-6 pb-6 flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex text-left items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handlePlanSelect(plan.title)}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.accent_color} text-white shadow-lg hover:shadow-xl`
                          : `bg-gradient-to-r ${plan.accent_color} text-white shadow-lg hover:shadow-xl`
                          // : `border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50`
                      }`}
                    >
                      Обрати план
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm md:text-base">
              💡 Всі ціни вказані з урахуванням знижки. Детальну інформацію уточнюйте при оформленні заявки.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Заявка на навчання
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Обраний план:</p>
                <p className="font-bold text-gray-900">{selectedPlan}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ім'я та прізвище *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Введіть ім'я та прізвище"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефону *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Повідомлення (необов'язково)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    placeholder="Додаткова інформація або запитання"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                  >
                    Скасувати
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                  >
                    Надіслати заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllPlans;