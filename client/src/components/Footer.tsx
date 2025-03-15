import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Send } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const subscriptionMutation = useMutation({
    mutationFn: (data: { email: string }) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You're now subscribed to our newsletter.",
      });
      setEmail('');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscriptionMutation.mutate({ email });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Craft & Cork</h3>
            <p className="text-gray-300 mb-4">A premium cocktail bar experience with artisanal drinks and inspired cuisine.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Star className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Monday - Thursday: 4:00 PM - 12:00 AM</li>
              <li>Friday: 4:00 PM - 2:00 AM</li>
              <li>Saturday: 2:00 PM - 2:00 AM</li>
              <li>Sunday: 2:00 PM - 10:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> 
                123 Cocktail Lane, NY 10001
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> 
                (212) 555-1234
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> 
                info@craftandcork.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates on events, new menu items, and special promotions.</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l text-neutral-dark focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-secondary text-white px-4 rounded-r hover:bg-opacity-90 transition duration-300"
                disabled={subscriptionMutation.isPending}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Craft & Cork. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
