import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HoursAndLocationSection from '../components/HoursAndLocationSection';
import MenuSection from '../components/MenuSection';
import EventsSection from '../components/EventsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ReservationSection from '../components/ReservationSection';
import Footer from '../components/Footer';

const Home = () => {
  // Smooth scrolling implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HoursAndLocationSection />
        <MenuSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
