import { FaCocktail, FaUtensils, FaMusic } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-neutral-dark mb-6 leading-relaxed">
              Founded in 2015, Craft & Cork began with a simple mission: to create a space where exceptional drinks meet inspired cuisine. Our passion for artisanal craftsmanship drives everything we do.
            </p>
            <p className="text-neutral-dark mb-6 leading-relaxed">
              Our bartenders are mixologists who blend classic techniques with innovative approaches. Each cocktail tells a story, using house-made infusions, fresh ingredients, and meticulously selected spirits.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <a 
                href="#contact" 
                className="text-secondary border-b-2 border-secondary hover:text-accent hover:border-accent transition duration-300 font-semibold flex items-center"
              >
                Contact Us <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Bartender mixing a cocktail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1498661367879-c2085689eed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Interior of the bar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1560434019-4558f9a9e2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Cocktail being prepared" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Bar atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-custom text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-gray-100">
              <FaCocktail className="text-white" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Craft Cocktails</h3>
            <p className="text-neutral-medium">Expertly crafted drinks using premium spirits, house-made ingredients, and innovative techniques.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-custom text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-gray-100">
              <FaUtensils className="text-white" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Inspired Cuisine</h3>
            <p className="text-neutral-medium">Seasonal small plates and entrees designed to complement our beverage program.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-custom text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-gray-100">
              <FaMusic className="text-white" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Vibrant Atmosphere</h3>
            <p className="text-neutral-medium">Enjoy curated music, special events, and a welcoming space for socializing and relaxation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
