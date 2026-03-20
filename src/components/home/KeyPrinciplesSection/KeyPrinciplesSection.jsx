import './KeyPrinciplesSection.css';

import { Brain, Lightbulb, Target, Users } from 'lucide-react';

function KeyPrinciplesSection() {
  const principles = [
    {
      title: 'Проактивність',
      desc: 'Формуємо внутрішню відповідальність, ініціативність та готовність діяти самостійно.',
      icon: Target
    },
    {
      title: 'Креативність',
      desc: 'Заохочуємо нестандартне мислення, пошук нових рішень і сміливість в ідеях.',
      icon: Lightbulb
    },
    {
      title: 'Критичне мислення',
      desc: 'Вчимо аналізувати інформацію, ставити запитання та робити обґрунтовані висновки.',
      icon: Brain
    },
    {
      title: 'Співпраця',
      desc: 'Розвиваємо комунікацію, вміння чути інших і ефективно працювати в команді.',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100 mb-4">
            Наш підхід
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Наші принципи
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            Освітнє середовище ліцею побудоване на цінностях, які допомагають дитині не лише навчатися,
            а й розвиватися як особистість.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-md">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {principle.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default KeyPrinciplesSection;
