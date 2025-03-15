import { MapPin } from 'lucide-react';

const HoursAndLocationSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hours & Location</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold accent-font tracking-wider text-secondary mb-4">OPENING HOURS</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>4:00 PM - 12:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span>4:00 PM - 2:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>2:00 PM - 2:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>2:00 PM - 10:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold accent-font tracking-wider text-secondary mb-4">ADDRESS</h3>
              <p className="mb-2">123 Cocktail Lane</p>
              <p className="mb-2">Downtown District</p>
              <p>New York, NY 10001</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold accent-font tracking-wider text-secondary mb-4">CONTACT</h3>
              <p className="mb-2">Email: info@craftandcork.com</p>
              <p>Phone: (212) 555-1234</p>
            </div>
          </div>
          
          <div className="md:w-1/2 h-64 md:h-auto">
            <div className="bg-gray-300 h-full rounded-lg overflow-hidden relative">
              {/* Map placeholder - in real implementation, this would be a real map */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-10 w-10 mx-auto mb-2" />
                  <p className="text-sm">Map integration would be here<br/>123 Cocktail Lane, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursAndLocationSection;
