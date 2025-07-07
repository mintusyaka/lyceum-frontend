import Header from '../components/home/Header/Header'
import About from '../components/home/About/About'
import HeroSection from '../components/home/HeroSection/HeroSection';
import KeyPrinciplesSection from '../components/home/KeyPrinciplesSection/KeyPrinciplesSection'
import ProgramsSection from '../components/home/ProgramsSection/ProgramsSection';
import PricesSection from '../components/home/PricesSection/PricesSection';
import ParentsSection from '../components/home/ParentsSection/ParentsSection';
import ContactSection from '../components/home/ContactSection/ContactSection';
import Footer from '../components/home/Footer/Footer';
import ReviewsSection from '../components/home/Reviews/Reviews';

function Home() {
  return (
    <div className="min-h-screen shadow-lg">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Key Principles */}
      {/* <KeyPrinciplesSection /> */}

      {/* Programs Section */}
      <ProgramsSection />

      {/* Prices Section */}
      {/* <PricesSection /> */}

      {/* Parents Info Section */}
      <ParentsSection />

      {/* <ReviewsSection /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;