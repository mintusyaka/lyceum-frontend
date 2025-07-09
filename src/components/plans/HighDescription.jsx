import { BookOpen } from "lucide-react";

function HighDescription() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-200 to-emerald-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Програма для старшої школи
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            У <span className="text-emerald-600 font-semibold">«Проактивності»</span> ми допомагаємо учням 10–11 класів впевнено обрати свій шлях, готуючи їх до ЗНО, університету та реального життя.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200">
          <ul className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Профільне навчання",
                desc: "Можливість обрати напрям (гуманітарний, математичний, природничий), щоб поглиблено вивчати потрібні предмети."
              },
              {
                title: "Підготовка до ЗНО та НМТ",
                desc: "Індивідуальні траєкторії підготовки, щотижневі тренування, аналіз типових помилок, підтримка викладачів."
              },
              {
                title: "Університетські курси",
                desc: "Співпраця з партнерами: курси з логіки, програмування, дизайну, основ права, економіки тощо."
              },
              {
                title: "Навички самопрезентації та проєктування майбутнього",
                desc: "Портфоліо, мотиваційні листи, ораторське мистецтво, підготовка до вступу в університет."
              },
              {
                title: "Стажування та волонтерство",
                desc: "Реальні можливості застосувати знання: стажування, участь у соціальних ініціативах, менторство для молодших."
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                    <strong className="text-gray-900 mr-2">{item.title}</strong>
                    <span className="text-gray-700">{item.desc}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 px-8 py-6 rounded-2xl border-2 border-emerald-200 shadow-lg">
            <p className="text-base sm:text-lg lg:text-xl text-emerald-800 font-medium leading-relaxed">
              ✨ Дистанційне навчання у старшій школі — це свобода, підтримка і впевненість у своїх можливостях!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighDescription;
