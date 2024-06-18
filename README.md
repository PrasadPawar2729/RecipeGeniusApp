
## Introduction

RecipeGenius is an innovative recipe recommendation application designed to inspire users with culinary ideas based on their preferences, dietary restrictions, and ingredients at hand. Drawing inspiration from Yummly, RecipeGenius aims to simplify meal planning and discovery, providing a personalized experience for each user. The application will feature a vast database of recipes, a user-friendly interface for searching and filtering recipes, and personalized recommendations to cater to the unique tastes and dietary needs of its users.

Deplolyed App
Frontend:  https://recipe-genius-app-4quw.vercel.app/
Backend: https://recipegeniusapp.onrender.com/

Directory Structure
RecipeGenius
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── recipeController.js
│ │ └── userController.js
│ ├── middleware/
│ │ ├── access.js
│ │ └── auth.js
│ ├── models/
│ │ ├── Recipemodel.js
│ │ └── Usermodel.js
│ ├── routes/
│ │ ├── recipeRoutes.js
│ │ └── userRoutes.js
│ ├── index.js
│ ├── .gitignore
│ └── package.json
├── frontend/
│ ├── Logo/
│ │ └── mealmkr.jpg
│ ├── src/
│ │ ├── Components/
│ │ │ ├── Footer.jsx
│ │ │ ├── Heading.jsx
│ │ │ ├── Navbar.jsx
│ │ │ └── RecipeData.jsx
│ │ ├── Pages/
│ │ │ ├── Account.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ └── Recipe.jsx
│ │ ├── Routes/
│ │ │ └── AllRoutes.jsx
│ │ ├── Styles/
│ │ │ ├── Footer.css
│ │ │ └── LoginPage.css
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── index.html
│ │ ├── main.jsx
│ │ ├── .eslintrc.cjs
│ │ ├── .gitignore
│ │ ├── package.json
│ │ └── README.md
Features

User Authentication: Secure user registration and login functionality.

Responsive Design: Ensures a seamless user experience across various devices.

User Profile Management: Allows users to create and manage their profiles.

Search Functionality: Enables users to easily find desired recipes.

Admin Dashboard: Provides admins with metrics of user distribution, total clicks, and other key information.

CRUD Operations: Admins can perform CRUD operations on recipes and users.

Role-Based Access Control: Implements role-based access control to distinguish between users and creators.

User Role: Regular users can browse recipes

Creator Role: Creators have additional privileges to create, update, and delete recipes.

API Endpoints
GET /posts - retrieve all items
POST /posts - create a new item
PATCH /posts/:i[Uploading README.md…]()
d - Patch an item
DELETE /posts/:id - Delete an item
POST /login - login in a user
POST /register - create a user account
POST/logout -logout a user account
Technology Stack
Front-end:
React for dynamic user interfaces.
Redux for state management.
Chakra UI for component styling.
Axios for handling HTTP requests.
Back-end:
Node.js with Express for RESTful API services.
MongoDB for flexible data storage.
JWT for secure user authentication.
