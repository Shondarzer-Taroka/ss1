










// import { FaSearch } from 'react-icons/fa';

// const FirstAboveNav = () => {
//   return (
//     <nav className="bg-[#00459b] py-2 px-4 flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         <img
//           src="/logo.png"
//           alt="Uttara University Logo"
//           className="h-16"
//         />
//         <span className="text-white text-xl font-bold">
//           Uttara <br /> University
//         </span>
//       </div>
//       <div className="flex-1 max-w-xl relative">
//         <input
//           type="text"
//           placeholder="Search ..."
//           className="w-full bg-[#001a4d] text-white rounded-full py-2 px-4 outline-none"
//         />
//         <button className="absolute right-2 top-2 text-yellow-400">
//           <FaSearch />
//         </button>
//       </div>
//       <div className="hidden md:flex space-x-4 text-white text-sm font-semibold">
//         <a href="#" className="hover:underline">Tuition Fee Calculator</a>
//         <a href="#" className="hover:underline">Online Admission</a>
//         <a href="#" className="hover:underline">Result</a>
//         <a href="#" className="hover:underline">Contact</a>
//         <a href="#" className="hover:underline">Library</a>
//         <a href="#" className="hover:underline">UU Bus Service</a>
//         <a href="#" className="hover:underline">Online Payment</a>
//       </div>
//       <button className="bg-white text-[#00459b] px-4 py-2 rounded-lg text-sm font-semibold ml-4">
//         -&gt; MYUU ERP
//       </button>
//     </nav>
//   );
// };

// export default FirstAboveNav;






'use client'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const FirstAboveNav = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  return (
    <nav className="bg-[#00459b] py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="Uttara University Logo"
          className="h-16"
        />
        <span className="text-white text-xl font-bold">
          Uttara <br /> University
        </span>
      </div>
      <div className="hidden md:flex space-x-4 text-white text-sm font-semibold">
        <a href="#" className="hover:underline">Tuition Fee Calculator</a>
        <a href="#" className="hover:underline">Online Admission</a>
        <a href="#" className="hover:underline">Result</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Library</a>
        <a href="#" className="hover:underline">UU Bus Service</a>
        <a href="#" className="hover:underline">Online Payment</a>
        <button
          className="text-yellow-400 hover:underline"
          onClick={handleSearchClick}
        >
          <FaSearch />
        </button>
      </div>
      <button className="bg-white text-[#00459b] px-4 py-2 rounded-lg text-sm font-semibold ml-4">
        -&gt; MYUU ERP
      </button>

      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-start z-50" onClick={closeSearch}>
          <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full bg-gray-100 text-black rounded-lg py-3 px-4 outline-none mb-4"
            />
            <button className="bg-[#00459b] text-white px-6 py-2 rounded-lg" onClick={closeSearch}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FirstAboveNav;
