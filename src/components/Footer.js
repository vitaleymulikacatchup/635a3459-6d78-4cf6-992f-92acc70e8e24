import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Про нас': [
      'Наша компанія',
      'Наша кава',
      'Історії та новини',
      'Інвестори',
      'Кар\'єра'
    ],
    'Обслуговування клієнтів': [
      'Зв\'язатися з нами',
      'Замовити онлайн',
      'Часті питання',
      'Доставка та повернення',
      'Підтримка'
    ],
    'Швидкі посилання': [
      'Знайти магазин',
      'Програма лояльності',
      'Подарункові картки',
      'Мобільний додаток',
      'Меню'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-starbucks-dark-green text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/starbucks-logo-white.png" 
                alt="Starbucks" 
                className="h-12 w-12 mr-3"
              />
              <span className="text-xl font-bold">Starbucks</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Насолоджуйтесь найкращою кавою Starbucks вдома з нашою колекцією преміальних продуктів та рецептів.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+380 (44) 123-45-67</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@starbucks.ua</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Київ, Україна</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and Newsletter */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <span className="text-sm text-gray-300 mr-4">Слідкуйте за нами:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-sm text-gray-300">Підпишіться на новини:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 bg-white/10 border border-gray-600 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <button className="bg-starbucks-green hover:bg-green-600 px-6 py-2 rounded-r-full transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Starbucks Corporation. Всі права захищені.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Політика конфіденційності
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Умови використання
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Файли cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;