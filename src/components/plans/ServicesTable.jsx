// import React from 'react';
// import { Circle } from 'lucide-react';

// const plans = [
//   'Здобувач освіти "Проактивний"',
//   'Екстерн',
//   'Сімейне навчання',
// ];

// const services = [
//   {
//     name: 'Документ про освіту державного зразка',
//     stars: [true, true, true],
//   },
//   {
//     name: 'ДПА в дистанційній формі, а ЗНО/НМТ за місцем проживання',
//     stars: [true, true, true],
//   },
//   {
//     name: 'Повний доступ до освітніх матеріалів',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Інтерактивні програми, навчальні ігри та моделі 3D',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Додаткові навчальні сервіси, що входять у вартість пакету',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Освітня платформа для вивчення іноземних мов в 1-11 класах (+1 предмет на вибір)',
//     stars: [true, true, false,],
//   },
//   {
//     name: 'Перевірка письмових та практичних робіт',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Технічна підтримка 24/7',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Звіт про успішність',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Автоматизована перевірка робіт',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Повна перевірка (письмових) робіт',
//     stars: [true, true, false],
//   },
//   {
//     name: 'Індивідуальні консультації',
//     stars: [true, false, true],
//   },
//   {
//     name: 'Онлайн-уроки (для 1-11 класів)',
//     stars: [true, false, false],
//   },
//   {
//     name: 'Зв\'язок із тютором',
//     stars: [true, false, false],
//   },
//   {
//     name: 'Групова робота та проєктна діяльність у 1-11 класах',
//     stars: [true, false, false],
//   },
//   {
//     name: 'Групові онлайн уроки (у класі до 15 учнів)',
//     stars: [true, false, false],
//   },
//   {
//     name: 'Майстер-класи (офлайн та онлайн)',
//     stars: [true, false, false],
//   },
//   {
//     name: 'Підготовка до ДПА/НМТ/ЗНО',
//     stars: [true, false, false],
//   },
// ];

// const getHeaderBgClass = (index) => {
//   const colors = [
//     'bg-yellow-100 text-yellow-700',
//     'bg-orange-100 text-orange-700',
//     'bg-pink-100 text-pink-700',
//     'bg-lime-100 text-lime-700',
//     'bg-blue-100 text-blue-700',
//   ];
//   return colors[index] || '';
// };

// const getStarColorClass = (index) => {
//   const starColors = [
//     'text-yellow-400',
//     'text-orange-400',
//     'text-pink-400',
//     'text-lime-500',
//     'text-blue-600',
//   ];
//   return starColors[index] || 'text-gray-300';
// };

// export default function ServicesTable() {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-gradient-to-r from-cyan-200 to-emerald-200 p-6">
//       <h1 className="p-10 text-center text-3xl md:text-6xl font-bold text-gray-900">
//         ПЕРЕЛІК ПОСЛУГ
//       </h1>

//       <div className="border-4 border-transparent bg-gradient-to-r from-green-300 to-emerald-300 p-1 rounded-3xl max-w-5xl mx-auto">
//         <div className="bg-white rounded-3xl overflow-hidden">
//             <table className="w-full border-collapse text-sm">
//           <thead>
//             <tr>
//               <th className="bg-white p-4 text-left font-medium text-gray-700 border-r border-b"> </th>
//               {plans.map((plan, colIndex) => (
//                 <th
//                   key={colIndex}
//                   className={`p-4 text-center text-sm font-semibold ${getHeaderBgClass(colIndex)} border-b ${colIndex < plans.length - 1 ? 'border-r' : ''}`}
//                 >
//                   {plan}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {services.map((service, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
//               >
//                 <td className="p-4 border-r border-t text-gray-800">{service.name}</td>
//                 {service.stars.map((hasStar, colIndex) => (
//                   <td className={`text-center p-4 ${colIndex < service.stars.length - 1 ? 'border-r' : ''} border-t`} key={colIndex}>
//                     <Circle
//                       className={`mx-auto ${hasStar ? getStarColorClass(colIndex) : 'text-gray-300'}`}
//                       fill="currentColor"
//                       size={20}
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Circle, ChevronDown, ChevronUp } from 'lucide-react';

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
    name: 'ДПА в дистанційній формі, а ЗНО/НМТ за місцем проживання',
    stars: [true, true, true],
  },
  {
    name: 'Повний доступ до освітніх матеріалів',
    stars: [true, true, false],
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
    name: 'Звіт про успішність',
    stars: [true, true, false],
  },
  {
    name: 'Автоматизована перевірка робіт',
    stars: [true, true, false],
  },
  {
    name: 'Повна перевірка (письмових) робіт',
    stars: [true, true, false],
  },
  {
    name: 'Індивідуальні консультації',
    stars: [true, false, true],
  },
  {
    name: 'Онлайн-уроки (для 1-11 класів)',
    stars: [true, false, false],
  },
  {
    name: 'Зв\'язок із тютором',
    stars: [true, false, false],
  },
  {
    name: 'Групова робота та проєктна діяльність у 1-11 класах',
    stars: [true, false, false],
  },
  {
    name: 'Групові онлайн уроки (у класі до 15 учнів)',
    stars: [true, false, false],
  },
  {
    name: 'Майстер-класи (офлайн та онлайн)',
    stars: [true, false, false],
  },
  {
    name: 'Підготовка до ДПА/НМТ/ЗНО',
    stars: [true, false, false],
  },
];

const getHeaderBgClass = (index) => {
  const colors = [
    'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg',
    'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg',
    'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg',
  ];
  return colors[index] || '';
};

const getStarColorClass = (index) => {
  const starColors = [
    'text-amber-500',
    'text-blue-500',
    'text-emerald-500',
  ];
  return starColors[index] || 'text-gray-300';
};

export default function ServicesTable() {
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleRow = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Mobile card view
  const MobileView = () => (
    <div className="md:hidden space-y-4">
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className="space-y-3">
          <div className={`p-4 rounded-2xl ${getHeaderBgClass(planIndex)} transform transition-all duration-200 hover:scale-105`}>
            <h3 className="text-lg font-bold text-center">{plan}</h3>
          </div>
          
          <div className="space-y-2">
            {services.map((service, serviceIndex) => (
              service.stars[planIndex] && (
                <div key={serviceIndex} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-700 flex-1">{service.name}</span>
                  <Circle
                    className={`${getStarColorClass(planIndex)} ml-2`}
                    fill="currentColor"
                    size={16}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop table view
  const DesktopView = () => (
    <div className="hidden md:block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              <th className="p-6 text-left font-semibold text-gray-800 border-r border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">Послуги</span>
                </div>
              </th>
              {plans.map((plan, colIndex) => (
                <th
                  key={colIndex}
                  className={`p-6 text-center relative ${colIndex < plans.length - 1 ? 'border-r border-gray-200' : ''}`}
                >
                  <div className={`rounded-2xl p-4 ${getHeaderBgClass(colIndex)} transform transition-all duration-200 hover:scale-105 cursor-pointer`}>
                    <div className="text-sm font-bold leading-tight">{plan}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, rowIndex) => (
              <tr
                key={rowIndex}
                className={`group transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="p-6 border-r border-gray-200 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium text-sm leading-relaxed group-hover:text-blue-900 transition-colors">
                      {service.name}
                    </span>
                  </div>
                </td>
                {service.stars.map((hasStar, colIndex) => (
                  <td 
                    key={colIndex} 
                    className={`text-center p-6 border-t border-gray-100 ${
                      colIndex < service.stars.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <Circle
                        className={`transform transition-all duration-200 ${
                          hasStar 
                            ? `${getStarColorClass(colIndex)} scale-100 hover:scale-125` 
                            : 'text-gray-300 scale-90'
                        }`}
                        fill="currentColor"
                        size={24}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-green-600 to-emerald-600 mb-4 tracking-tight">
            ПЕРЕЛІК ПОСЛУГ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Оберіть найкращий план навчання для вашого успіху
          </p>
        </div>

        {/* Plans overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:hidden">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${getHeaderBgClass(index)} transform transition-all duration-200 hover:scale-105 cursor-pointer`}
              onClick={() => setSelectedPlan(selectedPlan === index ? null : index)}
            >
              <h3 className="text-lg font-bold text-center mb-2">{plan}</h3>
              <div className="text-center">
                <span className="text-sm opacity-90">
                  {services.filter(s => s.stars[index]).length} послуг
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <MobileView />
          <DesktopView />
        </div>

        {/* Legend */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2">
              <Circle className="text-blue-500" fill="currentColor" size={16} />
              <span className="text-sm text-gray-600">Включено</span>
            </div>
            <div className="flex items-center space-x-2">
              <Circle className="text-gray-300" fill="currentColor" size={16} />
              <span className="text-sm text-gray-600">Не включено</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}