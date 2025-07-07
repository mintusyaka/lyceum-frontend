import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

function PrimaryPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
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
    // Перевірка обов'язкових полів
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Будь ласка, заповніть всі обов\'язкові поля');
      return;
    }
    
    // Створюємо URL для Google Forms
    // Замініть YOUR_GOOGLE_FORM_ID на ваш реальний ID форми
    // Замініть entry.XXXXX на реальні entry ID полів вашої форми
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMWqj5HexBu3lH3RF1ERoR_60f4634Lic8xopOFhMFNgp1bQ/formResponse';
    
    // Створюємо FormData для відправки
    const submitData = new FormData();
    submitData.append('entry.634840961', formData.name); // Замініть на реальний entry ID для імені
    submitData.append('entry.1757251368', formData.phone); // Замініть на реальний entry ID для телефону
    submitData.append('entry.1916382504', formData.message); // Замініть на реальний entry ID для повідомлення
    submitData.append('entry.403844381', selectedPlan); // Замініть на реальний entry ID для плану
    
    // Відправляємо дані
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

  return (
    <>
      <section id="prices" className="py-20 bg-white relative overflow-hidden">
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-8px) translateX(-4px); }
            66% { transform: translateY(-12px) translateX(6px); }
          }
          
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(-6px); }
            50% { transform: translateY(-3px) translateX(4px); }
            75% { transform: translateY(-12px) translateX(-2px); }
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-300 rounded-full opacity-70 shadow-lg float-1"></div>
        <div className="absolute bottom-32 left-40 w-10 h-10 bg-green-300 rounded-full opacity-70 shadow-lg float-2"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-70 shadow-lg float-3"></div>
        <div className="absolute top-60 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-70 shadow-lg float-4"></div>
        <div className="absolute top-80 right-40 w-14 h-14 bg-cyan-400 rounded-full opacity-70 shadow-lg float-5"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-green-400 rounded-full opacity-60 shadow-lg float-6"></div>
        <div className="absolute top-10 left-1/2 w-6 h-6 bg-blue-400 rounded-full opacity-60 shadow-lg float-7"></div>
        <div className="absolute bottom-15 right-28 w-6 h-6 bg-cyan-400 rounded-full opacity-55 shadow-lg float-7"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Вартість навчання</h3>
            <p className="text-lg text-gray-600">Інвестиція в майбутнє вашої дитини</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {[
              {
                title: 'ЗДОБУВАЧ ОСВІТИ "ПРОАКТИВНИЙ" (1-4 клас)',
                old_price_month: "3000",
                price_month: "1500",
                period_month: "грн/місяць",
                old_price_year: "30000",
                price_year: "15000",
                period_year: "грн/рік",
                features: ["Малі класи (до 12 учнів)", "Харчування включено", "Продовжений день"],
                bg_color: "bg-gradient-to-r from-cyan-200 to-emerald-200"
              },
              {
                title: 'ЕКСТЕРНАТ (1-4 клас)',
                old_price_month: "3400",
                price_month: "1800",
                period_month: "грн/місяць",
                old_price_year: "34000",
                price_year: "18000",
                period_year: "грн/рік",
                features: ["Малі класи (до 12 учнів)", "Харчування включено", "Продовжений день", "Додаткові секції", "Профорієнтація", "Підготовка до ЗНО"],
                bg_color: "bg-gradient-to-r from-emerald-200 to-blue-200",
                popular: true
              },
              {
                title: 'СІМЕЙНЕ НАВЧАННЯ (1-4 клас)',
                old_price_month: "4000",
                price_month: "2000",
                period_month: "грн/місяць",
                old_price_year: "40000",
                price_year: "20000",
                period_year: "грн/рік",
                features: ["Малі класи (до 12 учнів)", "Харчування включено", "Продовжений день", "Додаткові секції", "Профорієнтація", "Підготовка до ЗНО", "Індивідуальні консультації", "Університетська підготовка"],
                bg_color: "bg-gradient-to-r from-blue-200 to-cyan-200"
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`group ${plan.bg_color} rounded-xl shadow-sm transition-all duration-300 ease-in-out relative hover:shadow-lg hover:brightness-105 ${plan.popular ? 'ring-2 ring-emerald-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}

                {/* Заголовок з кольоровим фоном зверху і білим фоном тексту */}
                <div className="w-full rounded-t-xl overflow-hidden">
                  <div className={`h-4 w-full ${plan.bg_color}`}></div>
                  <div className="bg-white text-center py-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      {plan.title}
                    </h4>
                  </div>
                </div>

                {/* Контент з градієнтним фоном */}
                <div className="p-8 pt-6">
                  <div className="text-center mb-6">
                    {/* Стара ціна */}
                    <div className="text-2xl font-bold text-gray-400 line-through">
                      {plan.old_price_month}
                    </div>

                    {/* Нова ціна — збільшується при hover */}
                    <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-300 group-hover:text-4xl">
                      {plan.price_month}
                    </div>

                    <div className="text-gray-500">{plan.period_month}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelect(plan.title)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg'
                        : 'border-2 border-emerald-500 text-gray-900 hover:bg-green-50'
                    }`}
                  >
                    Обрати план
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Заявка на навчання
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-4 p-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Обраний план:</p>
                <p className="font-semibold text-gray-900">{selectedPlan}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ім'я та прізвище *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Введіть ім'я та прізвище"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Номер телефону *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Повідомлення (необов'язково)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="Додаткова інформація або запитання"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Скасувати
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-md hover:shadow-lg transition-shadow"
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

export default PrimaryPlans;