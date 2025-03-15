import { galleryData } from '../lib/data';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Take a visual tour of our space, signature cocktails, and the Craft & Cork experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-48 md:h-64 object-cover gallery-img"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded accent-font tracking-wide text-xl hover:bg-secondary hover:text-white transition duration-300 shadow-lg"
          >
            VIEW FULL GALLERY
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
