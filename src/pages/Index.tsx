import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import Map from "@/components/Map";
import BottomCTA from "@/components/BottomCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <FAQ />
      <Reviews />
      <Map />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Index;
