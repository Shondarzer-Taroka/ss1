import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    'HOME',
    'ABOUT',
    'ACADEMIC',
    'DEPARTMENT',
    'ADMISSION',
    'ADMINISTRATION',
    'TEACHERS',
    'JOURNAL & PUBLICATION',
    'GALLERY',
    'ALUMNI',
    'CAREER',
    'CONVOCATION'
  ];

  return (
    <nav className="bg-white py-5 border-b border-gray-200">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex flex-wrap gap-6">
          {navItems.map((item, index) => (
            <li key={index} className="text-[#00459b] font-semibold text-[10px] cursor-pointer flex items-center gap-1">
              {item}
              {index !== 0 && <FaChevronDown size={10} />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
