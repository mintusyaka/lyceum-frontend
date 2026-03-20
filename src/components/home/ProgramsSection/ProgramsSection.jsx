import './ProgramsSection.css';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Child from '../../../assets/boy.png';
import Teen from '../../../assets/teen.png';
import Graduated from '../../../assets/graduated.png';

function ProgramsSection() {
  const programs = [
    {
      title: 'Початкова школа 1–4 класи',
      description:
        'М’який старт, розвиток базових навичок, підтримка інтересу до навчання та формування впевненості в собі.',
      features: ['Розвиток критичного мислення', 'STEM-освіта', 'Творчі проєкти', 'Іноземні мови'],
      highlight: 'from-lime-500 to-emerald-500',
      icon: Child,
      path: 'primary-school'
    },
    {
      title: 'Середня школа 5–9 класи',
      description:
        'Системне навчання, поглиблення знань, розвиток самостійності, комунікації та проєктного мислення.',
      features: ['Поглиблене вивчення предметів', 'Проєктна діяльність', 'Профорієнтація', 'Лідерські програми'],
      highlight: 'from-emerald-500 to-blue-500',
      icon: Teen,
      path: 'middle-school'
    },
    {
      title: 'Старша школа 10–11 класи',
      description:
        'Підготовка до майбутнього: сильна академічна база, профільність, фокус на НМТ та подальшому вступі.',
      features: ['Профільна освіта', 'Підготовка до НМТ', 'Університетські курси', 'Стажування'],
      highlight: 'from-blue-500 to-cyan-500',
      icon: Graduated,
      path: 'high-school'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 mb-4">
            Освітні програми
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Дистанційне навчання в ліцеї
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            Оберіть формат навчання відповідно до віку, потреб та освітньої траєкторії дитини.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${program.highlight} mb-6`}></div>

              <div className="flex items-center justify-between gap-4 mb-6">
                <img
                  src={program.icon}
                  alt={program.title}
                  className="w-20 h-20 object-contain"
                />
                <span className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                  Онлайн формат
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                {program.description}
              </p>

              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`plans/${program.path}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-4 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-xl"
              >
                Обрати план
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="plans"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-7 py-4 text-emerald-700 font-semibold transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
          >
            Переглянути всі плани
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
