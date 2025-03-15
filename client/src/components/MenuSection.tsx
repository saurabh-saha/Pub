import { useState } from 'react';
import { menuData } from '../lib/data';

type TabType = 'cocktails' | 'wine' | 'food';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cocktails');

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Explore our seasonal selection of craft cocktails and culinary delights, carefully curated to provide an exceptional experience.
          </p>
        </div>
        
        {/* Menu Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className={`menu-tab px-6 py-3 text-sm font-medium rounded-l-lg focus:z-10 focus:outline-none ${activeTab === 'cocktails' ? 'active' : ''}`}
              onClick={() => setActiveTab('cocktails')}
            >
              Cocktails
            </button>
            <button 
              type="button" 
              className={`menu-tab px-6 py-3 text-sm font-medium focus:z-10 focus:outline-none ${activeTab === 'wine' ? 'active' : ''}`}
              onClick={() => setActiveTab('wine')}
            >
              Wine & Beer
            </button>
            <button 
              type="button" 
              className={`menu-tab px-6 py-3 text-sm font-medium rounded-r-lg focus:z-10 focus:outline-none ${activeTab === 'food' ? 'active' : ''}`}
              onClick={() => setActiveTab('food')}
            >
              Food
            </button>
          </div>
        </div>
        
        {/* Cocktails Tab Content */}
        <div className={`menu-content ${activeTab === 'cocktails' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData.cocktails.map((cocktail, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cocktail.name}</h3>
                    <p className="text-neutral-medium mb-3">{cocktail.ingredients}</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">${cocktail.price}</span>
                </div>
                <div className="flex items-center mt-4">
                  {cocktail.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`${tag.color === 'primary' ? 'bg-gray-100 text-primary border border-primary' : 
                                  tag.color === 'secondary' ? 'bg-gray-100 text-secondary border border-secondary' : 
                                  'bg-gray-100 text-gray-800 border border-gray-400'} 
                                  text-xs px-3 py-1 rounded-full ${tagIndex > 0 ? 'ml-2' : ''}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wine & Beer Tab Content */}
        <div className={`menu-content ${activeTab === 'wine' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wine Section */}
            <div className="col-span-1 md:col-span-2 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Wine Selection</h3>
            </div>
            
            {menuData.wines.map((wine, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{wine.name}</h4>
                    <p className="text-neutral-medium mb-1">{wine.origin}</p>
                    <p className="text-sm text-neutral-medium mb-3">{wine.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-primary block">${wine.glassPrice}</span>
                    <span className="text-sm text-neutral-medium">Glass</span>
                    <span className="text-lg font-semibold text-primary block mt-1">${wine.bottlePrice}</span>
                    <span className="text-sm text-neutral-medium">Bottle</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Beer Section */}
            <div className="col-span-1 md:col-span-2 mt-8 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Craft Beer</h3>
            </div>
            
            {menuData.beers.map((beer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{beer.name}</h4>
                    <p className="text-neutral-medium mb-1">{beer.brewery}</p>
                    <p className="text-sm text-neutral-medium mb-3">{beer.abv}% ABV - {beer.description}</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">${beer.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Food Tab Content */}
        <div className={`menu-content ${activeTab === 'food' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Small Plates */}
            <div className="col-span-1 md:col-span-2 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Small Plates</h3>
            </div>
            
            {menuData.smallPlates.map((plate, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{plate.name}</h4>
                    <p className="text-neutral-medium mb-3">{plate.description}</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">${plate.price}</span>
                </div>
                {plate.tags && (
                  <div className="flex items-center mt-4">
                    {plate.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`${tag.color === 'primary' ? 'bg-gray-100 text-primary border border-primary' : 
                                    tag.color === 'secondary' ? 'bg-gray-100 text-secondary border border-secondary' : 
                                    'bg-gray-100 text-gray-800 border border-gray-400'} 
                                    text-xs px-3 py-1 rounded-full ${tagIndex > 0 ? 'ml-2' : ''}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Entrees */}
            <div className="col-span-1 md:col-span-2 mt-8 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Entrees</h3>
            </div>
            
            {menuData.entrees.map((entree, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{entree.name}</h4>
                    <p className="text-neutral-medium mb-3">{entree.description}</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">${entree.price}</span>
                </div>
                {entree.tags && (
                  <div className="flex items-center mt-4">
                    {entree.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`${tag.color === 'primary' ? 'bg-gray-100 text-primary border border-primary' : 
                                    tag.color === 'secondary' ? 'bg-gray-100 text-secondary border border-secondary' : 
                                    'bg-gray-100 text-gray-800 border border-gray-400'} 
                                    text-xs px-3 py-1 rounded-full ${tagIndex > 0 ? 'ml-2' : ''}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
