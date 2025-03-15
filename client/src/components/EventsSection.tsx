import { eventsData } from '../lib/data';
import { Clock, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Promotions</h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Join us for special events, live music, and exclusive promotions throughout the week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-custom">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`bg-${event.accentColor} text-white text-center rounded px-3 py-1 mr-4`}>
                    <span className="block text-xs">{event.day}</span>
                    <span className="block text-lg font-bold">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <p className="text-neutral-medium mb-5">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-dark flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </span>
                  <a href={event.link} className="text-secondary hover:text-accent transition duration-300 flex items-center">
                    Details <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-secondary text-white px-8 py-3 rounded accent-font tracking-wide text-xl hover:bg-opacity-90 transition duration-300 shadow-lg"
          >
            VIEW ALL EVENTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
