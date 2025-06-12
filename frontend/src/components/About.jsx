import { FaUsers, FaAward, FaGlobe, FaHeart } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const About = () => {
  const stats = [
    {
      icon: <FaUsers className="text-green-600 text-3xl" />,
      number: "50K+",
      label: "Happy Travelers",
    },
    {
      icon: <FaGlobe className="text-blue-600 text-3xl" />,
      number: "150+",
      label: "Destinations",
    },
    {
      icon: <FaAward className="text-yellow-400 text-3xl" />,
      number: "25+",
      label: "Awards Won",
    },
    {
      icon: <FaHeart className="text-red-600 text-3xl" />,
      number: "15",
      label: "Years Experience",
    },
  ];

  const features = [
    "Expert local guides in every destination",
    "Small group sizes for intimate experiences",
    "24/7 customer support during your trip",
    "Sustainable and responsible tourism",
    "Best price guarantee on all tours",
    "Flexible booking and cancellation",
  ];

  return (
    <section id="about" className="scroll-mt-20 py-10  ">
      <div className="container mx-auto px-4">
        <div className="flex  flex-col lg:flex-row  gap-5  ">
          {/* Text Section */}
          <div className="flex flex-col  gap-10 ">
            <h2 className="text-4xl md:text-5xl font-bold   mb-6  font-playfair">
              About{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent ">
                TourWebsite
              </span>
            </h2>
            <div className=" text-justify  ">
              <p className="text-lg text-muted-foreground mb-8">
                For over 15 years, TourWebsite has been crafting extraordinary
                travel experiences that connect adventurers with the world's
                most incredible destinations. We believe that travel has the
                power to transform lives, create lasting memories, and build
                bridges between cultures.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaRegCircleCheck className="text-green-700 w-5 h-5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground">
                Our passionate team of travel experts works tirelessly to ensure
                every journey with us exceeds your expectations. From the moment
                you start planning to the day you return home, we're here to
                make your travel dreams come true.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            {/* Image  */}
            <div className="relative">
              <img
                src="https://w0.peakpx.com/wallpaper/740/955/HD-wallpaper-tour-across-world-attractions-culture-travel-visit.jpg"
                alt="About TourWebsite"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0   rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center p-6 bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 gap-3 transform hover:-translate-y-2"
                >
                  <div className="text-center">{stat.icon}</div>
                  <div className="text-2xl font-semibold    ">
                    {stat.number}
                  </div>
                  <div className="text-sm  ">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
