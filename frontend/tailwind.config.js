module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // <-- make sure all your files are included
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // optional if using DaisyUI
  daisyui: {
    themes: ["acid"], // optional
  },
};





// export default {
 // content: [
   // "./index.html",
  //  "./src/**/*.{js,ts,jsx,tsx}",
 // ],
 // theme: {
  //  extend: {},
 // },
 // plugins: [],
// };
