import React from "react";
import { NavLink } from "react-router-dom";
import birthday from "../assets/image/Birthday Parties Image.jpg";
import engagement from "../assets/image/Engagement Ceremonies.jpeg";
import wedding from "../assets/image/wedding ceremony Image.jpg";
import corporateevent from "../assets/image/corporate party.jpg";

const Services = () => {
  const services = [
    {
      id: "wedding",
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our premium wedding catering services. From elegant cocktail hours to luxurious multi-course dinners, we create culinary experiences that match the importance of your celebration.",
      image: [wedding],
      features: [
        "Customized menus tailored to your preferences",
        "Professional staff and service",
        "Beautiful food presentation",
        "Full setup and cleanup",
        "Menu tasting sessions",
        "Special dietary accommodations",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description:
        "Impress your clients and colleagues with professional catering for corporate events. Whether it's a business lunch, conference, or company celebration, we deliver exceptional food and service that reflect your company's standards.",
      image: [corporateevent],
      features: [
        "Flexible scheduling for business hours",
        "Breakfast, lunch, and dinner options",
        "Boardroom and meeting catering",
        "Professional staff in formal attire",
        "Corporate branding opportunities",
        "Boxed meal options",
      ],
    },
    {
      id: "birthday",
      title: "Birthday Parties",
      description:
        "Celebrate your birthday with delicious food and exceptional service. From intimate dinners to large parties, we create a festive atmosphere with food that matches the occasion.",
      image: [birthday],
      features: [
        "Custom birthday cakes and desserts",
        "Theme-based food options",
        "Kid-friendly menus available",
        "Fun food stations and displays",
        "Flexible setup options",
        "Coordination with other party elements",
      ],
    },
    {
      id: "engagement",
      title: "Engagement Ceremonies",
      description:
        "Start your journey to marriage with a beautifully catered engagement ceremony. We create elegant food presentations that add to the romance and significance of this special occasion.",
      image: [engagement],
      features: [
        "Elegant presentation setups",
        "Cultural menu options",
        "Champagne and toast service",
        "Dessert and sweet tables",
        "Coordination with venue",
        "Special touches for the engaged couple",
      ],
    },
  ];

  return (
    <div className="pt-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Catering Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Exceptional catering for all your special occasions
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <h3 className="text-lg font-medium mb-4">What We Provide:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-4">
                    <NavLink
                      to="/menu"
                      className="px-5 py-2 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
                    >
                      View Menus
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      Request Quote
                    </NavLink>
                  </div>
                </div>

                <div
                  className={`aspect-4/3 relative ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Catering */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Custom Catering Solutions
            </h2>
            <p className="text-gray-600">
              Don't see exactly what you're looking for? We specialize in
              creating custom catering solutions tailored to your specific event
              needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  We Can Accommodate:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Dietary restrictions and preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Cultural and religious requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Unique venue challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Special theme requirements
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Special Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Live cooking stations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Interactive food displays
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Chef's table experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Beverage and bar services
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <NavLink
                to="/contact"
                className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
              >
                Discuss Your Custom Needs
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from those who have experienced our catering services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Priyanka & Rahul</h3>
                  <p className="text-sm text-gray-500">Wedding Catering</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SavoryBite Journey made our wedding day perfect. The food was
                exceptional, the presentation was beautiful, and the service was
                flawless. Our guests are still talking about the food months
                later!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Axis Technologies</h3>
                  <p className="text-sm text-gray-500">Corporate Event</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We've used SavoryBite Journey for several corporate events, and
                they consistently deliver excellence. Their professionalism,
                attention to detail, and delicious food make them our go-to
                caterer."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Rohit Sharma</h3>
                  <p className="text-sm text-gray-500">
                    50th Birthday Celebration
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SavoryBite Journey turned my 50th birthday into an
                extraordinary celebration. The food was innovative and
                delicious, and their staff was attentive and friendly. I
                couldn't have asked for more!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white -mb-20">
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
            Get a Quote
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Services;
