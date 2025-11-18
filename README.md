``` bash
⭐ Role Based Web Application (Admin / Partner / Customer)

A complete full-stack role-based authentication system using:

Laravel (backend)

MySQL database

React + Vite (frontend)

JWT Authentication

🚀 Features

Admin / Partner / Customer roles

Secure registration

JWT login for all users

Protected routes

Role-based dashboards

Admin user listing

Logout + persistent login

Modern UI with slides + navbar + footer

🔧 Technologies Used
Backend:

Laravel 10

PHP 8+

MySQL

JWT Auth (php-open-source-saver/jwt-auth)

Frontend:

React (Vite)

Axios

React Router DOM

Slick Slider

📁 Project Structure
role_auth_php/
 ├── backend/       → Laravel API
 ├── frontend/      → React UI
 └── README.md
  

🛠 Installation Guide
1️⃣ Backend Setup (Laravel + MySQL)
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan db:seed --class=AdminSeeder
php artisan serve


Backend will run at:

http://127.0.0.1:8000

2️⃣ Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

🔑 Default Admin Credentials
Email: admin@example.com
Password: Admin@123

🧪 Testing API (Postman)
Register:

POST http://127.0.0.1:8000/api/user/register

Login:

POST http://127.0.0.1:8000/api/user/login



Get All Users (Admin):

GET http://127.0.0.1:8000/api/admin/users


```

