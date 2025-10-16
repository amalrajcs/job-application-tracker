
import { useEffect, useState } from 'react';
import API from '../api/api';
import { Link, useNavigate } from 'react-router-dom';

export default function JobList(){
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchJobs(){
    try{
      const res = await API.get('/jobs');
      setJobs(res.data);
    }catch(err){ console.error(err); }
    setLoading(false);
  }

  useEffect(()=>{ fetchJobs() }, []);

  async function handleDelete(id){
    if (!confirm('Are you sure you want to delete this job?')) return;
    try{
      await API.delete(`/jobs/${id}`);
      setJobs(jobs.filter(j=> j._id !== id));
    }catch(err){ console.error(err) }
  }

  if(loading) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Applications</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="text-left px-4 py-2">
            <th className="p-3">Company</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id} className="border-t">
              <td className="p-3">{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td>{new Date(job.applicationDate).toLocaleDateString()}</td>
              <td>{job.status}</td>
              <td>
                <button onClick={()=>navigate(`/jobs/${job._id}`)} className="mr-2">View</button>
                <button onClick={()=>navigate(`/edit/${job._id}`)} className="mr-2">Edit</button>
                <button onClick={()=>handleDelete(job._id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
