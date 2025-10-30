import React, { useState } from 'react';
import { Clock, Users, Star } from 'lucide-react';

const CoffeeRecipes = () => {
  const [activeTab, setActiveTab] = useState('Кава');
  
  const tabs = ['Кава', 'Рецепти'];
  
  const coffeeTypes = [
    {
      id: 1,
      name: 'Еспресо',
      description: 'Класичний італійський еспресо з насиченим смаком',
      time: '2 хв',
      difficulty: 'Легко',
      image: '/images/espresso.jpg',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Американо',
      description: 'Еспресо з гарячою водою для м\'якшого смаку',
      time: '3 хв',
      difficulty: 'Легко',
      image: '/images/americano.jpg',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Капучино',
      description: 'Еспресо з пишною молочною піною',
      time: '5 хв',
      difficulty: 'Середньо',
      image: '/images/cappuccino.jpg',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Лате',
      description: 'Еспресо з великою кількістю парового молока',
      time: '4 хв',
      difficulty: 'Середньо',
      image: '/images/latte.jpg',
      rating: 4.6
    }
  ];

  const recipes = [
    {
      id: 1,
      name: 'Ванільний Лате',
      description: 'Кремовий лате з ароматом ванілі',
      time: '6 хв',
      servings: 1,
      image: '/images/vanilla-latte.jpg',
      ingredients: ['2 шоти еспресо', '200мл молока', '1 ч.л. ванільного сиропу'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Карамельний Макіато',
      description: 'Солодкий напій з карамельним смаком',
      time: '7 хв',
      servings: 1,
      image: '/images/caramel-macchiato.jpg',
      ingredients: ['2 шоти еспресо', '180мл молока', '2 ч.л. карамельного сиропу'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Мокко',
      description: 'Поєднання кави та шоколаду',
      time: '5 хв',
      servings: 1,
      image: '/images/mocha.jpg',
      ingredients: ['2 шоти еспресо', '150мл молока', '2 ч.л. шоколадного сиропу'],
      rating: 4.7
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-starbucks-dark-green mb-4">
            Кава та рецепти
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Дізнайтеся, як приготувати улюблені напої Starbucks у себе вдома
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-starbucks-green text-white shadow-md'
                    : 'text-gray-600 hover:text-starbucks-green'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'Кава' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coffeeTypes.map((coffee) => (
              <div key={coffee.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {coffee.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{coffee.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {coffee.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {coffee.time}
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {coffee.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {recipe.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{recipe.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} порція
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Інгредієнти:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full mt-4 bg-starbucks-green text-white py-2 rounded-full hover:bg-starbucks-dark-green transition-colors duration-200">
                    Переглянути рецепт
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeRecipes;