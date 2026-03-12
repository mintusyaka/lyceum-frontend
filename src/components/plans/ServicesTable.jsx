import React from 'react';
import { Circle } from 'lucide-react';

const plans = [
  'Здобувач освіти «Проактивний»',
  'Екстерн',
  'Сімейне навчання',
  'Українознавчий компонент',
];

// Новый порядок столбцов:
// 0 = Проактивний
// 3 = Українознавчий компонент
// 1 = Екстерн
// 2 = Сімейне навчання
const displayOrder = [0, 3, 1, 2];
const orderedPlans = displayOrder.map((index) => plans[index]);

const services = [
  {
    name: 'Документ про освіту державного зразка',
    stars: [true, true, true, true],
  },
  {
    name: 'ДПА в дистанційній формі, а НМТ за місцем проживання',
    stars: [true, true, true, true],
  },
  {
    name: 'Повний доступ до освітніх матеріалів',
    stars: [true, true, false, true],
  },
  {
    name: 'Інтерактивні програми, навчальні ігри та моделі 3D',
    stars: [true, false, false, true],
  },
  {
    name: 'Додаткові навчальні сервіси, що входять у вартість пакету',
    stars: [true, false, false, false],
  },
  {
    name: 'Освітня платформа для вивчення іноземних мов в 1-11 класах (+1 предмет на вибір)',
    stars: [true, false, false, false],
  },
  {
    name: 'Перевірка письмових та практичних робіт',
    stars: [true, true, true, true],
  },
  {
    name: 'Технічна підтримка 24/7',
    stars: [true, false, false, true],
  },
  {
    name: 'Звіт про успішність',
    stars: [true, true, true, true],
  },
  {
    name: 'Автоматизована перевірка робіт',
    stars: [true, true, true, true],
  },
  {
    name: 'Повна перевірка письмових робіт',
    stars: [true, true, true, true],
  },
  {
    name: 'Індивідуальні консультації',
    stars: [true, true, true, true],
  },
  {
    name: 'Онлайн-уроки для 1-11 класів',
    stars: [true, false, false, true],
  },
  {
    name: "Зв'язок із тютором",
    stars: [true, false, false, true],
  },
  {
    name: 'Групова робота та проєктна діяльність у 1-11 класах',
    stars: [true, false, false, true],
  },
  {
    name: 'Групові онлайн уроки (у класі до 15 учнів)',
    stars: [true, false, false, true],
  },
  {
    name: 'Майстер-класи (офлайн та онлайн)',
    stars: [true, true, true, true],
  },
  {
    name: 'Підготовка до ДПА та НМТ',
    stars: [true, true, true, true],
  },
  {
    name: 'Вартість',
    stars: [5200 , 6500 , 15 900 ,  99 ],
  },
];

const getHeaderBgClass = (index) => {
  const colors = [
    'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg',
    'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg',
    'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg',
    'bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg',
  ];
  return colors[index] || '';
};

const getStarColorClass = (index) => {
  const starColors = [
    'text-amber-500',
    'text-blue-500',
    'text-emerald-500',
    'text-cyan-500',
  ];
  return starColors[index] || 'text-gray-300';
};

export default function ServicesTable() {
  const MobileView = () => (
    <div className="md:hidden space-y-4">
      {orderedPlans.map((plan, visualIndex) => {
        const planIndex = displayOrder[visualIndex];

        return (
          <div key={visualIndex} className="space-y-3">
            <div
              className={`p-4 rounded-2xl ${getHeaderBgClass(
                visualIndex
              )} transform transition-all duration-200 hover:scale-105`}
            >
              <h3 className="text-lg font-bold text-center">{plan}</h3>
            </div>

            <div className="space-y-2">
              {services.map(
                (service, serviceIndex) =>
                  service.stars[planIndex] && (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-700 flex-1">
                        {service.name}
                      </span>
                      <Circle
                        className={`${getStarColorClass(visualIndex)} ml-2`}
                        fill="currentColor"
                        size={16}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

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

              {orderedPlans.map((plan, visualIndex) => (
                <th
                  key={visualIndex}
                  className={`p-6 text-center relative ${
                    visualIndex < orderedPlans.length - 1
                      ? 'border-r border-gray-200'
                      : ''
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 ${getHeaderBgClass(
                      visualIndex
                    )} transform transition-all duration-200 hover:scale-105`}
                  >
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
                    <span className="text-gray-800 font-medium text-sm leading-relaxed group-hover:text-blue-900 transition-colors text-left">
                      {service.name}
                    </span>
                  </div>
                </td>

                {displayOrder.map((planIndex, visualIndex) => {
                  const hasStar = service.stars[planIndex];

                  return (
                    <td
                      key={visualIndex}
                      className={`text-center p-6 border-t border-gray-100 ${
                        visualIndex < displayOrder.length - 1
                          ? 'border-r border-gray-200'
                          : ''
                      }`}
                    >
                      <div className="flex justify-center">
                        <Circle
                          className={`transform transition-all duration-200 ${
                            hasStar
                              ? `${getStarColorClass(
                                  visualIndex
                                )} scale-100 hover:scale-125`
                              : 'text-gray-300 scale-90'
                          }`}
                          fill="currentColor"
                          size={24}
                        />
                      </div>
                    </td>
                  );
                })}
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
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-green-600 to-emerald-600 mb-4 tracking-tight">
            ПЕРЕЛІК ПОСЛУГ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Оберіть найкращий план навчання для вашого успіху
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8 md:hidden">
          {orderedPlans.map((plan, visualIndex) => {
            const planIndex = displayOrder[visualIndex];

            return (
              <div
                key={visualIndex}
                className={`p-6 rounded-2xl ${getHeaderBgClass(
                  visualIndex
                )} transform transition-all duration-200 hover:scale-105`}
              >
                <h3 className="text-lg font-bold text-center mb-2">{plan}</h3>
                <div className="text-center">
                  <span className="text-sm opacity-90">
                    {services.filter((s) => s.stars[planIndex]).length} послуг
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <MobileView />
          <DesktopView />
        </div>

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
