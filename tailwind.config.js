/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'bar' : ['Barlow Condensed', 'sans-serif']
      }, backgroundImage: {
        'header-image': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/header-image.jpg')",
        'banner-about': "linear-gradient(0deg, rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url('../assets/img/banner-about.jpg')",
      },
      colors: {
        platinum: '#E0E0E0',
        gold: {
          '50': '#fbfaf4',
          '100': '#f9f0bd',
          '200': '#f1dd81',
          '300': '#dcb84f',
          '400': '#bd8e2a',
          '500': '#9e6f15',
          '600': '#80550d',
          '700': '#62400c',
          '800': '#432c0b',
          '900': '#2c1b08',
        },
        lemon: {
          '50': '#faf9f3',
          '100': '#f8f0b5',
          '200': '#eedf76',
          '300': '#d4bd46',
          '400': '#ac9424',
          '500': '#897611',
          '600': '#6e5d0b',
          '700': '#54450a',
          '800': '#392f09',
          '900': '#271d08',
        },
        submarine: {
          '50': '#eff6f5',
          '100': '#d0f0f4',
          '200': '#9be6e6',
          '300': '#61cbc8',
          '400': '#27aca2',
          '500': '#1c907c',
          '600': '#197963',
          '700': '#175d4d',
          '800': '#123f39',
          '900': '#0c272a',
        },
      }
    },
  },
  plugins: [],
}

