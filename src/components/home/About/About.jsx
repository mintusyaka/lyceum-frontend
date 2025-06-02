
import './About.css';

import { Users, BookOpen, Award } from 'lucide-react';


function About() {
  return (
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
  );
}

export default About;