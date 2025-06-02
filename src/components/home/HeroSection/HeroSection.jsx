
import './HeroSection.css';

import Logo from '../../../assets/lyceum-logo.png';


function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-cyan-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Розвиваємо
                  <span className="bg-linear-to-bl from-green-500 to-cyan-500 bg-clip-text text-transparent"> таланти </span>
                  майбутнього
                </h2>
    
                <img src={Logo} alt="Logo" className="inline-block pb-10" />
                
    
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  Сучасний ліцей, де кожна дитина отримує індивідуальний підхід та можливість розкрити свій потенціал через інноваційні методи навчання
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <p className='text-white'>Записатися на консультацію</p>
                  </a>
                  <a href="#about" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-200 transition-colors">
                    <p className="text-gray-900">Дізнатися більше</p>
                  </a>
                </div>
    
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-70 left-40 w-10 h-10 bg-green-200 rounded-full opacity-5 animate-pulse duration-500 delay-150"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-90 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute top-115 right-40 w-14 h-14 bg-blue-200 rounded-full opacity-25 animate-pulse duration-300"></div>
          </section>
  );
}

export default HeroSection;