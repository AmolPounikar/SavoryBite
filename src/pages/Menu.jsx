import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import engagement from "../data/events/engagement.js";
import corporateevent from "../data/events/corporate.js";
import birthday from "../data/events/birthday.js";
import wedding from "../data/events/wedding.js";

const events = [engagement, wedding, birthday, corporateevent];

const Menu = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("starter-platter"); // Default active tab

  const renderMenuSection = (sectionName, sectionData, title) => {
    if (!sectionData) return null;

    return (
      <div>
        <h3 className="text-xl font-medium mb-4 border-b pb-2">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionData.items?.map((item, index) => {
            const imageSource =
              item.image && item.image[0]
                ? item.image[0]
                : "https://placehold.co/100x100/000/fff?text=Item";

            return (
              <div key={index} className="flex items-start gap-4">
                {" "}
                {/* Changed to items-start */}
                <div className="relative h-24 w-24 flex-shrink-0">
                  {" "}
                  {/* Increased size, added flex-shrink */}
                  <img
                    src={imageSource}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-gray-700 font-medium block">
                    {item.name}
                  </span>{" "}
                  {/* Added block display */}
                </div>
              </div>
            );
          })}

          {sectionData.categories &&
            Object.entries(sectionData.categories).map(
              ([categoryKey, category]) => (
                <div key={categoryKey} className="w-full">
                  <h4 className="text-lg font-medium mb-2">{category.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {category.items.map((item, itemIndex) => {
                      const imageSource =
                        item.image && item.image[0]
                          ? item.image[0]
                          : "https://placehold.co/100x100/000/fff?text=Item";
                      return (
                        <div key={itemIndex} className="flex items-start gap-4">
                          {" "}
                          {/* Changed to items-start */}
                          <div className="relative h-24 w-24 flex-shrink-0">
                            {" "}
                            {/* Increased size, added flex-shrink */}
                            <img
                              src={imageSource}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-700 font-medium block">
                              {item.name}
                            </span>{" "}
                            {/* Added block display */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      <section className="relative py-20 md:py-24 -mb-20 ">
        {/* Optional: dark overlay for contrast */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content on top of background */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Catering Menus
            </h1>
            <p className="text-lg text-black font-bold mb-8">
              Explore our specially curated menus for various occasions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:bg-gray-300 border-2 border-black-500 transition-all duration-700 ease-in-out"
              >
                <div className="relative h-48">
                  <img
                    src={
                      event.image && event.image[0]
                        ? event.image[0]
                        : "https://placehold.co/600x400/000/fff?text=Image"
                    }
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold mb-2 text-indigo-600">
                    {event.title}
                  </h2>
                  <p className="text-black mb-4">{event.description}</p>
                  <button
                    onClick={() => setActiveEvent(event)}
                    className="text-blue-600 font-medium hover:text-amber-600 transition-colors"
                  >
                    View Menu Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
              onClick={() => setActiveEvent(null)}
            ></div>

            <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <button
                  onClick={() => setActiveEvent(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold mb-2">
                    {activeEvent.title}
                  </h2>
                  <p className="text-gray-600">{activeEvent.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex space-x-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("starter-platter")}
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "starter-platter"
                          ? "bg-amber-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Starter Platter
                    </button>
                    <button
                      onClick={() => setActiveTab("starter-drinks")}
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "starter-drinks"
                          ? "bg-amber-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Beverages
                    </button>
                    <button
                      onClick={() => setActiveTab("main-course")}
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "main-course"
                          ? "bg-amber-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Main Course
                    </button>
                    <button
                      onClick={() => setActiveTab("dessert-bar")}
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "dessert-bar"
                          ? "bg-amber-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Dessert Selection
                    </button>
                    {activeEvent.menu["sweets-dishes"] &&
                      typeof activeEvent.menu["sweets-dishes"] === "object" &&
                      activeEvent.menu["sweets-dishes"].items && (
                        <button
                          onClick={() => setActiveTab("sweets-dishes")}
                          className={`px-4 py-2 rounded-md ${
                            activeTab === "sweets-dishes"
                              ? "bg-amber-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          Sweets
                        </button>
                      )}
                  </div>
                </div>

                <div className="space-y-10">
                  {activeTab === "starter-platter" &&
                    renderMenuSection(
                      "starter-platter",
                      activeEvent.menu["starter-platter"],
                      "Starter Platter"
                    )}
                  {activeTab === "starter-drinks" &&
                    renderMenuSection(
                      "starter-drinks",
                      activeEvent.menu["starter-drinks"],
                      "Beverages"
                    )}
                  {activeTab === "main-course" &&
                    renderMenuSection(
                      "main-course",
                      activeEvent.menu["main-course"],
                      "Main Course"
                    )}
                  {activeTab === "dessert-bar" &&
                    renderMenuSection(
                      "dessert-bar",
                      activeEvent.menu["dessert-bar"],
                      "Dessert Selection"
                    )}
                  {activeTab === "sweets-dishes" &&
                    renderMenuSection(
                      "sweets-dishes",
                      activeEvent.menu["sweets-dishes"],
                      "Sweets"
                    )}
                </div>

                <div className="mt-8 text-center">
                  <NavLink
                    to="/contact"
                    className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
                    onClick={() => setActiveEvent(null)}
                  >
                    Request This Menu
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-cover bg-center bg-no-repeat inset-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-white/40 text-black px-6 py-2 inline-block rounded-lg backdrop-blur-sm">
              Need a Custom Menu?
            </h2>
            <p className="text-lg bg-white/50 text-black font-bold mb-8">
              We understand that every event is unique. Let us create a
              customized menu tailored to your specific preferences and
              requirements.
            </p>
            <div className="flex justify-center space-x-4">
              <NavLink
                to="/contact"
                className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
              >
                Contact for Custom Menu
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
