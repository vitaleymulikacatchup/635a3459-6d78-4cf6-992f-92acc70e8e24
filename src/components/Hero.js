import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Starbucks Coffee Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Starbucks<span className="text-green-300">®</span> at Home
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Насолоджуйтесь улюбленою кавою Starbucks вдома з нашою колекцією преміальних продуктів
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200">
            Дослідити продукти
          </button>
          <button className="btn-secondary px-8 py-3 rounded-full font-semibold text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-starbucks-green">
            Дізнатися більше
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;