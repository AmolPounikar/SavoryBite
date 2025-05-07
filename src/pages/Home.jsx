import React from "react";
import { NavLink } from "react-router-dom";
import birthday from "../assets/image/Birthday Parties Image.jpg";
import engagement from "../assets/image/Engagement Ceremonies.jpeg";
import wedding from "../assets/image/wedding ceremony Image.jpg";
import corporateevent from "../assets/image/corporate party.jpg";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Exceptional Catering for Your Special Occasions
            </h1>
            <p className="text-xl text-white mb-8">
              Delicious food, professional service, and unforgettable
              experiences. We bring culinary excellence to your events.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/menu"
                className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
              >
                Explore Our Menus
              </NavLink>
              <NavLink
                to="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Our Catering Services
            </h2>
            <p className="text-black ">
              From intimate gatherings to grand celebrations, we offer a range
              of catering services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Wedding Catering */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-black-500 hover:bg-gray-300 transition-all duration-700 ease-in-out">
              <img
                src={wedding}
                alt="Wedding Catering"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                Wedding Catering
              </h3>
              <p className="text-black  mb-4">
                Make your special day unforgettable with our premium wedding
                catering services.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-amber-500 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            {/* Engagement Ceremonies */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-black-500 hover:bg-gray-300 transition-all duration-700 ease-in-out">
              <img
                src={engagement}
                alt="Engagement Ceremonies"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-indigo-600 transition-all">
                Engagement Ceremonies
              </h3>
              <p className="text-black mb-4">
                Start your journey to marriage with a beautifully catered
                engagement ceremony.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-amber-500 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            {/* Birthday Parties */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-black-500 hover:bg-gray-300 transition-all duration-700 ease-in-out">
              <img
                src={birthday}
                alt="Birthday Parties"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                Birthday Parties
              </h3>
              <p className="text-black-600 mb-4">
                Celebrate your birthday with delicious food and exceptional
                service.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-amber-500 font-medium"
              >
                Learn More →
              </NavLink>
            </div>

            {/* Corporate Events */}
            <div
              className="bg-white p-6 rounded-3xl border-2 border-black-500
 shadow-md hover:shadow-xl hover:bg-gray-300 transition-all duration-700 ease-in-out"
            >
              <img
                src={corporateevent}
                alt="Corporate Events"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Corporate Events
              </h3>
              <p className="text-black mb-4">
                Impress your clients and colleagues with professional catering
                for corporate events.
              </p>
              <NavLink
                to="/services"
                className="text-blue-600 hover:text-amber-500 font-medium"
              >
                Learn More →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Let us help you create an unforgettable experience with our
            exceptional catering services.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-6 py-3 bg-white text-amber-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
