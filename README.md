# 🏢 CareerFusion – Job Portal Web App

[Live Demo 🌐](https://careerfusion-44fab.web.app/)

**CareerFusion** is a modern **job portal web application** built with **React**, **Firebase Authentication**, **React Router (Data API)**, **Tailwind CSS + DaisyUI**, and **Framer Motion**. It provides a user-friendly interface to explore companies, view job listings, and manage personal profiles securely.

This project fulfills the **Assignment-09_category_Hibiscus** requirements with fully functional **login, registration, private routes, forget password, and update profile features**.

---

## 📦 **Tech Stack & Purpose**

| Icon | Technology                                 | Purpose                                                      |
| ---- | ------------------------------------------ | ------------------------------------------------------------ |
| ⚛️   | **React 19**                               | Core frontend library for building UI components             |
| 🛣    | **React Router (Data API)**                | Client-side routing and dynamic route handling               |
| 🔐   | **Firebase Authentication**                | Secure user authentication (Email/Password + Google Sign-In) |
| 🗄️   | **Firebase Firestore / Realtime Database** | Store user profiles and company/job data                     |
| 🖼️   | **Firebase Hosting**                       | Host the production build online                             |
| 🎨   | **Tailwind CSS + DaisyUI**                 | Utility-first styling and UI component library               |
| 🎬   | **Framer Motion**                          | Smooth animations for modals, cards, and page transitions    |
| 🧾   | **React Helmet / React Helmet Async**      | Dynamic document titles for SEO and UX                       |
| 🔔   | **React Hot Toast**                        | Notifications for login, signup, errors, and updates         |
| 📦   | **Vite**                                   | Fast frontend build tool and development server              |

---

## 🚀 **Key Features**

### 🔐 Authentication

- Register and Login using **Email & Password**
- Login with **Google OAuth**
- **Forget password** functionality with Firebase email reset
- Secure **logout** button displayed on navbar when logged in
- Password validation:

  - At least 6 characters
  - Must contain an uppercase and lowercase letter

- No email verification (skipped per assignment instructions)

### 🏢 Companies & Jobs

- List of companies with **dynamic job listings** from JSON
- Company detail page (Private Route) with **job cards and modal**
- Job modal includes:

  - Title, Job Type, Salary, Description, Requirements
  - **Apply button** redirecting to company website
  - **Close button**

- Animated UI for job cards using **Framer Motion**

### 👤 User Profile

- **Private Route** – accessible only if logged in
- View personal profile information (Name, Email, Photo, UID)
- Update profile information (Name & Photo URL)
- Default profile picture if not provided
- Update info form with dedicated route

### 🌐 Routing

- **Public pages:** Home, About, Contact Us, Login, Register, Forget Password, 404
- **Private pages:** Company Details, My Profile
- Protected routes implemented with **PrivateRoot**
- Navbar dynamically shows **login/register** or **profile picture + logout** depending on auth state
- Dynamic document title per page using **React Helmet**

### 🛠️ Utilities

- **Toast notifications** for login, errors, profile updates
- Fully **responsive layout** with Tailwind CSS & DaisyUI
- Smooth animations using **Framer Motion**
- JSON-based dynamic data for companies and jobs

---



## 🏠 **Home Page Features**

- **Hero Section:** Title, description, relevant hero image
- **How It Works:** Step-by-step instructions
- **Companies Section:** Display logos in a grid/flex layout; clickable to Company Details page
- **Extra Sections:** Two additional relevant sections showcasing website functionality

---

## 👤 **Authentication Pages**

### Login Page

- Email & Password fields
- Forget Password link
- Login button
- Google OAuth login button
- Link to Register page
- Error and success notifications using **React Hot Toast**

### Register Page

- Name, Email, Photo URL, Password
- Register button
- Google OAuth login
- Password validation with inline errors
- Redirect to Home on successful registration

### Forget Password Page

- Email field prefilled if coming from Login page
- Reset button redirects to Gmail for password reset
- Accessible via login link

---

## 📌 **Additional Features**

- 404 / Not Found page
- Extra route implemented (update profile)
- Dynamic tab title per page
- Fully responsive for **mobile, tablet, desktop**
- Smooth animations using **Framer Motion**
- Environment variables used for Firebase config

---



## 👨‍💻 **Author**

**Md. Mehedi Hasan Polash**
CSE Student, AIUB

- [LinkedIn](https://www.linkedin.com/in/m-mehedi-hasan-polash)
- [GitHub](https://github.com/mehedipolash)
