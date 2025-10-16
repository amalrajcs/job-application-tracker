
import { useState, useEffect } from 'react';
import API from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const initial = { companyName: '', jobTitle: '', applicationDate: '', status: 'Applied' };

export default function JobForm({ editMode }){
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    if(editMode && id){
      API.get(`/jobs/${id}`).then(res => {
        const j = res.data;
        setForm({ ...j, applicationDate: new Date(j.applicationDate).toISOString().slice(0,10) });
      }).catch(console.error)
    }
  },[editMode, id]);

  function validateLocal(){
    const e = {};
    if (!form.companyName || form.companyName.trim().length < 3) e.companyName = 'Min 3 characters';
    if (!form.jobTitle) e.jobTitle = 'Required';
    if (!form.applicationDate) e.applicationDate = 'Required';
    else if (new Date(form.applicationDate) > new Date()) e.applicationDate = 'Date cannot be future';
    return e;
  }

  async function handleSubmit(ev){
    ev.preventDefault();
    const e = validateLocal();
    setErrors(e);
    if (Object.keys(e).length) return;

    try{
      if(editMode){
        await API.put(`/jobs/${id}`, form);
      } else {
        await API.post('/jobs', form);
      }
      navigate('/');
    }catch(err){
      if (err.response && err.response.data && err.response.data.errors){
        setErrors(err.response.data.errors);
      } else {
        console.error(err);
      }
    }
  }

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-bold mb-4">{editMode ? 'Edit' : 'Add'} Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Company</label>
          <input value={form.companyName} onChange={e=>setForm({...form, companyName: e.target.value})} className="w-full p-2 border rounded" />
          {errors.companyName && <p className="text-red-600">{errors.companyName}</p>}
        </div>
        <div>
          <label className="block">Job Title</label>
          <input value={form.jobTitle} onChange={e=>setForm({...form, jobTitle: e.target.value})} className="w-full p-2 border rounded" />
          {errors.jobTitle && <p className="text-red-600">{errors.jobTitle}</p>}
        </div>
        <div>
          <label className="block">Application Date</label>
          <input type="date" value={form.applicationDate} onChange={e=>setForm({...form, applicationDate: e.target.value})} className="w-full p-2 border rounded" />
          {errors.applicationDate && <p className="text-red-600">{errors.applicationDate}</p>}
        </div>
        <div>
          <label className="block">Status</label>
          <select value={form.status} onChange={e=>setForm({...form, status: e.target.value})} className="w-full p-2 border rounded">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">{editMode ? 'Save' : 'Add'}</button>
        </div>
      </form>
    </div>
  );
}
