
import './PricesSection.css';

import {CheckCircle} from 'lucide-react';

function PricesSection() {
  return (
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
  );
}

export default PricesSection;