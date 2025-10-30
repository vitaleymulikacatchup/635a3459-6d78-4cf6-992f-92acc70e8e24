import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  const handleAcceptAll = () => {
    // Handle accept all cookies
    onClose();
  };

  const handleAcceptSelected = () => {
    // Handle accept selected cookies
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      <div className="modal-content max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Starbucks Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/starbucks-logo.png" 
            alt="Starbucks" 
            className="h-12 w-12"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Налаштування файлів cookie
          </h2>
          
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Ми використовуємо файли cookie для покращення вашого досвіду на нашому веб-сайті. 
            Деякі з них є необхідними для функціонування сайту, інші допомагають нам зрозуміти, 
            як ви використовуєте наш сайт, щоб ми могли покращити його.
          </p>

          {/* Cookie Categories */}
          <div className="text-left mb-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Необхідні файли cookie</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Завжди активні</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Аналітичні файли cookie</span>
              <input 
                type="checkbox" 
                defaultChecked 
                className="w-4 h-4 text-starbucks-green border-gray-300 rounded focus:ring-starbucks-green"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Маркетингові файли cookie</span>
              <input 
                type="checkbox" 
                defaultChecked 
                className="w-4 h-4 text-starbucks-green border-gray-300 rounded focus:ring-starbucks-green"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleAcceptAll}
              className="w-full bg-starbucks-green text-white py-3 rounded-full font-medium hover:bg-starbucks-dark-green transition-colors duration-200"
            >
              Прийняти всі файли cookie
            </button>
            
            <button
              onClick={handleAcceptSelected}
              className="w-full bg-white text-starbucks-green border-2 border-starbucks-green py-3 rounded-full font-medium hover:bg-starbucks-green hover:text-white transition-colors duration-200"
            >
              Прийняти вибрані файли cookie
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-starbucks-green transition-colors duration-200">
              Дізнатися більше про файли cookie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;