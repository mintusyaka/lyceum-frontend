import './Header.css';

import { Link } from 'react-router-dom';

import Logo from '../../../assets/lyceum-logo.png'

function Header() {
  return (
    
    <header className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex justify-between items-center py-6"> */}
            <div className="flex justify-center items-center pb-10">

               
              <div className="ml-4 pt-10">
                <h1 className="text-2xl sm:text-lg bg-linear-to-bl from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold hover:animate-glow hover:text-white transition-colors duration-500">ЛІЦЕЙ <strong>"ПРОАКТИВНІСТЬ"</strong></h1>
              </div>

              
            </div>
            {/* <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Про нас</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Програми</a>
              <a href="#prices" className="text-gray-700 hover:text-blue-600 transition-colors">Вартість</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакти</a>
            </nav> */}
          {/* </div> */}
        </div>
      </header>

  );
}

export default Header;

