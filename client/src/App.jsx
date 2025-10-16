import { Routes, Route, Link } from 'react-router-dom';
import JobList from './pages/JobList';
import JobForm from './pages/JobForm';
import JobDetails from './pages/JobDetails';


export default function App(){
return (
<div className="min-h-screen bg-gray-50">
<nav className="bg-white shadow p-4">
<div className="container mx-auto flex justify-between">
<Link to="/" className="font-bold">Job Application Tracker</Link>
<div>
<Link to="/add" className="px-3">Add</Link>
</div>
</div>
</nav>


<main className="container mx-auto p-4">
<Routes>
<Route path="/" element={<JobList/>} />
<Route path="/add" element={<JobForm/>} />
<Route path="/edit/:id" element={<JobForm editMode/>} />
<Route path="/jobs/:id" element={<JobDetails/>} />
</Routes>
</main>
</div>
)
}