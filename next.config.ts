// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// module.exports = {
//   async headers() {
//     return [
//       {
//         source: "/api/auth/(.*)",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
//           { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
//           { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
//         ],
//       },
//     ];
//   },
// };












import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/auth/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, // Change this if deploying
          { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'**'
      }
    ]
  }
};

export default nextConfig;
