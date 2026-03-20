import './ContactSection.css';

import { useState } from 'react';

import {
  CheckCircle2,
  Mail,
  Phone,
  Send,
  InstagramIcon,
  FacebookIcon,
  ArrowUpRight,
  Clock3
} from 'lucide-react';

// =====================
// CONFIG (your contacts)
// =====================
const PHONE_TEL = '+380980230330';
const PHONE_DISPLAY = '+38 (098) 023-03-30';
const PHONE_DIGITS = '380980230330';

const EMAIL = 'ckdo.proactivity@gmail.com';

// Telegram by phone: Telegram не дає стабільну web-ссилку на акаунт по номеру.
// Лишаємо твою логіку: спроба відкрити app + fallback.
const TELEGRAM_APP_LINK = 'tg://resolve?phone=380980230330';
const TELEGRAM_WEB_LINK = 'https://t.me/+380980230330';

const WHATSAPP_LINK = `https://wa.me/${PHONE_DIGITS}`;

// --- Brand icons (SVG) ---
const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.9 4.6c.2-1-0.8-1.7-1.7-1.3L2.7 10.5c-1 .4-.9 1.8.1 2.1l4.6 1.6 1.7 5.3c.3.9 1.4 1 1.9.3l2.7-3.5 4.6 3.4c.7.5 1.7.1 1.9-.8l1.9-14.3ZM9.6 14.5l9.4-8.3-7.7 9.5-.3 3.7-1.6-4.7-3.8-1.3 13.9-5.6-10 6.8Z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.6-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.1-.3.2-.5.1-1-.5-1.8-1-2.6-2.1-.2-.3-.5-.7-.6-1-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.8s.8 2.1 1 2.3c.1.2 1.6 2.5 3.8 3.5.5.2.9.4 1.2.5.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
  </svg>
);

function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: '',
    interests: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openTelegram = (e) => {
    e.preventDefault();

    window.location.href = TELEGRAM_APP_LINK;

    setTimeout(() => {
      window.open(TELEGRAM_WEB_LINK, '_blank', 'noopener,noreferrer');
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formUrl =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHg-V3Q_Byc8W4quxy_VlreUen-SszaZ3h1vt6WVhWZq5W4g/formResponse';

    const formBody = new URLSearchParams();
    formBody.append('entry.1005394950', formData.parentName);
    formBody.append('entry.139863884', formData.studentName);
    formBody.append('entry.874705588', formData.phone);
    formBody.append('entry.123218155', formData.email);
    formBody.append('entry.1184347914', formData.grade);
    formBody.append('entry.881893326', formData.interests);
    formBody.append('entry.778340436', formData.message);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          parentName: '',
          studentName: '',
          phone: '',
          email: '',
          grade: '',
          interests: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Помилка надсилання:', error);
    } finally {
      setIsSending(false);
    }
  };

  const quickContacts = [
    {
      title: 'Телефон',
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
      icon: Phone,
      iconClass: 'text-emerald-700',
      cardClass: 'from-emerald-50 to-white'
    },
    {
      title: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
      iconClass: 'text-cyan-700',
      cardClass: 'from-cyan-50 to-white'
    }
  ];

  const socialLinks = [
    {
      title: 'Telegram',
      href: TELEGRAM_WEB_LINK,
      onClick: openTelegram,
      icon: TelegramIcon,
      iconClass: 'text-sky-500'
    },
    {
      title: 'WhatsApp',
      href: WHATSAPP_LINK,
      icon: WhatsAppIcon,
      iconClass: 'text-green-600',
      external: true
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/proactivity_lyceum_online?igsh=Mzl6OThhNXZrZ2Qw&utm_source=qr',
      icon: InstagramIcon,
      iconClass: 'text-pink-600',
      external: true
    },
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/share/1R52ehxNmx/?mibextid=wwXIfr',
      icon: FacebookIcon,
      iconClass: 'text-blue-600',
      external: true
    },
    {
      title: 'TikTok',
      href: 'https://www.tiktok.com/@lyceum_proactivity_ua?_t=ZM-8xnrOP4y0Pt&_r=1',
      icon: null,
      iconClass: 'text-gray-900',
      external: true,
      isTikTok: true
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50"></div>
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Зв’язок з ліцеєм
          </span>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Зв’яжіться з нами
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Заповніть форму або оберіть зручний спосіб зв’язку — ми допоможемо підібрати
            формат навчання та відповімо на всі ваші запитання.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="rounded-[30px] bg-white p-8 shadow-xl shadow-emerald-50 ring-1 ring-slate-200">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Оберіть зручний спосіб зв’язку
                  </h3>
                  <p className="mt-2 text-slate-600 leading-7">
                    Швидко відповідаємо, консультуємо та допомагаємо з вибором навчальної траєкторії.
                  </p>
                </div>
                <div className="hidden rounded-2xl bg-emerald-50 p-3 sm:block">
                  <Clock3 className="h-6 w-6 text-emerald-700" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickContacts.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${item.cardClass} p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                    >
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                        <Icon className={`h-5 w-5 ${item.iconClass}`} />
                      </div>
                      <div className="text-sm font-medium text-slate-500">{item.title}</div>
                      <div className="mt-1 break-words text-base font-semibold text-slate-900">
                        {item.value}
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="mb-2 text-sm font-semibold text-emerald-700">
                  Що можна уточнити під час консультації
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-600">
                  <li>• Формат та особливості дистанційного навчання</li>
                  <li>• Підбір програми для конкретного класу</li>
                  <li>• Організацію освітнього процесу та комунікацію з батьками</li>
                  <li>• Умови вступу та наступні кроки</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[30px] bg-slate-900 p-8 text-white shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Месенджери та соцмережі</h3>
                <p className="mt-2 text-slate-300 leading-7">
                  Можете написати нам там, де вам найзручніше.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={item.onClick}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                          {item.isTikTok ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 448 512"
                              className={`h-5 w-5 ${item.iconClass}`}
                            >
                              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                            </svg>
                          ) : (
                            Icon && <Icon className={`h-5 w-5 ${item.iconClass}`} />
                          )}
                        </div>
                        <span className="font-medium text-white">{item.title}</span>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE / FORM */}
          <div className="rounded-[34px] bg-white p-8 shadow-2xl shadow-emerald-100 ring-1 ring-slate-200 sm:p-10">
            <div className="mb-8">
              <div className="mb-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600"></div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Подати заявку
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Заповніть коротку форму — і ми зв’яжемося з вами найближчим часом.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-12 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <h4 className="mb-2 text-2xl font-bold text-slate-900">
                  Дякуємо за звернення!
                </h4>
                <p className="mx-auto max-w-md text-slate-600 leading-7">
                  Заявку надіслано успішно. Ми зв’яжемося з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Ім’я батька / матері
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      placeholder="Введіть ім’я"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Ім’я дитини
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      placeholder="Введіть ім’я"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+38..."
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Клас
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  >
                    <option value="">Оберіть клас</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade} клас
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Інтереси дитини
                  </label>
                  <input
                    type="text"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    placeholder="Наприклад: математика, дизайн, англійська, спорт"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Додаткова інформація
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Напишіть ваші запитання або побажання щодо навчання"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-5 w-5" />
                  {isSending ? 'Надсилаємо...' : 'Відправити заявку'}
                </button>

                <p className="text-sm leading-6 text-slate-500">
                  Натискаючи кнопку, ви надсилаєте заявку на консультацію.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
