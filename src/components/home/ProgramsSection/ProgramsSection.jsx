
import './ProgramsSection.css';

import {CheckCircle} from 'lucide-react';

function ProgramsSection() {
  return (
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
  );
}

export default ProgramsSection;