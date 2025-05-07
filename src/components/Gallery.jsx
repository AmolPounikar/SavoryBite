import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Image data with categories
import {
  Image,
  ChevronLeft,
  ChevronRight,
  X,
  Utensils,
  LayoutGrid,
  Armchair,
} from "lucide-react";
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Elegant table setting with floral centerpieces",
    category: "decoration",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Gourmet appetizer platter",
    category: "food",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Wedding reception hall layout",
    category: "layout",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Gourmet main course presentation",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1508261301926-eee0beb0bb48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor event setup with string lights",
    category: "decoration",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Corporate conference room layout",
    category: "layout",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Luxurious lounge seating area",
    category: "amenities",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Dessert display with multiple options",
    category: "food",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Custom bar setup with signature cocktails",
    category: "amenities",
  },
];

const Gallery = ({ className }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: 0,
  });

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const categories = ["all", "decoration", "food", "layout", "amenities"];

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage: (prev.currentImage + 1) % filteredImages.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage:
        (prev.currentImage - 1 + filteredImages.length) % filteredImages.length,
    }));
  };

  return (
    <div className={cn("container mx-auto px-4 py-12  mt-20", className)}>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Our Catering Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
          Explore our stunning event setups, delicious food presentations, and
          premium amenities.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-8 bg-gray-300 py-8 rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
              onClick={() => setLightbox({ isOpen: true, currentImage: index })}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{image.alt}</p>
                  <span className="text-amber-300 text-sm capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox.isOpen && filteredImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setLightbox({ isOpen: false, currentImage: 0 })}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-amber-500 transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={filteredImages[lightbox.currentImage].src}
            alt={filteredImages[lightbox.currentImage].alt}
            className="max-h-[80vh] max-w-full object-contain"
          />

          <button
            className="absolute right-4 text-white hover:text-amber-500 transition-colors"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">
              {filteredImages[lightbox.currentImage].alt}
            </p>
            <p className="text-amber-300 capitalize">
              {filteredImages[lightbox.currentImage].category}
            </p>
          </div>
        </div>
      )}
      <section className="container mx-auto py-16 px-4 bg-gray-300 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Catering Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Utensils size={24} />,
              title: "Gourmet Food",
              desc: "Exquisite culinary creations that delight all senses and satisfy every palate.",
            },
            {
              icon: <Image size={24} />,
              title: "Beautiful Decor",
              desc: "Stunning decorations that transform any venue into an unforgettable event space.",
            },
            {
              icon: <LayoutGrid size={24} />,
              title: "Perfect Layouts",
              desc: "Thoughtfully designed event layouts that maximize both function and aesthetics.",
            },
            {
              icon: <Armchair size={24} />,
              title: "Premium Amenities",
              desc: "Luxury amenities and special touches that enhance the guest experience.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center text-amber-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
