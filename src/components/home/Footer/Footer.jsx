
import './Footer.css';

import {BookOpen} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Ліцей "Проактивність"</span>
            </div>
            <p className="text-gray-400 mb-6">Формуємо лідерів майбутнього вже сьогодні</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">© 2025 Ліцей "Проактивність". Всі права захищені.</p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;