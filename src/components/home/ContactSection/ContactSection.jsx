
import './ContactSection.css';

import {useState} from 'react';

import {CheckCircle, MapPin, Mail, Phone, Send, InstagramIcon, FacebookIcon} from 'lucide-react';

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

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHg-V3Q_Byc8W4quxy_VlreUen-SszaZ3h1vt6WVhWZq5W4g/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.1005394950", formData.parentName);
    formBody.append("entry.139863884", formData.studentName);
    formBody.append("entry.874705588", formData.phone);
    formBody.append("entry.123218155", formData.email);
    formBody.append("entry.1184347914", formData.grade);
    formBody.append("entry.881893326", formData.interests);
    formBody.append("entry.778340436", formData.message);

    try {
        await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
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
        console.error("Помилка надсилання:", error);
    }
    };



    return (
        <section id="contact" className="py-20 bg-gradient-to-r from-emerald-200 to-cyan-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Зв'яжіться з нами</h3>
                <p className="text-lg text-gray-600">Заповніть форму, і ми зв'яжемося з вами найближчим часом</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                {isSubmitted ? (
                    <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Дякуємо за звернення!</h4>
                    <p className="text-gray-600">Ми зв'яжемося з вами найближчим часом</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я батька/матері</label>
                        <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я дитини</label>
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Клас (орієнтовно)</label>
                        <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                        <option value="">Оберіть клас</option>
                        <option value="1">1 клас</option>
                        <option value="2">2 клас</option>
                        <option value="3">3 клас</option>
                        <option value="4">4 клас</option>
                        <option value="5">5 клас</option>
                        <option value="6">6 клас</option>
                        <option value="7">7 клас</option>
                        <option value="8">8 клас</option>
                        <option value="9">9 клас</option>
                        <option value="10">10 клас</option>
                        <option value="11">11 клас</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Інтереси дитини</label>
                        <input
                        type="text"
                        name="interests"
                        value={formData.interests}
                        onChange={handleInputChange}
                        placeholder="Наприклад: математика, мистецтво, спорт..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Додаткова інформація</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Розкажіть більше про ваші очікування та питання..."
                        ></textarea>
                    </div>
                    
                    <div
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Відправити заявку
                    </div>
                    </div>
                )}
                </div>
                
                {/* Contact Info */}
                <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Контактна інформація</h4>
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+38 (098) 023-03-30</span>
                    </div>
                    <div className="flex items-center">
                        <InstagramIcon className="w-5 h-5 text-pink-600 mr-3" />
                        <a href="https://www.instagram.com/proactivity_lyceum?igsh=Mzl6OThhNXZrZ2Qw&utm_source=qr"><span className="font-normal text-gray-700">Instagram</span></a>
                    </div>
                    <div className="flex items-center">
                        <FacebookIcon className="w-5 h-5 text-blue-600 mr-3" />
                        <a href="https://www.facebook.com/share/1R52ehxNmx/?mibextid=wwXIfr"><span className="font-normal text-gray-700">Facebook</span></a>
                    </div>
                    <div className="flex items-center">
                        <span class="[&>svg]:h-5 [&>svg]:w-5 mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                            </svg>
                        </span>
                        <a href="https://www.tiktok.com/@lyceum_proactivity_ua?_t=ZM-8xnrOP4y0Pt&_r=1"><span className="font-normal text-gray-700">TikTok</span></a>
                    </div>
                    </div>
                </div>
{/*                 
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Режим роботи</h4>
                    <div className="space-y-2 text-gray-700">
                    <p><strong>Понеділок - П'ятниця:</strong> 8:00 - 18:00</p>
                    <p><strong>Субота:</strong> 9:00 - 15:00</p>
                    <p><strong>Неділя:</strong> Вихідний</p>
                    </div>
                </div> */}
                
                {/* <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 rounded-xl text-white">
                    <h4 className="text-xl font-semibold mb-2">Запрошуємо на екскурсію!</h4>
                    <p className="mb-4">Відвідайте наш ліцей, познайомтеся з педагогами та атмосферою навчання</p>
                    <p className="text-blue-100">Екскурсії проводяться щосуботи о 10:00</p>
                </div> */}
                </div>
            </div>
            </div>
        </section>
  );
}

export default ContactSection;