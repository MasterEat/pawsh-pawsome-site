import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Papadopoulos",
      rating: 5,
      review: "Absolutely amazing service! My golden retriever looks fantastic after every visit. The staff is so gentle and caring with the pets.",
      date: "2 weeks ago"
    },
    {
      name: "Dimitris Kostas",
      rating: 5,
      review: "Best pet grooming salon in Athens! My cat was so relaxed during the session. Professional service and reasonable prices.",
      date: "1 month ago"
    },
    {
      name: "Elena Vasiliou",
      rating: 5,
      review: "My poodle has never looked better! The stylists really know what they're doing. Highly recommend Pawsh to all pet owners.",
      date: "3 weeks ago"
    },
    {
      name: "Yiannis Michalopoulos",
      rating: 5,
      review: "Excellent service and very professional team. They took great care of my nervous rescue dog. Will definitely be back!",
      date: "1 week ago"
    },
    {
      name: "Sofia Andreou",
      rating: 5,
      review: "Clean facility, friendly staff, and amazing results! My Persian cat looks like a supermodel after their grooming session.",
      date: "2 months ago"
    },
    {
      name: "Kostas Petridis",
      rating: 5,
      review: "Great experience! The booking process was easy and my dog seemed very comfortable throughout the grooming process.",
      date: "3 days ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-16 bg-pawsh-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pawsh-teal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-pawsh-teal/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied pet parents
          </p>
          
          {/* Overall Rating */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-pawsh-teal">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-muted-foreground">Based on 150+ reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-background border-pawsh-teal/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-pawsh-teal">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-background p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1QzIyLjU2IDExLjQ3IDIyLjQ5IDEwLjcyIDIyLjM2IDEwSDE1VjE0LjI2SDEwLjc4QzEwLjM2IDE1LjYgOS40NiAxNi43NCA4LjA5IDE3LjQzVjIwLjY5SDEzLjI1QzE5LjI3IDE1LjI0IDIyLjU2IDEzLjI5IDIyLjU2IDEyLjI1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNOC4wOSAxNy40M0M2LjUxIDE2LjU3IDUuNzIgMTQuNzMgNS43MiAxMi4yNUM1LjcyIDExLjQyIDUuODcgMTAuNjMgNi4xNyA5LjkySDMuNjFDMi4zMyAxMS44IDIuMzMgMTguNDUgNi4xNyAyMC4yM0w4LjA5IDE3LjQzWiIgZmlsbD0iI0VBNDMzNSIvPgo8cGF0aCBkPSJNMTIgNi4yNEMxMy45OCA2LjI0IDE1LjY5IDYuOTMgMTYuNzYgNy45M0wxOS41NCA1LjE1QzE3LjQ2IDMuMjQgMTQuOTQgMi4yNSAxMiAyLjI1QzguMDggMi4yNSA0Ljc4IDQuNDcgMy4zNiA3LjhMNi4xNyA5LjkyQzYuODggNy40MyA5LjI1IDYuMjQgMTIgNi4yNFoiIGZpbGw9IiNGQkJDMDUiLz4KPC9zdmc+" 
                alt="Google" 
                className="w-6 h-6"
              />
              <span className="font-semibold text-pawsh-teal">Google Reviews</span>
            </div>
            <div className="text-2xl font-bold text-pawsh-teal">4.9/5</div>
            <a 
              href="#" 
              className="text-sm text-pawsh-teal hover:text-pawsh-teal-light underline"
            >
              Read all reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;