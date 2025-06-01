import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Users, BookOpen, Award, Send } from 'lucide-react';


import Header from '../components/home/Header/Header'
import Logo from '../assets/lyceum-logo.png'

function Home() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: '',
    interests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your ASP.NET backend
    // For demo purposes, we'll simulate submission
    console.log('Form data to be sent to Google Spreadsheet:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        grade: '',
        interests: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen shadow-lg">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-cyan-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Розвиваємо
              <span className="bg-linear-to-bl from-green-500 to-cyan-500 bg-clip-text text-transparent"> таланти </span>
              майбутнього
            </h2>

            <img src={Logo} alt="Logo" className="inline-block pb-10" />
            

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Сучасний ліцей, де кожна дитина отримує індивідуальний підхід та можливість розкрити свій потенціал через інноваційні методи навчання
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Записатися на консультацію
              </a>
              <a href="#about" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-200 transition-colors">
                Дізнатися більше
              </a>
            </div>

          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-70 left-40 w-10 h-10 bg-green-200 rounded-full opacity-5 animate-pulse duration-500 delay-150"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-90 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-115 right-40 w-14 h-14 bg-blue-200 rounded-full opacity-25 animate-pulse duration-300"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Про наш ліцей</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ліцей "Проактивність" - це інноваційний освітній заклад, який поєднує кращі традиції української освіти з сучасними методиками навчання
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Індивідуальний підхід</h4>
              <p className="text-gray-600">Кожна дитина унікальна. Ми розробляємо персоналізовані програми навчання для максимального розкриття потенціалу</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Сучасні методи</h4>
              <p className="text-gray-600">Використовуємо найновіші освітні технології, інтерактивні методи та проектну діяльність</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-green-50 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Високі результати</h4>
              <p className="text-gray-600">Наші випускники успішно вступають до провідних університетів України та світу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наші принципи</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Проактивність", desc: "Виховуємо лідерів, які самі створюють своє майбутнє" },
              { title: "Креативність", desc: "Розвиваємо творче мислення та інноваційний підхід" },
              { title: "Критичне мислення", desc: "Вчимо аналізувати, оцінювати та приймати рішення" },
              { title: "Співпраця", desc: "Формуємо навички роботи в команді та комунікації" }
            ].map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h4>
                <p className="text-gray-600 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Навчальні програми</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Початкова школа (1-4 класи)",
                features: ["Розвиток критичного мислення", "STEM-освіта", "Творчі проєкти", "Іноземні мови"],
                highlight: "from-lime-500 to-emerald-500"
              },
              {
                title: "Середня школа (5-9 класи)",
                features: ["Поглиблене вивчення предметів", "Проєктна діяльність", "Профорієнтація", "Лідерські програми"],
                highlight: "from-emerald-500 to-blue-500"
              },
              {
                title: "Старша школа (10-11 класи)",
                features: ["Профільна освіта", "Підготовка до ЗНО", "Університетські курси", "Стажування"],
                highlight: "from-blue-500 to-cyan-500"
              }
            ].map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${program.highlight} rounded-full mb-4`}></div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gradient-to-r from-cyan-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Вартість навчання</h3>
            <p className="text-lg text-gray-600">Інвестиція в майбутнє вашої дитини</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Початкова школа",
                price: "15 000",
                period: "грн/місяць",
                features: ["Малі класи (до 12 учнів)", "Харчування включено", "Продовжений день", "Додаткові секції"]
              },
              {
                title: "Середня школа",
                price: "18 000",
                period: "грн/місяць",
                features: ["Профільні класи", "Проєктна робота", "Підготовка до олімпіад", "Профорієнтація"],
                popular: true
              },
              {
                title: "Старша школа",
                price: "22 000",
                period: "грн/місяць",
                features: ["Підготовка до ЗНО", "Університетські курси", "Індивідуальні консультації", "Стажування"]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative ${plan.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-gray-500">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg' 
                    : 'border-2 border-emerald-500 text-gray-900 hover:bg-green-50'
                }`}>
                  Обрати план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Для батьків</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Чому батьки обирають наш ліцей?</h4>
              <div className="space-y-4">
                {[
                  "Прозорий освітній процес та регулярне інформування батьків",
                  "Можливість онлайн-спостереження за успіхами дитини",
                  "Регулярні зустрічі з педагогами та психологом",
                  "Активне залучення батьків до шкільного життя",
                  "Безпечне та комфортне середовище для навчання"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Підтримка батьків</h4>
              <p className="text-gray-600 mb-6">
                Ми розуміємо, що освіта дитини - це спільна справа школи та родини. Тому ми забезпечуємо:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Щомісячні батьківські збори</li>
                <li>• Індивідуальні консультації</li>
                <li>• Онлайн-платформу для спілкування</li>
                <li>• Психологічну підтримку сім'ї</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Зв'яжіться з нами</h3>
            <p className="text-lg text-gray-600">Заповніть форму, і ми зв'яжемося з вами найближчим часом</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Дякуємо за звернення!</h4>
                  <p className="text-gray-600">Ми зв'яжемося з вами найближчим часом</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я батька/матері</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я дитини</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Клас (орієнтовно)</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Оберіть клас</option>
                      <option value="1">1 клас</option>
                      <option value="2">2 клас</option>
                      <option value="3">3 клас</option>
                      <option value="4">4 клас</option>
                      <option value="5">5 клас</option>
                      <option value="6">6 клас</option>
                      <option value="7">7 клас</option>
                      <option value="8">8 клас</option>
                      <option value="9">9 клас</option>
                      <option value="10">10 клас</option>
                      <option value="11">11 клас</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Інтереси дитини</label>
                    <input
                      type="text"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      placeholder="Наприклад: математика, мистецтво, спорт..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Додаткова інформація</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Розкажіть більше про ваші очікування та питання..."
                    ></textarea>
                  </div>
                  
                  <div
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Відправити заявку
                  </div>
                </div>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Контактна інформація</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+38 (067) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">info@lyceum-proactivity.ua</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">вул. Освіти, 123<br />м. Львів, 79000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Режим роботи</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Понеділок - П'ятниця:</strong> 8:00 - 18:00</p>
                  <p><strong>Субота:</strong> 9:00 - 15:00</p>
                  <p><strong>Неділя:</strong> Вихідний</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-2">Запрошуємо на екскурсію!</h4>
                <p className="mb-4">Відвідайте наш ліцей, познайомтеся з педагогами та атмосферою навчання</p>
                <p className="text-blue-100">Екскурсії проводяться щосуботи о 10:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Ліцей "Проактивність"</span>
            </div>
            <p className="text-gray-400 mb-6">Формуємо лідерів майбутнього вже сьогодні</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">© 2025 Ліцей "Проактивність". Всі права захищені.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;