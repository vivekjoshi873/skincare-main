# 🧴 Skincare Product Page

A sleek, responsive skincare product page built using **React**, **Vite**, and **Tailwind CSS**.  
It features a scrollable product card layout for iPad devices, dynamic hover transitions, and interactive "Add to Cart" buttons using icons.

🌐 **Live Demo**: [https://skin-care-b1lh.vercel.app/](https://skin-care-b1lh.vercel.app/)

---

## 🚀 Tech Stack

- **React 19**
- **Vite** (for blazing fast dev & build)
- **Tailwind CSS** (for styling)
- **React Router DOM** (navigation)
- **React Icons** + **Lucide React** (icon support)
- **MUI (Material UI)** for optional component flexibility

---

## 📁 Project Structure

```
skinCare/
├── public/                     # Static assets
│   └── vite.svg
├── src/
│   ├── assets/                 # Images and media files
│   │   ├── acnecream.webp
│   │   ├── facewash.webp
│   │   ├── suncream.webp
│   │   └── ... (other product images)
│   ├── components/             # Reusable UI components
│   │   ├── Cart/
│   │   │   └── Cart.jsx        # Shopping cart component
│   │   ├── Footer/
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── Header/
│   │   │   ├── Header.jsx      # Main header component
│   │   │   └── Navbar.jsx      # Navigation bar
│   │   └── Home/
│   │       └── Home.jsx        # Home page component
│   ├── context/                # React Context for state management
│   │   └── AddCart.jsx         # Cart context provider
│   ├── Layouts/                # Layout components
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── pages/                  # Page components
│   │   ├── AcneProne.jsx       # Acne products page
│   │   ├── AllProducts.jsx     # All products listing
│   │   ├── CicaCream.jsx       # Cica cream products
│   │   ├── CurlyHair.jsx       # Curly hair products
│   │   ├── FaceWash.jsx        # Face wash products
│   │   ├── Store.jsx           # Store page
│   │   ├── Suncream.jsx        # Sunscreen products
│   │   └── TanningCream.jsx    # Tanning products
│   ├── App.css                 # Global styles
│   ├── App.jsx                 # Main App component
│   ├── index.css               # Base styles
│   └── main.jsx                # Entry point
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite build configuration
└── README.md                   # Project documentation
```

### 🏗️ Architecture Overview

- **Component-Based Structure**: Organized into logical folders (Cart, Header, Footer, etc.)
- **Page-Based Routing**: Separate components for each product category
- **Context API**: Centralized state management for cart functionality
- **Asset Management**: All images stored in dedicated assets folder
- **Layout System**: Reusable layout components for consistent UI

---

## 📸 Features

- 💅 Beautiful hover effect to switch between two product images
- 📱 Horizontal scroll on tablet devices (iPad size screens)
- 🛒 "Add" button appears on hover with a smooth transition
- 🎯 Fully responsive layout across screen sizes

---

## 🛠️ Getting Started

Clone the repository and run the development server:

```bash
git clone https://github.com/vivekjoshi873/skinCare.git
cd skinCare
npm install
npm run dev
