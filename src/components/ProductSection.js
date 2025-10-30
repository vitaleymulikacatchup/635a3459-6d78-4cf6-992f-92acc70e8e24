import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Pike Place Roast',
      description: 'Наша фірмова суміш з багатим, гладким смаком',
      price: '₴299',
      rating: 4.8,
      image: '/images/pike-place-roast.jpg',
      category: 'Мелена кава'
    },
    {
      id: 2,
      name: 'Veranda Blend',
      description: 'М\'яке обсмажування з ніжними нотками',
      price: '₴279',
      rating: 4.7,
      image: '/images/veranda-blend.jpg',
      category: 'Цільні зерна'
    },
    {
      id: 3,
      name: 'Breakfast Blend',
      description: 'Ідеальний початок дня з яскравим смаком',
      price: '₴289',
      rating: 4.9,
      image: '/images/breakfast-blend.jpg',
      category: 'K-Cup®'
    },
    {
      id: 4,
      name: 'French Roast',
      description: 'Інтенсивне темне обсмажування для справжніх поціновувачів',
      price: '₴319',
      rating: 4.6,
      image: '/images/french-roast.jpg',
      category: 'Мелена кава'
    }
  ];

  const categories = ['Всі', 'Мелена кава', 'Цільні зерна', 'K-Cup®'];
  const [selectedCategory, setSelectedCategory] = React.useState('Всі');

  const filteredProducts = selectedCategory === 'Всі' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-starbucks-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-starbucks-dark-green mb-4">
            Наші продукти
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Відкрийте для себе широкий асортимент кави Starbucks для приготування вдома
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-starbucks-green text-white'
                  : 'bg-white text-starbucks-green border border-starbucks-green hover:bg-starbucks-green hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-starbucks-green font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-starbucks-green">
                    {product.price}
                  </span>
                  <button className="flex items-center space-x-2 bg-starbucks-green text-white px-4 py-2 rounded-full hover:bg-starbucks-dark-green transition-colors duration-200">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-sm font-medium">Купити</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3 rounded-full font-semibold text-lg">
            Переглянути всі продукти
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;