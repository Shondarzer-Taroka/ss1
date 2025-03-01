// 'use client'

// import { useSession } from "next-auth/react";
// import Image from "next/image";


// export interface User {
//   id?: number;  // Make 'id' optional since it's auto-generated
//   name: string;
//   username: string;
//   email: string;
//   photo?: string;
//   role: string;

// }

// export default function Home() {
//   const { data: session } = useSession();
//   console.log(session);
//   const user: User = session?.user
//   // Use the 'image' property instead of 'photo'
//   const photoUrl = user?.photo || "/default-avatar.png";

//   return (
//     <div>
//       <Image
//         src={photoUrl}
//         alt="User Avatar"
//         width={300}
//         height={300}
//         priority
//       />
//     </div>
//   );
// }


import FirstAboveNav from '@/pages/HomepageRelated/FirstAboveNav';
import React from 'react';

const Home = () => {
  return (
    <div>
      <FirstAboveNav/>
    </div>
  );
};

export default Home;