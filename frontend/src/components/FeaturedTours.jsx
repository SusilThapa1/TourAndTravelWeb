import { FaStar, FaClock, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    title: "Swiss Alps Adventure",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,299",
    originalPrice: "$1,599",
    rating: 4.8,
    reviews: 124,
    duration: "7 Days",
    groupSize: "12 People",
    location: "Switzerland",
    featured: true,
  },
  {
    id: 2,
    title: "Tropical Paradise Escape",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$899",
    originalPrice: "$1,199",
    rating: 4.9,
    reviews: 89,
    duration: "5 Days",
    groupSize: "8 People",
    location: "Maldives",
    featured: false,
  },
  {
    id: 3,
    title: "Mountain Explorer",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$756",
    originalPrice: "$950",
    rating: 4.7,
    reviews: 156,
    duration: "4 Days",
    groupSize: "15 People",
    location: "Nepal",
    featured: false,
  },
  {
    id: 4,
    title: "Desert Safari Adventure",
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,156",
    originalPrice: "$1,450",
    rating: 4.6,
    reviews: 203,
    duration: "6 Days",
    groupSize: "10 People",
    location: "Morocco",
    featured: true,
  },
  {
    id: 5,
    title: "Northern Lights Quest",
    image:
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2,199",
    originalPrice: "$2,799",
    rating: 4.9,
    reviews: 67,
    duration: "8 Days",
    groupSize: "6 People",
    location: "Iceland",
    featured: false,
  },
  {
    id: 6,
    title: "Cultural Heritage Tour",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,856",
    originalPrice: "$2,320",
    rating: 4.8,
    reviews: 145,
    duration: "10 Days",
    groupSize: "20 People",
    location: "Italy",
    featured: true,
  },
];

const FeaturedTours = () => {
  return (
    <section id="tours" className=" scroll-mt-20 py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Tours
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Discover our most popular destinations and create memories that will
            last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                {tour.featured && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-pink-500  text-white px-3 py-1 text-sm font-semibold rounded-xl">
                    Featured
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <div className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
                    <FaStar className="h-4 w-4" />
                    {tour.rating}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 hover:bg-gradient-to-r from-yellow-400 to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors">
                  {tour.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  {tour.location}
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-pink-400">
                      {tour.price}
                    </span>
                    <span className="ml-2 text-sm line-through text-gray-400">
                      {tour.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    ({tour.reviews} reviews)
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-2 px-4 rounded hover:opacity-90 transition-opacity cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gradient-to-r from-yellow-400 to-pink-500 hover:border-transparent hover:text-white transition-all duration-300 cursor-pointer">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
