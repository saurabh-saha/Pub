import { Link } from 'wouter';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-cover bg-center pt-16" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')`
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-secondary">Craft</span> & <span className="text-white">Cork</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-heading italic">
          Artisanal Cocktails & Culinary Delights
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a 
            href="#menu" 
            className="bg-secondary text-white px-8 py-3 rounded accent-font tracking-wide text-xl hover:bg-opacity-90 transition duration-300 shadow-lg border border-gray-800"
          >
            EXPLORE MENU
          </a>
          <a 
            href="#reservation" 
            className="border-2 border-white text-white px-8 py-3 rounded accent-font tracking-wide text-xl hover:bg-white hover:text-primary transition duration-300 shadow-lg"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
