import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative md:min-h-screen flex items-center justify-center scroll-mt-20 py-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-pink-500/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="  mx-auto ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl w-full font-bold text-white mb-6 font-playfair">
            Discover Amazing {""}
            <span className="text-accent">Adventures</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-center">
            Explore the world's most beautiful destinations with our expertly
            crafted tours and unforgettable experiences.
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Check-in */}
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="date"
                  className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Check-out */}
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="date"
                  className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Guests */}
              <div className="relative">
                <FaUserFriends className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <select className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full mt-6 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-gray-200 md:text-lg font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center justify-center">
              <FaSearch className="mr-2  " />
              Search Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
