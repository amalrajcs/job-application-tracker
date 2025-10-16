import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./pages/JobList";
import JobForm from "./pages/JobForm";
import JobDetails from "./pages/JobDetails";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
        
      <Navbar />

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/add" element={<JobForm />} />
          <Route path="/edit/:id" element={<JobForm editMode />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </main>
    </div>
  );
}
