import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pawsh-cream to-pawsh-cream-light py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pawsh-teal mb-6 leading-tight">
            Premium Pet Beauty
            <br />
            <span className="text-pawsh-teal-light">& Grooming Salon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pawsh-teal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your beloved pet with our professional grooming services. 
            We provide luxury care in a stress-free environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Book Appointment
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-pawsh-teal text-pawsh-teal hover:bg-pawsh-teal hover:text-pawsh-cream">
              View Services
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-32 h-32 border-4 border-pawsh-teal rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-center space-x-8 text-pawsh-teal/60">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">500+</div>
                <div className="text-sm md:text-base">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">3+</div>
                <div className="text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">100%</div>
                <div className="text-sm md:text-base">Pet Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pawsh-teal/5 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pawsh-teal/5 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pawsh-teal/5 rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default Hero;