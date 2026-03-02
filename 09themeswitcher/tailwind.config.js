export default {
    content: [
      './index.html', // Include the root HTML file
      './src/**/*.{js,jsx,ts,tsx}', // Include all files in the `src` folder
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: '#1d4ed8', // Example of adding a custom color
        },
      },
    },
    plugins: [],
  };