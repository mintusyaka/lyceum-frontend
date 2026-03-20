import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/lyceum-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const location = useLocation();

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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    handleScroll();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = [
    { label: 'Програми навчання', to: '/plans' },
    { label: 'Про ліцей', to: '/about' },
    { label: 'Контакти', to: '/contacts' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-slate-200/80 bg-white/88 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
            : 'border-b border-transparent bg-white/72 backdrop-blur-xl'
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
            <Link
              to="/"
              className="group flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-400 opacity-90 blur-sm transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-[24px] bg-white p-2 shadow-[0_12px_30px_rgba(16,185,129,0.20)] ring-1 ring-white/70">
                  <img
                    src={Logo}
                    alt="Логотип ліцею Проактивність"
                    className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(15,23,42,0.16)] contrast-125 saturate-125"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Дистанційний ліцей
                  </span>
                </div>

                <div className="max-w-[900px] text-[1.3rem] sm:text-[1.9rem] md:text-[2.25rem] lg:text-[2.8rem] xl:text-[3.15rem] font-black leading-[0.95] tracking-[-0.03em] text-slate-950">
                  Ліцей «Проактивність»
                </div>

                <div className="mt-1.5 hidden md:block text-sm lg:text-[15px] font-medium text-slate-600">
                  Якісна дистанційна освіта у сучасному форматі
                </div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-2 py-2 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 ${
                    isActive(item.to)
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/contacts"
                className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Запис на консультацію
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="inline-flex xl:hidden items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950"
                aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm" />

          <div
            ref={menuPanelRef}
            className="absolute right-0 top-0 h-full w-full max-w-[380px] overflow-y-auto border-l border-white/30 bg-white/96 shadow-2xl backdrop-blur-2xl"
          >
            <div className="border-b border-slate-200 px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-br from-emerald-500 to-cyan-400 opacity-90 blur-sm" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[20px] bg-white p-2 shadow-md">
                      <img
                        src={Logo}
                        alt="Логотип ліцею Проактивність"
                        className="h-full w-full object-contain contrast-125 saturate-125"
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-800">
                      Дистанційний ліцей
                    </div>
                    <div className="text-lg font-black leading-tight text-slate-950">
                      Ліцей «Проактивність»
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Сучасна освіта онлайн
                    </div>
                  </div>
                </div>

                <button
                  onClick={closeMenu}
                  className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm"
                  aria-label="Закрити меню"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="px-5 py-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 text-base font-bold transition-all duration-200 ${
                      isActive(item.to)
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'border border-slate-200 bg-slate-50 text-slate-900 hover:border-emerald-200 hover:bg-emerald-50'
                    }`}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  Маєте запитання щодо вступу або навчання?
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Залиште заявку — і з вами зв’яжуться.
                </div>

                <Link
                  to="/contacts"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-base font-bold text-white shadow-[0_12px_24px_rgba(15,23,42,0.15)] transition-all duration-300 hover:bg-emerald-700"
                >
                  Залишити заявку
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
