import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Full Grooming Package",
      description: "Complete grooming service including bath, cut, nail trim, and styling",
      icon: "✂️",
      price: "From €45"
    },
    {
      title: "Bath & Brush",
      description: "Relaxing bath with premium shampoos and thorough brushing",
      icon: "🛁",
      price: "From €25"
    },
    {
      title: "Nail Care",
      description: "Professional nail trimming and paw care for your pet's comfort",
      icon: "💅",
      price: "From €15"
    },
    {
      title: "Teeth Cleaning",
      description: "Gentle dental care to keep your pet's teeth healthy and clean",
      icon: "🦷",
      price: "From €20"
    },
    {
      title: "Flea Treatment",
      description: "Safe and effective flea and tick prevention and treatment",
      icon: "🛡️",
      price: "From €30"
    },
    {
      title: "Premium Spa Package",
      description: "Luxury spa experience with aromatherapy and relaxation treatments",
      icon: "🌸",
      price: "From €65"
    }
  ];

  return (
    <section className="py-16 bg-pawsh-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pawsh-teal mb-4">
            Our Services
          </h2>
          <p className="text-xl text-pawsh-teal/70 max-w-2xl mx-auto">
            Professional grooming services tailored to your pet's individual needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-pawsh-teal/20 bg-background">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-pawsh-teal group-hover:text-pawsh-teal-light transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-pawsh-teal">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-pawsh-teal/70 mb-4">
            All services include a complimentary consultation and aftercare advice
          </p>
          <div className="inline-flex items-center space-x-2 bg-pawsh-teal/10 px-6 py-3 rounded-full">
            <span className="text-pawsh-teal font-medium">✓ Professional Products</span>
            <span className="text-pawsh-teal/50">•</span>
            <span className="text-pawsh-teal font-medium">✓ Stress-Free Environment</span>
            <span className="text-pawsh-teal/50">•</span>
            <span className="text-pawsh-teal font-medium">✓ Experienced Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;