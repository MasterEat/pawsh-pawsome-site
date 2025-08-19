import { Button } from "@/components/ui/button";

const BottomCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pawsh-teal to-pawsh-teal-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-pawsh-cream/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-pawsh-cream mb-6">
            Ready to Pamper Your Pet?
          </h2>
          
          <p className="text-xl text-pawsh-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Give your furry friend the luxury treatment they deserve. 
            Book your appointment today and see the Pawsh difference!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="w-full sm:w-auto bg-pawsh-cream text-pawsh-teal hover:bg-pawsh-cream-light hover:scale-105">
              Book Now - Call +30 210 123 4567
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto border-pawsh-cream text-pawsh-cream hover:bg-pawsh-cream hover:text-pawsh-teal"
            >
              View Our Gallery
            </Button>
          </div>

          {/* Special Offer */}
          <div className="mt-8 p-4 bg-pawsh-cream/20 rounded-xl">
            <p className="text-pawsh-cream font-semibold mb-2">
              🎉 New Customer Special
            </p>
            <p className="text-pawsh-cream/90 text-sm">
              Get 20% off your first full grooming package - mention this offer when booking!
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-pawsh-cream/80">
            <div className="flex items-center space-x-2">
              <span className="text-xl">⭐</span>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🛡️</span>
              <span className="text-sm">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🏆</span>
              <span className="text-sm">3+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">💝</span>
              <span className="text-sm">500+ Happy Pets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-pawsh-cream/10 rounded-full animate-bounce"></div>
      <div className="absolute top-10 right-10 w-12 h-12 bg-pawsh-cream/10 rounded-full animate-bounce delay-1000"></div>
    </section>
  );
};

export default BottomCTA;