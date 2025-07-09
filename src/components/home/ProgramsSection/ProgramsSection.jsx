
import './ProgramsSection.css';

import {CheckCircle} from 'lucide-react';
import { Link } from 'react-router-dom';

import Child from '../../../assets/boy.png';
import Teen from '../../../assets/teen.png';
import Graduated from '../../../assets/graduated.png';

function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-r from-cyan-200 to-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Дистанційне навчання в ліцеї</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Початкова школа (1-4 класи)",
                features: ["Розвиток критичного мислення", "STEM-освіта", "Творчі проєкти", "Іноземні мови"],
                highlight: "from-lime-500 to-emerald-500",
                icon: Child,
                path:"primary-school"
              },
              {
                title: "Середня школа (5-9 класи)",
                features: ["Поглиблене вивчення предметів", "Проєктна діяльність", "Профорієнтація", "Лідерські програми"],
                highlight: "from-emerald-500 to-blue-500",
                icon: Teen,
                path:"middle-school"
              },
              {
                title: "Старша школа (10-11 класи)",
                features: ["Профільна освіта", "Підготовка до ЗНО", "Університетські курси", "Стажування"],
                highlight: "from-blue-500 to-cyan-500",
                icon: Graduated,
                path:"high-school"
              }
            ].map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${program.highlight} rounded-full mb-4`}></div>
                <img src={program.icon} alt="Logo" className="inline-block pb-10 w-25" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className='pt-5 pb-3'>
                <Link to={`plans/${program.path}`}>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg w-full">
                  Обрати план
                </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to={`plans`}>
              <button className="w-full sm:w-72 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-md py-2 px-4 text-center">
                Переглянути всі плани
              </button>
            </Link>
          </div>


        </div>
      </section>
  );
}

export default ProgramsSection;