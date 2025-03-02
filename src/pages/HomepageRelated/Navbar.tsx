// import { FaChevronDown } from 'react-icons/fa';

// const Navbar = () => {
//   const navItems = [
//     'HOME',
//     'ABOUT',
//     'ACADEMIC',
//     'DEPARTMENT',
//     'ADMISSION',
//     'ADMINISTRATION',
//     'TEACHERS',
//     'JOURNAL & PUBLICATION',
//     'GALLERY',
//     'ALUMNI',
//     'CAREER',
//     'CONVOCATION'
//   ];

//   return (
//     <nav className="bg-white py-5 border-b border-gray-200">
//       <div className="container mx-auto flex justify-center items-center">
//         <ul className="flex flex-wrap gap-6">
//           {navItems.map((item, index) => (
//             <li key={index} className="text-[#00459b] font-semibold text-[10px] cursor-pointer flex items-center gap-1">
//               {item}
//               {index !== 0 && <FaChevronDown size={10} />}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// 'use client'
// import { FaChevronDown } from 'react-icons/fa';
// import { useState } from 'react';

// const Navbar = () => {
//   const navItems = [
//     { name: 'HOME', subItems: [] },
//     {
//       name: 'ABOUT',
//       subItems: [
//         'About UU',
//         'Mission & Vision & Motto',
//         'Overview, Features & Facilities',
//         'Our Unique Features',
//         'UU at a Glance',
//         'Accreditations, Memberships and Ranking',
//         'Explore Our Campus',
//         'Campus Life',
//         'UU Logo Resource & Socials',
//         'UU Bus Service',
//       ],
//     },
//     { name: 'ACADEMIC', subItems: [] },
//     { name: 'DEPARTMENT', subItems: [] },
//     { name: 'ADMISSION', subItems: [] },
//     { name: 'ADMINISTRATION', subItems: [] },
//     { name: 'TEACHERS', subItems: [] },
//     { name: 'JOURNAL & PUBLICATION', subItems: [] },
//     { name: 'GALLERY', subItems: [] },
//     { name: 'ALUMNI', subItems: [] },
//     { name: 'CAREER', subItems: [] },
//     { name: 'CONVOCATION', subItems: [] },
//   ];

//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleHover = (index) => {
//     setOpenDropdown(index);
//   };

//   const handleLeave = () => {
//     setOpenDropdown(null);
//   };

//   return (
//     <nav className="bg-white  border-b border-gray-200">
//       <div className="container mx-auto flex justify-center items-center">
//         <ul className="flex flex-wrap gap-6">
//           {navItems.map((item, index) => (
//             <li
//               key={index}
//               className=" py-5 relative text-[#00459b] font-semibold text-[12px] cursor-pointer flex items-center gap-1 hover:text-blue-800"
//               onMouseEnter={() => handleHover(index)}
//               onMouseLeave={handleLeave}
//             >
//               {item.name}
//               {item.subItems.length > 0 && <FaChevronDown size={10} />}

//               {openDropdown === index && item.subItems.length > 0 && (
//                 <ul className="absolute top-full -left-3 bg-[#002E6E] text-white w-60 py-2 shadow-lg z-10">
//                   {item.subItems.map((subItem, subIndex) => (
//                     <li key={subIndex} className="px-4 py-2 hover:bg-blue-900 text-[12px]">
//                       {subItem}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// 'use client';
// import { useState } from 'react';
// import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
// import { FaChevronDown } from 'react-icons/fa';

