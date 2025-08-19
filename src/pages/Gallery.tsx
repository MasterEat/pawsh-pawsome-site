import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Import all gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GalleryPage = () => {
  // Create 30 images by repeating the available ones
  const allImages = Array.from({ length: 30 }, (_, index) => {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    return {
      src: images[index % images.length],
      alt: `Gallery image ${index + 1}`,
      title: `Beautiful Pet Grooming ${index + 1}`
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-pawsh-teal mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the amazing transformations we create for pets of all shapes and sizes. 
              Each photo tells a story of care, professionalism, and the joy of a beautifully groomed pet.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-pawsh-cream/30 rounded-xl">
              <div className="text-3xl font-bold text-pawsh-teal mb-2">500+</div>
              <div className="text-muted-foreground">Happy Pets Groomed</div>
            </div>
            <div className="text-center p-6 bg-pawsh-cream/30 rounded-xl">
              <div className="text-3xl font-bold text-pawsh-teal mb-2">50+</div>
              <div className="text-muted-foreground">Different Breeds</div>
            </div>
            <div className="text-center p-6 bg-pawsh-cream/30 rounded-xl">
              <div className="text-3xl font-bold text-pawsh-teal mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-pawsh-cream/30 rounded-xl">
              <div className="text-3xl font-bold text-pawsh-teal mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>

          {/* Gallery Grid - 3 photos per row, 10 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pawsh-teal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-pawsh-cream font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-pawsh-cream/90 text-sm">
                      Professional grooming services
                    </p>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-pawsh-cream/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pawsh-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-pawsh-teal/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-pawsh-teal mb-4">
              Ready to Create Your Pet's Next Beautiful Look?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book an appointment today and let our professional team transform your pet 
              into the star they deserve to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+302101234567"
                className="inline-flex items-center justify-center px-8 py-3 bg-pawsh-teal text-pawsh-cream rounded-lg hover:bg-pawsh-teal-light transition-colors duration-300 font-semibold"
              >
                📞 Call Now: +30 210 123 4567
              </a>
              <a 
                href="mailto:info@pawshpetsalon.gr"
                className="inline-flex items-center justify-center px-8 py-3 border border-pawsh-teal text-pawsh-teal rounded-lg hover:bg-pawsh-teal hover:text-pawsh-cream transition-colors duration-300 font-semibold"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;