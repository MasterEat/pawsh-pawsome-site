const Map = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pawsh-teal mb-4">
            Visit Our Salon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find us easily with our convenient location in the heart of Athens
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-pawsh-cream/30 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-pawsh-teal mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pawsh-teal rounded-full flex items-center justify-center">
                      <span className="text-pawsh-cream text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-pawsh-teal">Address</p>
                      <p className="text-muted-foreground">123 Pet Street, Athens, Greece</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pawsh-teal rounded-full flex items-center justify-center">
                      <span className="text-pawsh-cream text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-pawsh-teal">Phone</p>
                      <p className="text-muted-foreground">+30 210 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pawsh-teal rounded-full flex items-center justify-center">
                      <span className="text-pawsh-cream text-sm">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-pawsh-teal">Email</p>
                      <p className="text-muted-foreground">info@pawshpetsalon.gr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pawsh-teal mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-pawsh-teal">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-pawsh-teal">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-pawsh-teal">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-pawsh-teal/10 rounded-lg">
                  <p className="text-sm text-pawsh-teal font-medium mb-2">
                    📋 Appointment Required
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please call or book online to ensure availability
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-pawsh-teal/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.6302463792335!2d23.74369627610793!3d38.00908417192722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a355629c21af%3A0x57119ad1da08688a!2sPawsh!5e0!3m2!1sel!2sgr!4v1755643615531!5m2!1sel!2sgr"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Free parking available • Easy public transport access • Wheelchair accessible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;