// const Navbar = () => {
//   const navItems = [
//     { name: 'HOME', subItems: [] },
//     {
//       name: 'ABOUT',
//       subItems: [
//         'About UU',
//         'Mission & Vision & Motto',
//         'Overview, Features & Facilities',
//         'Our Unique Features',
//         'UU at a Glance',
//         'Accreditations, Memberships and Ranking',
//         'Explore Our Campus',
//         'Campus Life',
//         'UU Logo Resource & Socials',
//         'UU Bus Service',
//       ],
//     },
//     { name: 'ACADEMIC', subItems: [] },
//     { name: 'DEPARTMENT', subItems: [] },
//     { name: 'ADMISSION', subItems: [] },
//     { name: 'ADMINISTRATION', subItems: [] },
//     { name: 'TEACHERS', subItems: [] },
//     { name: 'JOURNAL & PUBLICATION', subItems: [] },
//     { name: 'GALLERY', subItems: [] },
//     { name: 'ALUMNI', subItems: [] },
//     { name: 'CAREER', subItems: [] },
//     { name: 'CONVOCATION', subItems: [] },
//   ];

//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleMouseEnter = (event, index) => {
//     setAnchorEl(event.currentTarget);
//     setOpenDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//     setOpenDropdown(null);
//   };

//   return (
//     <AppBar position="static" color="default">
//       <Toolbar className="justify-center" onMouseLeave={handleMouseLeave}>
//         {navItems.map((item, index) => (
//           <div key={index} className="relative" onMouseEnter={(e) => item.subItems.length > 0 && handleMouseEnter(e, index)}>
//             <Button
//               endIcon={item.subItems.length > 0 && <FaChevronDown size={10} />}
//               className="text-[#00459b] font-semibold text-[12px] hover:text-blue-800"
//             >
//               {item.name}
//             </Button>
//             {item.subItems.length > 0 && (
//               <Menu
//                 anchorEl={anchorEl}
//                 open={openDropdown === index}
//                 onClose={handleMouseLeave}
//                 MenuListProps={{ onMouseLeave: handleMouseLeave }}
//                 className=" text-white mt-[13.8px]"
//               >
//                 {item.subItems.map((subItem, subIndex) => (
//                   <MenuItem key={subIndex} className="text-[12px] hover:bg-blue-900 hover:text-white">
//                     {subItem}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             )}
//           </div>
//         ))}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;











'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { name: 'HOME', subItems: [] },
    {
      name: 'ABOUT',
      subItems: [
        'About UU',
        'Mission & Vision & Motto',
        'Overview, Features & Facilities',
        'Our Unique Features',
        'UU at a Glance',
        'Accreditations, Memberships and Ranking',
        'Explore Our Campus',
        'Campus Life',
        'UU Logo Resource & Socials',
        'UU Bus Service',
      ],
    },
    {
      name: 'ACADEMIC',
      subItems: [
        'Schools',
        'Undergraduate Programs',
        'Graduate Programs',
        'Professional Programs',
        'Research & Innovation',
        'IQAC - Institutional Quality Assurance Cell',
        'Academic, Research and Corporate Linkages',
        'Academic Calendar',
        'Grading System',
      ],
    },
    { name: 'DEPARTMENT', subItems: [

      

    ] },
    { name: 'ADMISSION', subItems: [] },
    { name: 'ADMINISTRATION', subItems: [] },
    { name: 'TEACHERS', subItems: [] },
    { name: 'JOURNAL & PUBLICATION', subItems: [] },
    { name: 'GALLERY', subItems: [] },
    { name: 'ALUMNI', subItems: [] },
    { name: 'CAREER', subItems: [] },
    { name: 'CONVOCATION', subItems: [] },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setOpenDropdown(null);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar className="justify-center" onMouseLeave={handleMouseLeave}>
        {navItems.map((item, index) => (
          <div key={index} className="relative" onMouseEnter={(e) => item.subItems.length > 0 && handleMouseEnter(e, index)}>
            <Button
              endIcon={item.subItems.length > 0 && <FaChevronDown size={10} />}
              className="text-[#00459b] font-semibold text-[12px] hover:text-blue-800"
            >
              {item.name}
            </Button>
            {item.subItems.length > 0 && (
              <Menu
                anchorEl={anchorEl}
                open={openDropdown === index}
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                className="mt-[13.8px]"
                PaperProps={{ style: { backgroundColor: '#002E6E', color: 'white' } }}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} className="text-[12px] hover:bg-blue-900 hover:text-white">
                    {subItem}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

