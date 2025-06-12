import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Tours", href: "#tours" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const destinations = [
    "Switzerland",
    "Iceland",
    "Morocco",
    "Nepal",
    "Italy",
    "Maldives",
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com",
      label: "Facebook",
      color: "bg-blue-500",
    },
    {
      icon: FaTwitter,
      href: "https://www.twitter.com",
      label: "Twitter",
      color: "bg-gray-500",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com",
      label: "Instagram",
      color: "bg-pink-500",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com",
      label: "YouTube",
      color: "bg-red-500",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4 font-serif">
              TourWebsite
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating unforgettable travel experiences for over 15 years. Let
              us help you discover the world's most amazing destinations.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <span>info@tourwebbsite.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between   ">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-white/80 text-sm flex flex-col justify-center items-center">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Popular Destinations
              </h3>
              <ul className="space-y-3 text-white/80 text-sm flex flex-col justify-center items-center">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
              Stay Connected
            </h3>
            <p className="text-white/80 mb-4 text-sm text-center">
              Subscribe to our newsletter for the latest travel deals and
              inspiration.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white text-black placeholder:text-gray-500 focus:outline-none"
              />
              <button className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6 w-full items-center justify-center gap-5">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center   transition-colors hover:${color}`}
                  aria-label={label}
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© 2024 TourWebsite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
