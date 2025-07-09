
import './HeroSection.css';

import Logo from '../../../assets/lyceum-logo.png';


function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-cyan-200 to-emerald-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  РОЗВИВАЄМО
                  <span className="bg-linear-to-bl from-green-500 to-cyan-500 bg-clip-text text-transparent"> ТАЛАНТИ </span>
                  МАЙБУТНЬОГО
                </h2>
    
                <img src={Logo} alt="Logo" className="inline-block pb-10" />
                
    
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  Сучасний дистанційний ліцей, де кожна дитина отримує індивідуальний підхід та можливість розкрити свій потенціал через інноваційні методи навчання
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
            
          </section>
  );
}

export default HeroSection;