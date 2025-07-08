import { Users, CheckCircle, Pointer, BookOpen, Heart, TrendingUp } from 'lucide-react';

function Advantages() {
  return (
    <section id="advantages" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-200 to-emerald-200 relative overflow-hidden">
    {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(-4px); }
          66% { transform: translateY(-12px) translateX(6px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(-6px); }
          50% { transform: translateY(-3px) translateX(4px); }
          75% { transform: translateY(-12px) translateX(-2px); }
        }
        
        .float-1 { animation: float 4s ease-in-out infinite; }
        .float-2 { animation: float-slow 6s ease-in-out infinite; }
        .float-3 { animation: float-reverse 5s ease-in-out infinite; }
        .float-4 { animation: float 7s ease-in-out infinite; }
        .float-5 { animation: float-slow 4.5s ease-in-out infinite; }
        .float-6 { animation: float-reverse 6.5s ease-in-out infinite; }
        .float-7 { animation: float 5.5s ease-in-out infinite; }
      `}</style>
      
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-cyan-300 rounded-full opacity-70 shadow-lg float-1"></div>
      <div className="hidden lg:block absolute bottom-32 left-40 w-10 h-10 bg-green-300 rounded-full opacity-70 shadow-lg float-2"></div>
      <div className="hidden lg:block absolute top-40 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-70 shadow-lg float-3"></div>
      <div className="hidden lg:block absolute top-60 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-70 shadow-lg float-4"></div>
      <div className="hidden lg:block absolute top-80 right-40 w-14 h-14 bg-cyan-400 rounded-full opacity-70 shadow-lg float-5"></div>
      <div className="hidden lg:block absolute bottom-20 right-1/3 w-8 h-8 bg-green-400 rounded-full opacity-60 shadow-lg float-6"></div>
      <div className="hidden lg:block absolute top-10 left-1/2 w-6 h-6 bg-blue-400 rounded-full opacity-60 shadow-lg float-7"></div>
      <div className="hidden lg:block absolute bottom-15 right-28 w-6 h-6 bg-cyan-400 rounded-full opacity-55 shadow-lg float-7"></div>
    */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Чому варто обрати нас
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Ми розуміємо, що вибір школи — це відповідальне рішення. Тому в{' '}
            <span className="text-emerald-600 font-semibold">«Проактивності»</span>{' '}
            ми створили безпечне та підтримуюче середовище, де кожна дитина отримує:
          </p>
        </div>
        
        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Дослідження прогресу
            </h4>
            <ul className="space-y-4">
              {[
                "Детальний формат звіту для батьків",
                "Оновлений прогрес здобувача освіти",
                "Тестування з профорієнтації",
                "Аналіз навчання",
                "Поради щодо професій",
                "Щосеместровий зріз знань"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Взаємодія та соціалізація
            </h4>
            <ul className="space-y-4">
              {[
                "Групові проєкти (1–11 класи)",
                "Друзі та клуби за інтересами",
                "Спільне навчання з однокласниками",
                "Пошук друзів та геолокація",
                "Шкільне самоврядування та стрічка новин",
                "Створення подій і запрошення друзів"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Мотивація навчання
            </h4>
            <ul className="space-y-4">
              {[
                "Мій прогрес",
                "Важливі події",
                "Сповіщення та рекомендації",
                "Персоналізований інтерфейс",
                "Настільні ігри"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Educational Program Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 sm:mb-8">
              Якщо ти хочеш не просто навчатися, а{' '}
              <em className="text-emerald-600 font-semibold not-italic bg-gradient-to-r from-emerald-100 to-cyan-100 px-2 py-1 rounded-md">
                вчитися мислити, діяти і вести за собою
              </em>
              {' '}— ти у правильному місці!{' '}
              <strong className="text-gray-900 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-lg">
                Дистанційний ліцей «Проактивність»
              </strong>{' '}
              відкритий для тих, хто прагне розвитку, відповідальності і нових можливостей.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mb-8"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Наш ліцей реалізує компетентнісний підхід згідно з держстандартами, але з акцентом на практичне застосування знань. У програмі:
            </p>
          </div>

          {/* Educational Features */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200">
            <ul className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Базові академічні предмети:",
                  desc: "українська мова, математика, природничі науки, історія.",
                  gradient: "from-emerald-400 to-cyan-400"
                },
                {
                  title: "Сучасні дисципліни:",
                  desc: "цифрові технології, медіаграмотність, екологія.",
                  gradient: "from-blue-400 to-emerald-400"
                },
                {
                  title: "Соціальні та емоційні навички:",
                  desc: "командна робота, лідерство, емоційний інтелект.",
                  gradient: "from-cyan-400 to-blue-400"
                },
                {
                  title: null,
                  desc: "Проектна діяльність та дослідницькі роботи, що розвивають критичне мислення.",
                  gradient: "from-purple-400 to-cyan-400"
                },
                {
                  title: null,
                  desc: "Залучення до громадських ініціатив і волонтерства.",
                  gradient: "from-green-400 to-emerald-400"
                }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform`}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                      {item.title && (
                        <strong className="text-gray-900 mr-2">{item.title}</strong>
                      )}
                      <span className="text-gray-700">{item.desc}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-block bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 px-8 py-6 rounded-2xl border-2 border-emerald-200 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl text-emerald-800 font-medium leading-relaxed">
                ✨ Готовий розпочати своє майбутнє? Пропонуємо ознайомитись з усіма доступними планами нижче.{' '}
              </p>
            </div>
          </div>
          <span className="mt-5 inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm sm:text-base font-bold animate-pulse">
            P.S. У нас зараз знижки!
          </span>
        </div>

        <button
            onClick={() => window.open('/public/Питання_до_іспиту.pdf', '_blank')}
            className="mt-10 bg-white text-emerald-600 border border-emerald-500 px-6 py-3 rounded-md hover:bg-emerald-50 transition"
            >
            Продивитись ліцензію
        </button>

      </div>
    </section>
  );
}

export default Advantages;