
import './KeyPrinciplesSection.css';

import {CheckCircle} from 'lucide-react';

function KeyPrinciplesSection() {
  return (
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
  );
}

export default KeyPrinciplesSection;