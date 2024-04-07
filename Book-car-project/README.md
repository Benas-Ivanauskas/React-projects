Welcome to the Car Rental Website project! This project aims to provide users with a convenient platform to browse and book cars for their trips. 

Features:

User Authentication:
1. Users can create an account to access personalized features.
2. Login functionality.
   
Car Listing:
1. Display a comprehensive list of available cars for rent.
2. Each car listing includes essential details such as brand, model, cost per day, seating capacity, fuel type, and location.
   
Filtering:
1. Users can easily filter cars based on specific criteria such as brand, fuel type.
2. Filter functionality enhances the browsing experience by helping users find cars that meet their requirements.
   
Car Details:
1. Provide detailed information about each car, including its specifications, location, and rental cost per day.
2. Users can view additional details such as model year, seating capacity, and fuel type to make informed decisions.
   
Booking:
1. Users can book a car by filling out a convenient booking form.
2. The booking form captures essential details such as pickup location, pickup date, return date, and any additional messages from the user.
   
Homepage:
1. The homepage offers an informative overview of the website's services.
2. Users can learn about finding the best car for hire, read descriptions, and access car listings directly from the homepage.
   
Technologies Used:
1. Frontend: React.js for building the user interface.
2. Styling: Sass for styling components and managing CSS.
3. Routing: React Router for handling navigation within the application.
4. Icons: Utilized various icon libraries including React Icons for incorporating icons into the UI.
5. Backend: Utilized json-server with a db.json file as a mock backend server to provide car data and handle CRUD operations. json-server enables rapid development by serving RESTful APIs based on the data structure defined in the db.json file.


To ensure your website works properly, you need to install both dependencies and devDependencies listed in your package.json file. Here's what you need to install:

Dependencies:
1. React and ReactDOM: Core libraries for building the user interface in React.
2. React Router DOM: For handling navigation within the application.
3. React Icons: Provides a library of icons for use in your React application.
4. React Toastify: Allows you to show notification messages in your React application.
5. Sass: For styling components using Sass syntax.
   
Installation Instructions (THESE STEPS IMPORTANT TO RUN PROJECT PROPERLY):
To install the necessary dependencies, run the following command in your project terminal:
1. In terminal need to install for all dependencies: npm install
2. To start the project, execute the following command in your terminal: npm run dev
3. To enable JSON Server, open another terminal in the same folder and run: json-server --watch db.json

For more information about React + Vite you can read below:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

"Rent Car" is a React.js web app for car rentals with smooth navigation and intuitive icons.

How to Load the page:
1. Ensure you have Node.js installed on your system.
2. Navigate to the project directory in your terminal.
3. Run the command npm install to install the project dependencies.
4. After the installation is complete, execute npm run dev to start the development server.
5. Once the server is running, open your web browser and navigate to the specified URL (usually http://localhost:3000) to view the application.
