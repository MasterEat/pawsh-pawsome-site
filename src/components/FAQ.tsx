import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I groom my pet?",
      answer: "The frequency depends on your pet's breed, coat type, and lifestyle. Generally, most dogs need grooming every 4-8 weeks, while cats may need it less frequently. We'll provide personalized recommendations during your consultation."
    },
    {
      question: "What should I bring for my pet's appointment?",
      answer: "Just bring your pet! We provide all necessary grooming supplies, towels, and equipment. If your pet has any special medical needs or takes medications, please inform us beforehand."
    },
    {
      question: "How long does a typical grooming session take?",
      answer: "A full grooming session typically takes 2-4 hours depending on your pet's size, coat condition, and the services requested. We'll give you an estimated time when you book your appointment."
    },
    {
      question: "Do you handle anxious or aggressive pets?",
      answer: "Yes, we have experience with pets of all temperaments. Our team uses gentle, stress-reducing techniques and can accommodate nervous pets. We may recommend shorter sessions or sedation (with vet approval) for extremely anxious animals."
    },
    {
      question: "What age can puppies start getting groomed?",
      answer: "Puppies can start with basic grooming (bath, nail trim, face cleaning) as early as 12-16 weeks after their second vaccination. Full grooming can begin once they're comfortable with basic handling."
    },
    {
      question: "Do you offer mobile grooming services?",
      answer: "Currently, we operate from our salon location to ensure we have access to all professional equipment and facilities. However, we're considering mobile services for the future - stay tuned!"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, and bank transfers. Payment is due at the time of service unless other arrangements have been made in advance."
    },
    {
      question: "Can I stay with my pet during grooming?",
      answer: "While we understand your concern, we generally recommend that owners leave during grooming. Pets often behave better without their owners present, allowing our team to work more efficiently and safely."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pawsh-teal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our grooming services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-pawsh-teal/20 rounded-lg px-6 bg-pawsh-cream/30 hover:bg-pawsh-cream/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-pawsh-teal hover:text-pawsh-teal-light font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <div className="bg-pawsh-teal/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-pawsh-teal mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Don't hesitate to contact us for more information about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-pawsh-teal">
              <span>📞 +30 210 123 4567</span>
              <span className="hidden sm:inline">•</span>
              <span>✉️ info@pawshpetsalon.gr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;