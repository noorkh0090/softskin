import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCatalog from './components/CourseCatalog';
import CoursesCarousel from './components/CoursesCarousel';
import BeautyProducts from './components/BeautyProducts';
import StatsSection from './components/StatsSection';
import SuccessStories from './components/SuccessStories';
import ContactSection from './components/ContactSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseCatalog />
      <CoursesCarousel />
      <BeautyProducts />
      <StatsSection />
      <SuccessStories />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
