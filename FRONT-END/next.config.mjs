/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "euc.li",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cryptologos.cc",
        port: "",
      },
    ],
  },
};

export default nextConfig;
