import React, { useEffect, useState } from 'react';
import about from "../assets/img_girl.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Side = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get('http://localhost:8800/app/categories/');
      setCats(res.data);
    };
    fetchCats();
  }, []);

  return (
    <div className="flex flex-col items-center w-80 bg-gray-50 p-4 rounded-lg shadow-lg h-auto">
      {/* ABOUT Section */}
      <div className="flex flex-col items-center border-t-2 border-gray-300 w-full py-4">
        <h1 className="text-lg font-semibold text-gray-700 mb-2">ABOUT</h1>
        <img className="w-full h-48 object-cover rounded-md border mb-3" src={about} alt="About" />
        <p className="text-gray-600 text-sm text-center px-4 border-b-2 border-gray-300 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum necessitatibus, animi quia! Aliquam illum aut saepe?
        </p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col items-center w-full text-center mt-6">
        <h1 className="text-lg font-semibold text-gray-700 mb-3">CATEGORIES</h1>
        <ul className="grid grid-cols-2 gap-3 text-gray-600 border-t-2 border-gray-300 pt-3 w-full">
          {cats.map((c) => (
            <Link key={c.name} to={`/?cat=${c.name}`}>
              <li className="cursor-pointer hover:text-gray-900 transition-colors">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 text-gray-600 border-t-2 border-gray-300 pt-4 mt-6 w-full justify-center">
        <i className="fa-brands fa-facebook text-xl cursor-pointer hover:text-blue-600 transition-colors"></i>
        <i className="fa-brands fa-square-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
        <i className="fa-brands fa-pinterest text-xl cursor-pointer hover:text-red-600 transition-colors"></i>
        <i className="fa-brands fa-twitter text-xl cursor-pointer hover:text-blue-400 transition-colors"></i>
      </div>
    </div>
  );
};

export default Side;
