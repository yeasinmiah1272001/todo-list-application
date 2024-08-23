/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primaryColor: "#0A192F",
        designColor: "#64ffda",
        lightColor: "#ccd6f6",
        darktext: "#8892b0",
        hovarColor: "#64FFDA",
      },
      fontFamily:  {
        bodyFont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "banner-bg": "url('/public/bannerImage.avif')",
      },
     
    },
  },
  plugins: [],
}