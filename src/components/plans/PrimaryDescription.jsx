import { BookOpen, CheckCircle } from "lucide-react";

function PrimaryDescription() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-200 to-emerald-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Програма для молодшої школи
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            У <span className="text-emerald-600 font-semibold">«Проактивності»</span> ми створили унікальну програму для учнів 1–4 класів, яка поєднує базові знання, творчість та розвиток емоційного інтелекту.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200">
          <ul className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Інтегроване навчання",
                desc: "Поєднання кількох предметів в єдину тему тижня: наприклад, математика, читання і природознавство — через спільну тему «Подорож»."
              },
              {
                title: "Щоденне читання та письмо",
                desc: "Читання українських і зарубіжних казок, написання власних міні-історій, розвиток усного мовлення."
              },
              {
                title: "Творчі проєкти",
                desc: "Аплікації, малювання, музика, створення лялькового театру — усе для розвитку уяви та естетичного смаку."
              },
              {
                title: "Рухова активність і фізична культура",
                desc: "Онлайн-руханки, вправи з координації, йога для дітей, щоб зберегти здоров’я та енергію."
              },
              {
                title: "Навички саморегуляції та емоційного інтелекту",
                desc: "Дитина вчиться розпізнавати свої емоції, домовлятися, розв’язувати конфлікти."
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform">
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
              ✨ Ваша дитина отримає не лише знання, а й задоволення від навчання!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrimaryDescription;
