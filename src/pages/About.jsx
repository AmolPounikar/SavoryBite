import React from "react";
import { NavLink } from "react-router-dom";
import chif from "../assets/image/cooking chef image.jpg";
const About = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              About SavoryBite Journey
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Crafting memorable culinary experiences since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SavoryBite Journey began with a simple passion for food and a
                desire to create memorable dining experiences. Founded by Chef
                Rahul Sharma in 2010, we started as a small family-run catering
                service for local events.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown into a full-service catering
                company, serving weddings, corporate events, birthday parties,
                and other special occasions across the region. Throughout our
                journey, our commitment to quality, creativity, and exceptional
                service has remained unwavering.
              </p>
              <p className="text-gray-600">
                Today, with a team of experienced chefs, event planners, and
                service staff, we continue to delight our clients with
                innovative menus, beautiful presentations, and flawless
                execution.
              </p>
            </div>
            <div className="aspect-video relative">
              <img
                src={chif}
                alt="Chef preparing food"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do at SavoryBite Journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the freshest, highest-quality ingredients in all our
                dishes. We believe that exceptional food starts with exceptional
                ingredients.
              </p>
            </div>

            {/* Creativity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Creativity</h3>
              <p className="text-gray-600">
                We bring innovative ideas and creative presentations to every
                event, making each dining experience unique and memorable.
              </p>
            </div>

            {/* Service */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Service</h3>
              <p className="text-gray-600">
                We're committed to providing exceptional service from the first
                consultation to the final moments of your event. Your
                satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white -mb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Experience Our Catering?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Let us help you create a memorable event with our exceptional
            catering services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/contact"
              className="px-6 py-3 bg-white text-amber-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/menu"
              className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
            >
              View Our Menus
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
