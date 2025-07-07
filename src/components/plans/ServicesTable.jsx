import React from 'react';
import { Circle } from 'lucide-react';

const plans = [
  'Здобувач освіти "Проактивний"',
  'Екстерн',
  'Сімейне навчання',
];

const services = [
  {
    name: 'Документ про освіту державного зразка',
    stars: [true, true, true],
  },
  {
    name: 'Повний доступ до освітніх матеріалів',
    stars: [true, true, false],
  },
  {
    name: 'Онлайн-уроки (для 1-11 класів)',
    stars: [true, false, false],
  },
  {
    name: 'Інтерактивні програми, навчальні ігри та моделі 3D',
    stars: [true, true, false],
  },
  {
    name: 'Додаткові навчальні сервіси, що входять у вартість пакету',
    stars: [true, true, false],
  },
  {
    name: 'Освітня платформа для вивчення іноземних мов в 1-11 класах (+1 предмет на вибір)',
    stars: [true, true, false,],
  },
  {
    name: 'Перевірка письмових та практичних робіт',
    stars: [true, true, false],
  },
  {
    name: 'Технічна підтримка 24/7',
    stars: [true, true, false],
  },
  {
    name: 'Зв\'язок із тютором',
    stars: [true, false, false],
  },{
    name: 'Звіт про успішність',
    stars: [true, true, false],
  },{
    name: 'ДПА в дистанційній формі, а ЗНО/НМТ за місцем проживання',
    stars: [true, true, true],
  },{
    name: 'Автоматизована перевірка робіт',
    stars: [true, true, false],
  },{
    name: 'Повна перевірка (письмових) робіт',
    stars: [true, true, false],
  },{
    name: 'Групова робота та проєктна діяльність у 1-11 класах',
    stars: [true, false, false],
  },
  {
    name: 'Групові онлайн уроки (у класі до 15 учнів)',
    stars: [true, false, false],
  },{
    name: 'Індивідуальні консультації',
    stars: [true, false, true],
  },{
    name: 'Майстер-класи (офлайн та онлайн)',
    stars: [true, false, false],
  },{
    name: 'Підготовка до ДПА/НМТ/ЗНО',
    stars: [true, false, false],
  },
];

const getHeaderBgClass = (index) => {
  const colors = [
    'bg-yellow-100 text-yellow-700',
    'bg-orange-100 text-orange-700',
    'bg-pink-100 text-pink-700',
    'bg-lime-100 text-lime-700',
    'bg-blue-100 text-blue-700',
  ];
  return colors[index] || '';
};

const getStarColorClass = (index) => {
  const starColors = [
    'text-yellow-400',
    'text-orange-400',
    'text-pink-400',
    'text-lime-500',
    'text-blue-600',
  ];
  return starColors[index] || 'text-gray-300';
};

export default function ServicesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-gradient-to-r from-cyan-200 to-emerald-200 p-6">
      <h1 className="p-10 text-center text-3xl md:text-6xl font-bold text-gray-900">
        ПЕРЕЛІК ПОСЛУГ
      </h1>

      <div className="border-4 border-transparent bg-gradient-to-r from-green-300 to-emerald-300 p-1 rounded-3xl max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden">
            <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="bg-white p-4 text-left font-medium text-gray-700 border-r border-b"> </th>
              {plans.map((plan, colIndex) => (
                <th
                  key={colIndex}
                  className={`p-4 text-center text-sm font-semibold ${getHeaderBgClass(colIndex)} border-b ${colIndex < plans.length - 1 ? 'border-r' : ''}`}
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="p-4 border-r border-t text-gray-800">{service.name}</td>
                {service.stars.map((hasStar, colIndex) => (
                  <td className={`text-center p-4 ${colIndex < service.stars.length - 1 ? 'border-r' : ''} border-t`} key={colIndex}>
                    <Circle
                      className={`mx-auto ${hasStar ? getStarColorClass(colIndex) : 'text-gray-300'}`}
                      fill="currentColor"
                      size={20}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}