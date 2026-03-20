import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/lyceum-logo.png';

function Header() {
  // ================================
  // СТАНИ КОМПОНЕНТА
  // ================================

  // Відповідає за відкриття / закриття мобільного меню
  // false = меню закрите
  // true = меню відкрите
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Відповідає за стан хедера при скролі
  // false = сторінка вгорі
  // true = сторінка прокручена вниз
  // Використовується, щоб зробити хедер щільнішим і додати тінь
  const [isScrolled, setIsScrolled] = useState(false);

  // Посилання на кнопку бургер-меню
  // Потрібно, щоб відстежувати клік поза кнопкою/панеллю
  const menuButtonRef = useRef(null);

  // Посилання на саму панель мобільного меню
  const menuPanelRef = useRef(null);

  // Дає поточний шлях сторінки, щоб підсвічувати активний пункт меню
  const location = useLocation();

  // ================================
  // КОЛЬОРИ ТА ВІЗУАЛЬНІ ЗМІННІ
  // ================================
  // Тут найзручніше міняти палітру всього хедера
  const COLORS = {
    // Основний темний колір:
    // використовується для головного тексту, іконок, активних елементів
    dark: '#07152F',

    // Бірюзовий акцент:
    // бейдж "Дистанційний ліцей", декоративні рамки, акцентні деталі
    accent: '#12C7B5',

    // Основний зелений колір кнопки CTA
    green: '#08A84A',

    // Колір кнопки при наведенні
    greenHover: '#ccff33',

    // М’який блакитний колір для декоративного градієнта
    blueSoft: '#63B6D7',

    // Напівпрозорий білий фон хедера
    // ОСТАННЄ ЧИСЛО = рівень прозорості
    // 0.62 = доволі прозоро
    glass: 'rgba(255,255,255,0.62)',

    // Трохи менш прозорий фон для стану при скролі
    // 0.78 = щільніше, читається краще на фоні контенту
    glassStrong: 'rgba(255,255,255,0.78)',

    // Дуже легкий темний колір для рамок
    border: 'rgba(7,21,47,0.08)',

    // Тінь хедера
    // 0 10px 40px = без зміщення по X, вниз на 10px, розмиття 40px
    // 0.10 = інтенсивність тіні
    shadow: '0 10px 40px rgba(7, 21, 47, 0.10)'
  };

  useEffect(() => {
    // Закриття меню при кліку поза кнопкою і панеллю
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

    // Закриття меню по клавіші Escape
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    // Відстеження прокрутки сторінки
    // Якщо прокрутили більше ніж на 8px — вважаємо, що хедер у стані "скрол"
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);

    // Коли меню відкрите — блокуємо прокрутку body
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

  // Закрити мобільне меню
  const closeMenu = () => setIsMenuOpen(false);

  // Перемикач меню
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Пункти навігації
  const navItems = [
    { label: 'Програми', to: '/plans' },
    { label: 'Про ліцей', to: '/about' },
    { label: 'Контакти', to: '/contacts' }
  ];

  // Перевірка, чи активна сторінка
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================================
          ОСНОВНИЙ ХЕДЕР
          ================================ */}
      <header
        // sticky top-0 = хедер прилипає зверху
        // z-50 = великий z-index, щоб був поверх сторінки
        // transition-all duration-300 = плавні переходи при зміні стану
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          // ФОН ХЕДЕРА:
          // коли сторінка вгорі — прозоріший
          // коли сторінка прокручена — щільніший
          background: isScrolled ? COLORS.glassStrong : COLORS.glass,

          // ЕФЕКТ МАТОВОГО СКЛА:
          // чим більше число, тим сильніше розмиття
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',

          // Нижня лінія хедера
          borderBottom: `1px solid ${COLORS.border}`,

          // Тінь з’являється тільки при скролі
          boxShadow: isScrolled ? COLORS.shadow : 'none'
        }}
      >
        {/* max-w-7xl = максимальна ширина контейнера
            mx-auto = центрування
            px-4 sm:px-6 lg:px-8 = горизонтальні відступи на різних екранах */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* flex = елементи в один ряд
              items-center = вертикально по центру
              justify-between = лівий блок вліво, правий вправо
              gap-4 = відстань між блоками
              py-3 lg:py-4 = вертикальна висота хедера */}
          <div className="flex items-center justify-between gap-4 py-3 lg:py-4">

            {/* ================================
                ЛІВИЙ БЛОК: ЛОГОТИП + ТЕКСТ
                ================================ */}
            <Link
              to="/"
              // group = дозволяє робити hover-ефекти на внутрішніх елементах
              // flex = логотип і текст стоять у ряд
              // flex-1 = займає доступний простір
              className="group flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
            >
              {/* Блок навколо логотипа */}
              <div
                // relative = щоб можна було розмістити декоративний шар поверх
                // h / w = розмір контейнера логотипа
                // rounded-[22px] = заокруглення кутів
                // shrink-0 = не дозволяє блоку стискатися
                className="relative flex h-15 w-15 sm:h-18 sm:w-18 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-[22px] transition-all duration-300"
                style={{
                  // ФОН КОНТЕЙНЕРА ЛОГОТИПА
                  // 0.88 = майже непрозорий білий
                  background: 'rgba(255,255,255,0.88)',

                  // Тонка бірюзова рамка навколо логотипа
                  border: `1px solid rgba(18,199,181,0.20)`,

                  // М’яка бірюзова тінь
                  boxShadow: '0 8px 24px rgba(18, 199, 181, 0.16)'
                }}
              >
                {/* Декоративний градієнт, який з’являється при наведенні */}
                <div
                  className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    // Градієнтний декоративний шар
                    background:
                      'linear-gradient(135deg, rgba(18,199,181,0.12), rgba(99,182,215,0.10))'
                  }}
                />

                {/* САМ ЛОГОТИП */}
                <img
                  src={Logo}
                  alt="Логотип ліцею Проактивність"
                  // h / w = розмір самого логотипа всередині контейнера
                  // object-contain = зображення повністю вміщується без обрізання
                  className="relative h-11 w-11 sm:h-13 sm:w-13 lg:h-14 lg:w-14 object-contain"
                />
              </div>

              {/* Текстова частина: бейдж + назва + підзаголовок */}
              <div className="min-w-0 flex-1">

                {/* Бейдж "Дистанційний ліцей" */}
                <div
                  // rounded-full = капсула
                  // px / py = внутрішні відступи
                  // text-[10px] ... = розмір тексту
                  // uppercase = великі літери
                  // tracking = відстань між літерами
                  className="mb-1 inline-flex rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{
                    // Напівпрозорий бірюзовий фон
                    background: 'rgba(18,199,181,0.10)',

                    // Колір тексту бейджа
                    color: COLORS.accent,

                    // Рамка бейджа
                    border: '1px solid rgba(18,199,181,0.18)'
                  }}
                >
                  Дистанційний ліцей
                </div>

                {/* Головна назва ліцею */}
                <div
                  // text-[...] = розмір на різних екранах
                  // font-black = дуже жирний шрифт
                  // leading-[0.95] = щільна висота рядка
                  // tracking-[-0.03em] = трохи стиснуті літери
                  className="text-[1.25rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.45rem] xl:text-[2.8rem] font-black leading-[0.95] tracking-[-0.03em]"
                  style={{ color: COLORS.dark }}
                >
                  Ліцей «Проактивність»
                </div>

                {/* Підзаголовок */}
                <div
                  // hidden md:block = ховається на мобілці, видно від md
                  // text-sm / lg:text-[15px] = розмір тексту
                  className="mt-1 hidden md:block text-sm lg:text-[15px] font-medium"
                  style={{
                    // Темний текст, але менш насичений через прозорість 0.68
                    color: 'rgba(7,21,47,0.68)'
                  }}
                >
                  Сучасна дистанційна освіта для майбутнього
                </div>
              </div>
            </Link>

            {/* ================================
                ДЕСКТОПНЕ МЕНЮ
                Видиме тільки на XL і більше
                ================================ */}
            <nav
              // hidden xl:flex = показується тільки на великих екранах
              // gap-2 = відстань між пунктами меню
              // rounded-2xl = округлення блоку меню
              className="hidden xl:flex items-center gap-2 rounded-2xl px-2 py-2"
              style={{
                // Напівпрозорий фон блоку меню
                background: 'rgba(255,255,255,0.52)',

                // Рамка меню
                border: `1px solid ${COLORS.border}`
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  // px / py = внутрішні відступи кнопок меню
                  // text-[15px] = розмір тексту
                  // font-semibold = напівжирний
                  className="rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-all duration-200"
                  style={
                    isActive(item.to)
                      ? {
                          // АКТИВНИЙ ПУНКТ МЕНЮ
                          background: COLORS.dark,
                          color: '#ffffff',
                          boxShadow: '0 8px 18px rgba(7,21,47,0.16)'
                        }
                      : {
                          // НЕАКТИВНИЙ ПУНКТ
                          color: COLORS.dark
                        }
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ================================
                ПРАВИЙ БЛОК:
                КНОПКА CTA + КНОПКА МОБІЛЬНОГО МЕНЮ
                ================================ */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Головна кнопка дії */}
              <Link
                to="/contacts"
                // hidden md:inline-flex = на мобілці ховається
                // rounded-2xl = округлення
                // px / py = розміри кнопки
                className="hidden md:inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-#ffffff transition-all duration-300 hover:-translate-y-[1px]"
                style={{
                  // Основний зелений фон кнопки
                  background: COLORS.green,

                  // Тінь кнопки
                  boxShadow: '0 10px 24px rgba(8,168,74,0.24)'
                }}
                // hover через JS:
                // при наведенні міняється колір фону
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

              {/* Кнопка бургер-меню для мобільної версії */}
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                // xl:hidden = на великих екранах прихована
                // p-3 = внутрішній відступ, а отже і розмір кнопки
                className="inline-flex xl:hidden items-center justify-center rounded-2xl p-3 transition-all duration-200"
                style={{
                  // Напівпрозорий білий фон кнопки
                  background: 'rgba(255,255,255,0.72)',

                  // Тонка рамка
                  border: `1px solid ${COLORS.border}`,

                  // Колір іконки
                  color: COLORS.dark,

                  // Легка тінь
                  boxShadow: '0 6px 18px rgba(7,21,47,0.08)'
                }}
                aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
                aria-expanded={isMenuOpen}
              >
                {/* Іконка міняється залежно від стану меню */}
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================================
          МОБІЛЬНЕ МЕНЮ
          Показується тільки коли isMenuOpen === true
          ================================ */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          {/* Затемнення фону позаду меню */}
          <div
            // backdrop-blur-sm = легке розмиття фону позаду
            className="absolute inset-0 bg-[rgba(7,21,47,0.24)] backdrop-blur-sm"
          />

          {/* Права висувна панель */}
          <div
            ref={menuPanelRef}
            // absolute right-0 top-0 = панель справа зверху
            // h-full w-full max-w-sm = на всю висоту, але не ширше max-w-sm
            className="absolute right-0 top-0 h-full w-full max-w-sm"
            style={{
              // Напівпрозорий білий фон панелі
              background: 'rgba(255,255,255,0.78)',

              // Сильніший blur, ніж у хедера
              backdropFilter: 'blur(22px)',
              WebkitBackdropFilter: 'blur(22px)',

              // Ліва рамка панелі
              borderLeft: `1px solid ${COLORS.border}`,

              // Тінь панелі
              boxShadow: '-10px 0 30px rgba(7,21,47,0.08)'
            }}
          >
            {/* Верхня частина мобільного меню */}
            <div
              className="flex items-center justify-between px-5 py-5"
              style={{ borderBottom: `1px solid ${COLORS.border}` }}
            >
              <div className="flex items-center gap-3 min-w-0">

                {/* Маленький логотип у мобільному меню */}
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

                {/* Текст біля логотипа в мобільному меню */}
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

              {/* Кнопка закриття мобільного меню */}
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

            {/* Основний вміст мобільного меню */}
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
                            // Активний пункт у мобільному меню
                            background: COLORS.dark,
                            color: '#ffffff',
                            boxShadow: '0 10px 20px rgba(7,21,47,0.14)'
                          }
                        : {
                            // Неактивний пункт
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

              {/* Велика нижня CTA-кнопка у мобільному меню */}
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
