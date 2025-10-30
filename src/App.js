import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import CoffeeRecipes from './components/CoffeeRecipes';
import Footer from './components/Footer';
import CookieModal from './components/CookieModal';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <CoffeeRecipes />
      <Footer />
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
    </div>
  );
}

export default App;