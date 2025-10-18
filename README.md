# Job Application Tracker (Frontend)

A React + Vite + Tailwind CSS frontend for the MERN Stack Job Application Tracker.

---

## 🌐 Live Demo
Check out the live app here: [Job Application Tracker](https://job-application-tracker-webapp.vercel.app/)

## 🚀 Features
- Add, edit, view, and delete job applications.
- Responsive UI using Tailwind CSS.
- Confirmation modal for safe deletions.
- Navbar navigation between dashboard and form.

---

## 🖥️ Project Structure

job-application-tracker/
│
├── backend/ # Node.js + Express API
├── client/  # React frontend
└── README.md

---

## 🧩 Components

### 1. Navbar.jsx
- Displays app title and navigation links.
- Highlights the active route using `useLocation()`.

### 2. ConfirmModal.jsx
- Reusable modal for delete confirmation.
- Props:
  - `isOpen`: boolean to toggle visibility
  - `onClose`: function to close modal
  - `onConfirm`: function to handle confirm
  - `message`: custom confirmation message

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/amalrajcs/job-application-tracker.git
---

### Setup Backend 

cd backend
# Install dependencies
npm install

# Create a .env file
# Example backend/.env
PORT=5000
MONGO_URI=your_mongodb_connection_string

npm run dev

---

# Setup Frontend
cd ./client
# Install dependencies
npm install

# Create a .env file
# Example client/.env
VITE_API_BASE=http://localhost:5000/api

npm run dev



