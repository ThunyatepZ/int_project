/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      fontFamily:{
        title:["Dosis"],
        title2:['Space Grotesk'],
        title3:['Prompt'],
        title4:['Sarabun'],
      },
      backgroundImage:{
        bannerImg:"url('/futuristic-illuminated-hallway-with-beautiful-abstract-light-effects.jpg')",
        gradient: 'radial-gradient(at 46% 84%, #16213e 0px, transparent 50%), radial-gradient(at 49% 10%, #0f3460 0px, transparent 50%), radial-gradient(at 48% 71%, #533483 0px, transparent 50%), radial-gradient(at 36% 15%, #e94560 0px, transparent 50%), #16213e',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    }
  },
  plugins: [
  ],


}