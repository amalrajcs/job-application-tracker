
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/api';

export default function JobDetails(){
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    API.get(`/jobs/${id}`).then(res => setJob(res.data)).catch(console.error)
  },[id]);

  if(!job) return <p>Loading...</p>

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h2 className="text-xl font-bold">{job.companyName}</h2>
      <p className="mt-2"><strong>Title:</strong> {job.jobTitle}</p>
      <p className="mt-2"><strong>Date:</strong> {new Date(job.applicationDate).toLocaleDateString()}</p>
      <p className="mt-2"><strong>Status:</strong> {job.status}</p>
      <div className="mt-4">
        <button onClick={()=>navigate(-1)} className="mr-2">Back</button>
      </div>
    </div>
  );
}
