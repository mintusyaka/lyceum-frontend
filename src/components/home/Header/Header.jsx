import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/lyceum-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        menuPanelRef.current &&
        !menuPanelRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = [
    { label: 'Програми', to: '/plans' },
    { label: 'Про ліцей', to: '/about' },
    { label: 'Контакти', to: '/contacts' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
            <Link to="/" className="flex items-center gap-4 min-w-0 flex-1">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden flex-shrink-0">
                <img
                  src={Logo}
                  alt="Логотип ліцею Проактивність"
                  className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1 max-w-[760px]">
                <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-700 mb-2">
                  ДИСТАНЦІЙНИЙ ЛІЦЕЙ
                </div>

                <div className="text-[1.45rem] sm:text-[1.9rem] md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.1rem] font-bold leading-none tracking-tight text-slate-900">
                  Ліцей «Проактивність»
                </div>

                <div className="mt-1 hidden md:block text-sm lg:text-base text-slate-500 leading-6">
                  Сучасна освіта для майбутнього
                </div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1 flex-shrink-0">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contacts"
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
              >
                Подати заявку
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="inline-flex xl:hidden items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-emerald-700"
                aria-label="Відкрити меню"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm" />

          <div
            ref={menuPanelRef}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden flex-shrink-0">
                  <img
                    src={Logo}
                    alt="Логотип ліцею Проактивність"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] font-semibold tracking-wide text-emerald-700">
                    ДИСТАНЦІЙНИЙ ЛІЦЕЙ
                  </div>
                  <div className="text-lg font-bold text-slate-900 leading-tight">
                    «Проактивність»
                  </div>
                </div>
              </div>

              <button
                onClick={closeMenu}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700"
                aria-label="Закрити меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-semibold text-slate-800 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {item.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>

              <Link
                to="/contacts"
                onClick={closeMenu}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-800"
              >
                Подати заявку
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
