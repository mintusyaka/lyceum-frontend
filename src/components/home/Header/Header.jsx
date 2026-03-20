import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/lyceum-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const location = useLocation();

  const COLORS = {
    dark: '#07152F',
    accent: '#12C7B5',
    green: '#08A84A',
    greenHover: '#078E3F',
    blueSoft: '#63B6D7',
    glass: 'rgba(255,255,255,0.62)',
    glassStrong: 'rgba(255,255,255,0.78)',
    border: 'rgba(7,21,47,0.08)',
    shadow: '0 10px 40px rgba(7, 21, 47, 0.10)'
  };

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
      setIsScrolled(window.scrollY > 8);
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
    { label: 'Програми', to: '/plans' },
    { label: 'Про ліцей', to: '/about' },
    { label: 'Контакти', to: '/contacts' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? COLORS.glassStrong : COLORS.glass,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: isScrolled ? COLORS.shadow : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
            <Link to="/" className="group flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              <div
                className="relative flex h-15 w-15 sm:h-18 sm:w-18 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-[22px] transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: `1px solid rgba(18,199,181,0.20)`,
                  boxShadow: '0 8px 24px rgba(18, 199, 181, 0.16)'
                }}
              >
                <div
                  className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(18,199,181,0.12), rgba(99,182,215,0.10))'
                  }}
                />
                <img
                  src={Logo}
                  alt="Логотип ліцею Проактивність"
                  className="relative h-11 w-11 sm:h-13 sm:w-13 lg:h-14 lg:w-14 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className="mb-1 inline-flex rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{
                    background: 'rgba(18,199,181,0.10)',
                    color: COLORS.accent,
                    border: '1px solid rgba(18,199,181,0.18)'
                  }}
                >
                  Дистанційний ліцей
                </div>

                <div
                  className="text-[1.25rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.45rem] xl:text-[2.8rem] font-black leading-[0.95] tracking-[-0.03em]"
                  style={{ color: COLORS.dark }}
                >
                  Ліцей «Проактивність»
                </div>

                <div
                  className="mt-1 hidden md:block text-sm lg:text-[15px] font-medium"
                  style={{ color: 'rgba(7,21,47,0.68)' }}
                >
                  Сучасна дистанційна освіта для майбутнього
                </div>
              </div>
            </Link>

            <nav
              className="hidden xl:flex items-center gap-2 rounded-2xl px-2 py-2"
              style={{
                background: 'rgba(255,255,255,0.52)',
                border: `1px solid ${COLORS.border}`
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-all duration-200"
                  style={
                    isActive(item.to)
                      ? {
                          background: COLORS.dark,
                          color: '#ffffff',
                          boxShadow: '0 8px 18px rgba(7,21,47,0.16)'
                        }
                      : {
                          color: COLORS.dark
                        }
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/contacts"
                className="hidden md:inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-[1px]"
                style={{
                  background: COLORS.green,
                  boxShadow: '0 10px 24px rgba(8,168,74,0.24)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.greenHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = COLORS.green;
                }}
              >
                Записатися
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="inline-flex xl:hidden items-center justify-center rounded-2xl p-3 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.dark,
                  boxShadow: '0 6px 18px rgba(7,21,47,0.08)'
                }}
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
          <div className="absolute inset-0 bg-[rgba(7,21,47,0.24)] backdrop-blur-sm" />

          <div
            ref={menuPanelRef}
            className="absolute right-0 top-0 h-full w-full max-w-sm"
            style={{
              background: 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(22px)',
              WebkitBackdropFilter: 'blur(22px)',
              borderLeft: `1px solid ${COLORS.border}`,
              boxShadow: '-10px 0 30px rgba(7,21,47,0.08)'
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-5"
              style={{ borderBottom: `1px solid ${COLORS.border}` }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="flex h-13 w-13 items-center justify-center rounded-[18px] shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    border: '1px solid rgba(18,199,181,0.20)',
                    boxShadow: '0 6px 18px rgba(18,199,181,0.14)'
                  }}
                >
                  <img
                    src={Logo}
                    alt="Логотип ліцею Проактивність"
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: COLORS.accent }}
                  >
                    Дистанційний ліцей
                  </div>
                  <div
                    className="text-lg font-black leading-tight"
                    style={{ color: COLORS.dark }}
                  >
                    «Проактивність»
                  </div>
                </div>
              </div>

              <button
                onClick={closeMenu}
                className="rounded-2xl p-2.5"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.dark
                }}
                aria-label="Закрити меню"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-bold transition-all duration-200"
                    style={
                      isActive(item.to)
                        ? {
                            background: COLORS.dark,
                            color: '#ffffff',
                            boxShadow: '0 10px 20px rgba(7,21,47,0.14)'
                          }
                        : {
                            background: 'rgba(255,255,255,0.64)',
                            color: COLORS.dark,
                            border: `1px solid ${COLORS.border}`
                          }
                    }
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              <Link
                to="/contacts"
                onClick={closeMenu}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-bold text-white transition-all duration-300"
                style={{
                  background: COLORS.green,
                  boxShadow: '0 10px 24px rgba(8,168,74,0.24)'
                }}
              >
                Записатися на консультацію
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
