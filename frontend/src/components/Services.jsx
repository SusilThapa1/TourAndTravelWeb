import {
  FaPlane,
  FaMapMarkerAlt,
  FaUsers,
  FaCamera,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaPlane,
      title: "Flight Booking",
      description:
        "Best deals on flights worldwide with flexible booking options and 24/7 support.",
      color: "text-blue-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Guided Tours",
      description:
        "Expert local guides who bring destinations to life with insider knowledge and stories.",
      color: "text-green-500",
    },
    {
      icon: FaUsers,
      title: "Group Travel",
      description:
        "Customized group packages for families, friends, and corporate travel needs.",
      color: "text-purple-500",
    },
    {
      icon: FaCamera,
      title: "Photography Tours",
      description:
        "Capture stunning moments with professional photography guides and workshops.",
      color: "text-orange-500",
    },
    {
      icon: FaShieldAlt,
      title: "Travel Insurance",
      description:
        "Comprehensive travel protection to ensure peace of mind during your adventures.",
      color: "text-red-500",
    },
    {
      icon: FaHeadphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you before, during, and after your trip.",
      color: "text-indigo-500",
    },
  ];

  return (
    <section id="services" className="scroll-mt-20 py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Our{" "}
            <span className=" bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive travel solutions to make your journey
            seamless and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border-2 border-gray-200 bg-gray-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-muted/20 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <service.icon
                    className={`h-8 w-8 ${service.color} group-hover:text-primary transition-colors`}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
