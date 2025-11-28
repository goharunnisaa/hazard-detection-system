🚨 AI-Driven Industrial Hazard Detection System

A full-stack web application for monitoring environmental hazards using real-time sensor data and automated incident detection.

Problem Statement:  In many industries today, small changes in temperature, pressure, gas levels, or machine performance can quickly turn into serious safety hazards. However, many factories and plants still depend on manual monitoring, which often leads to delays, missed warnings, and poor incident tracking. To improve safety and prevent accidents, there is a strong need for a centralized and intelligent system that can monitor sensors in real time, detect risks early, and automatically alert operators.

Proposed Solution:  The proposed solution is a centralized hazard-detection system that continuously monitors sensor data such as temperature, pressure, and gas levels in real time. The system automatically identifies abnormal readings, classifies them into risk levels, and generates instant alerts for operators. It also logs incidents, provides a clean dashboard for monitoring, and improves overall workplace safety through faster detection and better reporting.


📌 1. Project Overview

The Hazard Detection System monitors various sensors (temperature, pressure, gas, etc.) and automatically creates incidents when dangerous thresholds are detected.
Users can:

✔ Add sensors
✔ View sensor values in a dashboard
✔ Automatically detect hazard levels
✔ Review and resolve incidents
✔ See analytics (counts of sensors, incidents, active alerts)


This project includes:

Backend API (Node.js + Express + MongoDB Atlas)

Frontend (React)

Deployment

Backend: Render

Frontend: Netlify



🛠️ 2. Tech Stack Used
Frontend

React.js

Axios

React Router

React Icons

Modern responsive UI using custom CSS

Backend

Node.js

Express.js

Mongoose (MongoDB ODM)

Database

MongoDB Atlas (Cloud Database)

Deployment

Netlify (Frontend)

Render (Backend)



🚀 3. Setup Steps (Local Development Guide)

Follow these steps to run the project locally.

🔹 Backend Setup (Node + Express)

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000


Start backend server:

npm start


Backend will run on:

👉 http://localhost:5000

🔹 Frontend Setup (React)

Go to frontend folder:

cd frontend/hazard-frontend


Install dependencies:

npm install


Update the API base URL in:

src/services/api.js

Example:

export default axios.create({
  baseURL: "https://hazard-detection-system.onrender.com/api"
});


Start React dev server:

npm start


Frontend will run on:

👉 http://localhost:3000



🌐 4. Live Deployment Links
Frontend (Netlify):

🔗 https://hazard-detection-system.netlify.app/

Backend (Render):

🔗 https://hazard-detection-system.onrender.com



🖼️ 5. Screenshots
Please find attached google drive links for your reference

Dashboard
This page shows total sensors, incidents, and active alerts.

https://drive.google.com/file/d/1DzZGS4Nddgx_q4FF6PuXj1ByGT4WSsGE/view?usp=sharing

Sensors Page
It displays all sensors with delete option.

https://drive.google.com/file/d/1NF2dLcETTVcuN4CQeiJGcedY6az4uJct/view?usp=sharing


Add Sensor
It can add new data of sensors with dropdown & validation.

https://drive.google.com/file/d/1WhqQ3PqIM-LZbgngScLuLH_Su2zbZsny/view?usp=sharing

Incidents Page

It shows high/medium/low hazards & resolve button.

https://drive.google.com/file/d/1s-udwnIQxUJegiWwJO1DsvdZmA0dNlZN/view?usp=sharing


Netlify success page 

https://drive.google.com/file/d/1RMk4T4puwzAO2gg2p7AIRblld5or0vrK/view?usp=sharing

Render success page

https://drive.google.com/file/d/10rtTaog3CwLkdqoQwprlZtqFe0wbT98b/view?usp=sharing



🎯 6. Features & Bonus Enhancements
✔ Core Features

Add sensors

Automatic hazard detection

Incident creation

Resolve incident functionality

Dashboard analytics

Fully responsive UI



🎁 7. Bonus Features Implemented

Auto incident generation based on sensor value
(High / Medium thresholds)

Cloud database using MongoDB Atlas

Fully deployed frontend + backend

Professional UI design with icons

404 handling for Netlify using _redirects

Secure .env support for production

Reusable React components (Sidebar, Cards, Layout)



🤝 8. Assumptions Made

Sensor values are numeric (temperature, gas level, etc.)

Hazard levels are auto-classified as:

High → value ≥ 80

Medium → value ≥ 60

Low → below 60

Incidents only get created for medium & high levels

System is meant for simulation rather than real hardware sensors



📧9. Contact
Md. Goharunnisaa
📩 mdgohar03@gmail.com
