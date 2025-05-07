import React, { useState } from 'react';
import MenuForm from '../components/MenuForm';
import { NavLink } from 'react-router-dom';

const AddMenu = () => {
  const [menus, setMenus] = useState([]);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold">Menu Management</h1>
              <p className="text-gray-600 mt-2">Add new menus to your catering offerings</p>
            </div>
            <NavLink 
              to="/menu" 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md font-medium transition-all duration-300 hover:bg-gray-200 active:scale-95"
            >
              View All Menus
            </NavLink>
          </div>

          <MenuForm onAddMenu={handleAddMenu} />

          {menus.length > 0 && (
            <div className="mt-12 animate-fade-in">
              <h2 className="text-2xl font-serif font-bold mb-6">Recently Added Menus</h2>
              <div className="space-y-4">
                {menus.map((menu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <div className="text-sm text-gray-500">ID: {menu.id}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
