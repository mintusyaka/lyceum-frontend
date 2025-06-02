
import './ParentsSection.css';

import {CheckCircle} from 'lucide-react';

function ParentsSection() {
  return (
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
  );
}

export default ParentsSection;