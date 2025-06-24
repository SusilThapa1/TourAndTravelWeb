import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar:
        "https://images.unsplash.com/photo-1747734786792-317d1d8e8690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      rating: 5,
      text: "TourWebsite made our Swiss Alps adventure absolutely magical! The attention to detail and personalized service exceeded all our expectations. We'll definitely be booking our next trip with them.",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The Northern Lights tour in Iceland was a once-in-a-lifetime experience. Our guide was incredibly knowledgeable and the accommodations were perfect. Highly recommend TourWebsite!",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "From booking to the final day of our Morocco desert safari, everything was seamless. The small group size made it feel very personal and special. Thank you TourWebsite for an amazing trip!",
    },
  ];

  return (
    <section id="testimonials" className="scroll-mt-20 py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our happy
            travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative animate-scale-in bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-4 right-4 text-gray-200">
                <FaQuoteLeft size={48} />
              </div>

              <div className="flex mb-4 space-x-1">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 relative z-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
