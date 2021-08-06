module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          footer: "#37383d",
        },
        blue: {
          primary: "#E4F9F5",
        },
        yellow: {
          secondary: "#ffcb03",
          secondaryDarker: "#ffbb00",
          secondaryOpacity: "#ffcd0331",
        },
        red: {
          tertiary: "#ff585f",
          tertiaryDarker: "#fd424b",
          teriaryOpacity: "#ff58602d",
        },
        green: {
          primary: "#5ec576",
          primaryDarker: "#4bbb7d",
          primaryOpacity: "#5ec5763a",
          gradientPrimary: "#39b385",
          gradientSecondary: "#9be15d",
        },
        gray: {
          border: "#ddd",
          bodyColor: "#444",
          dotsBackgroundColor: "#b9b9b9",
          dotsActive: "#888",
          textContent: "#666",
          background: "#f3f3f3",
          footerText: "#eee",
          copyright: "#aaa",
        },
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
        "-4": "-4",
        "-5": "-5",
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      spacing: {
        115.2: "7.2rem",
        120: "7.5rem",
        123.2: "7.7rem",
        640: "30rem",
        427: "16rem",
        400: "25rem",
        392: "24.5rem",
        560: "35rem",
      },
    },
    fontFamily: {
      poppin: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
