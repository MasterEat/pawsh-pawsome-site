import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Maria Alexandrou",
      role: "Master Groomer & Owner",
      experience: "8+ years",
      specialties: "Breed-specific cuts, Show grooming",
      description: "Passionate about pet care with international grooming certifications."
    },
    {
      name: "Dimitris Kostas",
      role: "Senior Pet Stylist",
      experience: "5+ years",
      specialties: "Creative styling, Nail care",
      description: "Expert in handling anxious pets with gentle, caring approach."
    },
    {
      name: "Elena Papadaki",
      role: "Pet Care Specialist",
      experience: "3+ years",
      specialties: "Cat grooming, Spa treatments",
      description: "Specialized in feline care and luxury spa services for pets."
    }
  ];

  const values = [
    {
      icon: "💝",
      title: "Pet-First Approach",
      description: "Every decision we make prioritizes your pet's comfort, safety, and well-being above all else."
    },
    {
      icon: "🌟",
      title: "Excellence in Service",
      description: "We continuously train and update our techniques to provide the highest quality grooming services."
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "Building lasting relationships with pet owners through honest communication and reliable service."
    },
    {
      icon: "🌱",
      title: "Sustainable Practices",
      description: "Using eco-friendly products and sustainable practices to protect our environment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-pawsh-teal mb-6">
              About Pawsh
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              More than just a grooming salon - we're a dedicated team of pet lovers 
              committed to making your furry friends look and feel their absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pawsh-teal mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2021 by master groomer Maria Alexandrou, Pawsh Pet Beauty Salon 
                  was born from a simple belief: every pet deserves to be treated like royalty. 
                  What started as a small neighborhood grooming service has grown into Athens' 
                  most trusted pet beauty destination.
                </p>
                <p>
                  Our journey began when Maria noticed a gap in the market for truly professional, 
                  stress-free pet grooming services. With over 8 years of international experience 
                  and certifications from leading grooming academies, she set out to create a space 
                  where pets could feel comfortable and pampered.
                </p>
                <p>
                  Today, we're proud to have groomed over 500 happy pets, earning the trust of 
                  pet parents throughout Athens and beyond. Our commitment to excellence, 
                  combined with our genuine love for animals, has made Pawsh a name synonymous 
                  with quality pet care.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-pawsh-cream/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-pawsh-teal mb-4">Why Choose Pawsh?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-pawsh-teal rounded-full flex items-center justify-center text-pawsh-cream text-sm">✓</span>
                    <span>Certified professional groomers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-pawsh-teal rounded-full flex items-center justify-center text-pawsh-cream text-sm">✓</span>
                    <span>Premium, pet-safe products only</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-pawsh-teal rounded-full flex items-center justify-center text-pawsh-cream text-sm">✓</span>
                    <span>Stress-free, calming environment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-pawsh-teal rounded-full flex items-center justify-center text-pawsh-cream text-sm">✓</span>
                    <span>Personalized care for each pet</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-pawsh-teal rounded-full flex items-center justify-center text-pawsh-cream text-sm">✓</span>
                    <span>Flexible scheduling and competitive pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-pawsh-cream-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pawsh-teal mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Pawsh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-background border-pawsh-teal/20">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-pawsh-teal mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pawsh-teal mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals who treat every pet like family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-background border-pawsh-teal/20">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-pawsh-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <h3 className="text-xl font-semibold text-pawsh-teal">{member.name}</h3>
                      <p className="text-pawsh-teal/70 font-medium">{member.role}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-pawsh-teal">Experience: </span>
                        <span className="text-muted-foreground">{member.experience}</span>
                      </div>
                      <div>
                        <span className="font-medium text-pawsh-teal">Specialties: </span>
                        <span className="text-muted-foreground">{member.specialties}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-pawsh-teal">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-pawsh-cream mb-6">
              Ready to Experience the Pawsh Difference?
            </h2>
            <p className="text-xl text-pawsh-cream/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied pet parents who trust us with their beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+302101234567"
                className="inline-flex items-center justify-center px-8 py-3 bg-pawsh-cream text-pawsh-teal rounded-lg hover:bg-pawsh-cream-light transition-colors duration-300 font-semibold"
              >
                📞 Call Now: +30 210 123 4567
              </a>
              <a 
                href="mailto:info@pawshpetsalon.gr"
                className="inline-flex items-center justify-center px-8 py-3 border border-pawsh-cream text-pawsh-cream rounded-lg hover:bg-pawsh-cream hover:text-pawsh-teal transition-colors duration-300 font-semibold"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;