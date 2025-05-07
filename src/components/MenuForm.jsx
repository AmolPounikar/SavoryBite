import React, { useState } from "react";

const MenuForm = ({ onAddMenu }) => {
  const [menuData, setMenuData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    menu: {
      "starter-platter": {
        items: ["", "", ""],
        image: "",
      },
      "starter-drinks": {
        items: ["", "", ""],
        image: "",
      },
      "main-course": {
        categories: {
          sabji: {
            title: "Sabji (Vegetable Dishes)",
            items: ["", "", ""],
          },
          rice: {
            title: "Rice Varieties",
            items: ["", "", ""],
          },
          roti: {
            title: "Breads",
            items: ["", "", ""],
          },
          dal: {
            title: "Dal Varieties",
            items: ["", "", ""],
          },
        },
        image: "",
      },
      "dessert-bar": {
        items: ["", "", ""],
        image: "",
      },
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested properties
    if (name.includes(".")) {
      const parts = name.split(".");
      setMenuData((prevData) => {
        const newData = { ...prevData };
        let current = newData;

        // Navigate to the nested property
        for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i];
          if (part.includes("[")) {
            // Handle array properties
            const [arrayName, indexStr] = part.split("[");
            const index = parseInt(indexStr.replace("]", ""));
            if (!current[arrayName]) current[arrayName] = [];
            if (!current[arrayName][index]) current[arrayName][index] = {};
            current = current[arrayName][index];
          } else {
            if (!current[part]) current[part] = {};
            current = current[part];
          }
        }

        // Set the value
        current[parts[parts.length - 1]] = value;
        return newData;
      });
    } else {
      // Handle top-level properties
      setMenuData({ ...menuData, [name]: value });
    }
  };

  const handleArrayItemChange = (category, index, value) => {
    setMenuData((prevData) => {
      const newData = { ...prevData };
      newData.menu[category].items[index] = value;
      return newData;
    });
  };

  const handleMainCourseItemChange = (category, index, value) => {
    setMenuData((prevData) => {
      const newData = { ...prevData };
      newData.menu["main-course"].categories[category].items[index] = value;
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!menuData.id || !menuData.title || !menuData.description) {
      setMessage({
        type: "error",
        text: "Please fill out all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage({
        type: "success",
        text: "Menu has been successfully added!",
      });

      if (onAddMenu) {
        onAddMenu(menuData);
      }

      // Reset form after successful submission
      setMenuData({
        id: "",
        title: "",
        description: "",
        image: "",
        menu: {
          "starter-platter": {
            items: ["", "", ""],
            image: "",
          },
          "starter-drinks": {
            items: ["", "", ""],
            image: "",
          },
          "main-course": {
            categories: {
              sabji: {
                title: "Sabji (Vegetable Dishes)",
                items: ["", "", ""],
              },
              rice: {
                title: "Rice Varieties",
                items: ["", "", ""],
              },
              roti: {
                title: "Breads",
                items: ["", "", ""],
              },
              dal: {
                title: "Dal Varieties",
                items: ["", "", ""],
              },
            },
            image: "",
          },
          "dessert-bar": {
            items: ["", "", ""],
            image: "",
          },
        },
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm animate-fade-in">
      <h2 className="text-2xl font-serif font-bold mb-6">Add New Menu</h2>

      {message.text && (
        <div
          className={`p-4 mb-6 rounded-md ${
            message.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-2">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Menu ID <span className="text-red-500">*</span>
              </label>
              <input
                id="id"
                name="id"
                type="text"
                required
                value={menuData.id}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., wedding, birthday"
              />
              <p className="mt-1 text-xs text-gray-500">
                A unique identifier for this menu (no spaces)
              </p>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Menu Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={menuData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., Wedding Menu"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              required
              value={menuData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Brief description of this menu"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Menu Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              value={menuData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="URL for the menu image"
            />
          </div>
        </div>

        {/* Starter Platter */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-2">Starter Platter</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Starter Items
            </label>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`starter-${index}`}
                  type="text"
                  value={menuData.menu["starter-platter"].items[index] || ""}
                  onChange={(e) =>
                    handleArrayItemChange(
                      "starter-platter",
                      index,
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Starter item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="starter-image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Starter Image URL
            </label>
            <input
              id="starter-image"
              name="menu.starter-platter.image"
              type="text"
              value={menuData.menu["starter-platter"].image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="URL for starter image"
            />
          </div>
        </div>

        {/* Starter Drinks */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-2">Beverages</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Drink Items
            </label>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`drink-${index}`}
                  type="text"
                  value={menuData.menu["starter-drinks"].items[index] || ""}
                  onChange={(e) =>
                    handleArrayItemChange(
                      "starter-drinks",
                      index,
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Drink item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="drinks-image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Drinks Image URL
            </label>
            <input
              id="drinks-image"
              name="menu.starter-drinks.image"
              type="text"
              value={menuData.menu["starter-drinks"].image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="URL for drinks image"
            />
          </div>
        </div>

        {/* Main Course */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium border-b pb-2">Main Course</h3>

          {/* Sabji */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Sabji (Vegetable Dishes)</h4>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`sabji-${index}`}
                  type="text"
                  value={
                    menuData.menu["main-course"].categories.sabji.items[
                      index
                    ] || ""
                  }
                  onChange={(e) =>
                    handleMainCourseItemChange("sabji", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Sabji item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Rice */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Rice Varieties</h4>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`rice-${index}`}
                  type="text"
                  value={
                    menuData.menu["main-course"].categories.rice.items[index] ||
                    ""
                  }
                  onChange={(e) =>
                    handleMainCourseItemChange("rice", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Rice item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Breads */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Breads</h4>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`roti-${index}`}
                  type="text"
                  value={
                    menuData.menu["main-course"].categories.roti.items[index] ||
                    ""
                  }
                  onChange={(e) =>
                    handleMainCourseItemChange("roti", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Bread item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Dal */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Dal Varieties</h4>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`dal-${index}`}
                  type="text"
                  value={
                    menuData.menu["main-course"].categories.dal.items[index] ||
                    ""
                  }
                  onChange={(e) =>
                    handleMainCourseItemChange("dal", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Dal item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="main-course-image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Main Course Image URL
            </label>
            <input
              id="main-course-image"
              name="menu.main-course.image"
              type="text"
              value={menuData.menu["main-course"].image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="URL for main course image"
            />
          </div>
        </div>

        {/* Dessert Bar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-2">
            Dessert Selection
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dessert Items
            </label>
            <div className="space-y-2">
              {[0, 1, 2].map((index) => (
                <input
                  key={`dessert-${index}`}
                  type="text"
                  value={menuData.menu["dessert-bar"].items[index] || ""}
                  onChange={(e) =>
                    handleArrayItemChange("dessert-bar", index, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={`Dessert item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="dessert-image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dessert Image URL
            </label>
            <input
              id="dessert-image"
              name="menu.dessert-bar.image"
              type="text"
              value={menuData.menu["dessert-bar"].image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="URL for dessert image"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-black text-white rounded-md font-medium transition-all duration-300 hover:bg-gray-800 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Add Menu"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
