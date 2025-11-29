

# 🏢 CareerFusion – Job Portal Web App

[Live Demo 🌐](https://careerfusion-44fab.web.app/)

CareerFusion is a modern **job portal web application** built with **React**, **Firebase Authentication**, **React Router (Data API)**, **Tailwind CSS + DaisyUI**, and **Framer Motion**.
It provides a user-friendly interface to explore companies, view job listings, and manage personal profiles securely.

---

## 📦 **Tech Stack & Purpose**

| Icon | Technology                                 | Purpose                                                      |
| ---- | ------------------------------------------ | ------------------------------------------------------------ |
| ⚛️   | **React 19**                               | Core frontend library for building UI components             |
| 🛣   | **React Router (Data API)**                | Client-side routing and dynamic route handling               |
| 🔐   | **Firebase Authentication**                | Secure user authentication (Email/Password + Google Sign-In) |
| 🗄️  | **Firebase Firestore / Realtime Database** | Store user profiles and other dynamic data *(if applicable)* |
| 🖼️  | **Firebase Hosting**                       | Host the production build online                             |
| 🎨   | **Tailwind CSS + DaisyUI**                 | Utility-first styling and UI component library               |
| 🎬   | **Framer Motion**                          | Smooth animations for modals, cards, and page transitions    |
| 🧾   | **React Helmet / React Helmet Async**      | Dynamic document titles for SEO and UX                       |
| 🔔   | **React Hot Toast**                        | Notifications for login, signup, errors, and updates         |
| 📦   | **Vite**                                   | Fast frontend build tool and development server              |

---

## 🚀 **Features**

### 🔐 Authentication

* Register and Login using **Email & Password**
* Login with **Google OAuth**
* Secure logout functionality
* Forgot password with **Firebase Email Reset**

### 🏢 Companies & Jobs

* List of companies with **dynamic job listings**
* Company detail page with **job information modal**
* Animated UI for job cards using **Framer Motion**
* Apply button redirecting to company website

### 👤 User Profile

* View personal profile information (Name, Email, Photo, UID)
* Update profile information (Name & Photo URL)
* Profile picture defaults if not provided

### 🌐 Routing

* Public pages: Home, About, Contact Us
* Private pages: Company Details, My Profile
* Protected routes using **PrivateRoot**

### 🛠️ Utilities

* **Toast notifications** for feedback (login success, errors, profile updates)
* Dynamic **document title per page** using React Helmet
* Fully responsive layout with **Tailwind CSS & DaisyUI**

---

## 📁 **Project Structure**

```
career-fusion/
├─ public/                   # Static assets
├─ src/
│  ├─ Components/            # Reusable UI components
│  ├─ Layout/                # Layout wrappers (HomeLayout, AuthLayout, OtherLayout)
│  ├─ Pages/                 # All pages (Home, MyProfile, SignIn, CompanyDetails)
│  ├─ Provider/              # Context providers (AuthProvider, PrivateRoot)
│  ├─ Routes/                # React Router setup
│  └─ index.css              # Global styles
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## ⚡ **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/career-fusion.git
cd career-fusion
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Deploy to Firebase Hosting:

```bash
firebase deploy
```

---

## 📌 **Live Demo**

Check the project online:
[https://careerfusion-44fab.web.app/](https://careerfusion-44fab.web.app/)

---

## 👨‍💻 **Author**

**Md. Mehedi Hasan Polash**

* CSE Student, AIUB
* [LinkedIn](https://www.linkedin.com/in/md-mehedi-hasan-polash/)
* [GitHub](https://github.com/yourusername)

---


