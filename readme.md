# Project Title

Project Overview:

1. Technology Stack:

Backend Framework: Node.js with Express.js
Database: MySQL with Sequelize ORM
Email Sending: Nodemailer for sending verification emails
Password Hashing: Bcrypt for password hashing 2. Features:

User Registration:

Two registration pages: one for customers and one for admins.
Fields include First Name, Last Name, Email, and Password.
Role assignment: Customer or Admin based on registration page.
Email verification for both customer and admin registrations.
Admin Login:

Admins can log in with their email and password.
Admin-specific login page.
Validation and Security:

Password validation: At least 8 characters.
Unique email validation during registration.
Email verification using OTP (One-Time Password).
Database Interaction:

Sequelize ORM used for defining and interacting with the User model.
MySQL database connection established using Sequelize.
Code Structure:

MVC (Model-View-Controller) architecture with separate folders for routes, controllers, models, and helpers.
Routes for user and admin actions.
Controllers handle the business logic for user registration, login, and other operations.
Helpers for database connection, OTP generation, and email sending.
Middleware:

Express middleware for parsing JSON and URL-encoded data.
Error handling and logging for better debugging. 3. Development Environment:

Nodemon used for automatic server restart during development.
MySQL Workbench for database management.
Git for version control. 4. Additional Considerations:

Express routes organized in a modular structure.
Proper error handling for a better user experience.
Sequelize migration for database schema changes.
API Endpoints:
User Registration:

Endpoint: POST: http://localhost:8080/api/user/register
Request Body: JSON with user registration data.
Admin Registration:

Endpoint: POST: http://localhost:8080/api/admin/register
Request Body: JSON with admin registration data.
Admin Login:

Endpoint: POST: http://localhost:8080/api/admin/login
Request Body: JSON with admin login credentials.
OTP Verification:

Endpoint: POST: http://localhost:8080/api/otp/verify
Request Body: JSON with email and OTP for verification.
Note: Request bodies may vary based on specific requirements.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Extras](#extras)

## Features

- Set up a Node.js project with a fresh MySQL database.
- Created two registration pages: Customer Registration and Admin Registration.
- Registration fields include First Name, Last Name, Email, and Password.
- Users registered via Customer Registration are assigned the customer role.
- Users registered via Admin Registration are assigned the admin role.
- Default email verification for both registration pages.
- Admin Login page with Email and Password fields.
- Users registered with Customer Registration are restricted from logging in through the Admin Login page.

## API Endpoints

- **User Registration:**

  - Endpoint: `POST http://localhost:8080/api/user/register`
  - Request Body: JSON with fields - First Name, Last Name, Email, Password

- **Admin Registration:**

  - Endpoint: `POST http://localhost:8080/api/admin/register`
  - Request Body: JSON with fields - First Name, Last Name, Email, Password

- **Admin Login:**

  - Endpoint: `POST http://localhost:8080/api/admin/login`
  - Request Body: JSON with fields - Email, Password

- **OTP Verification:**
  - Endpoint: `POST http://localhost:8080/api/otp/verify`
  - Request Body: JSON with fields - Email, OTP

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dj-777/Express-Auth-Sequelize.git
   ```

   cd your-repository
   npm install
   npm run dev

## extras

I've included a "dump.sql" file in the "database" folder, which contains predefined data for reference and use.
