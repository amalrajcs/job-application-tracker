# Job Application Tracker (Frontend)

A React + Vite + Tailwind CSS frontend for the MERN Stack Job Application Tracker.

---

## 🚀 Features
- Add, edit, view, and delete job applications.
- Responsive UI using Tailwind CSS.
- Confirmation modal for safe deletions.
- Navbar navigation between dashboard and form.

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
### 1️⃣ Install dependencies
```bash
npm install