import { FileText } from 'lucide-react';

function Documents() {
  const documents = [
    {
      title: 'Ліцензія на освітню діяльність',
      file: '/Питання_до_іспиту.pdf',
      gradient: 'from-emerald-400 to-cyan-400'
    },
    {
      title: 'Освітня програма 1–4 класи',
      file: '/docs/program-1-4.pdf',
      gradient: 'from-blue-400 to-emerald-400'
    },
    {
      title: 'Правила прийому',
      file: '/docs/admission-rules.pdf',
      gradient: 'from-purple-400 to-cyan-400'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-200 to-emerald-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Документи ліцею</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ознайомтеся з офіційними документами, що регламентують освітній процес у нашому ліцеї
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br ${doc.gradient} hover:shadow-xl transition`}
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full mr-6 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              </div>
              <div className="text-gray-900 text-lg sm:text-xl font-semibold">
                {doc.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documents;
