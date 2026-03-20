import './HeroSection.css';

import Logo from '../../../assets/lyceum-logo.png';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Сучасний дистанційний ліцей нового покоління
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Розвиваємо
              <span className="block bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
                таланти майбутнього
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Сучасний дистанційний ліцей, де кожна дитина отримує індивідуальний підхід,
              якісну академічну підготовку та можливість розкрити свій потенціал у комфортному форматі навчання.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-7 py-4 text-black font-semibold shadow-lg shadow-emerald-200 transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Записатися на консультацію
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-slate-800 font-semibold transition-all duration-300 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md"
              >
                Переглянути програми
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                'Індивідуальний підхід до кожної дитини',
                'Сучасні методики та цифрове навчання',
                'Підтримка учнів і батьків на кожному етапі'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[32px] bg-white p-8 sm:p-10 shadow-2xl shadow-emerald-100 ring-1 ring-slate-200">
              <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600"></div>

              <div className="flex justify-center">
                <img
                  src={Logo}
                  alt="Логотип ліцею Проактивність"
                  className="w-full max-w-sm object-contain"
                />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <div className="text-3xl font-bold text-emerald-700">1–11</div>
                  <div className="mt-1 text-sm text-slate-600">класи навчання</div>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-5">
                  <div className="text-3xl font-bold text-cyan-700">Online</div>
                  <div className="mt-1 text-sm text-slate-600">сучасний формат освіти</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -bottom-4 hidden sm:block rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">Гнучкий формат</div>
              <div className="text-sm text-slate-500">Комфортне навчання з будь-якої точки</div>
            </div>

            <div className="absolute -right-4 top-8 hidden sm:block rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">Фокус на результат</div>
              <div className="text-sm text-slate-500">Знання, навички, розвиток особистості</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
