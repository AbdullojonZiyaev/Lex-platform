import { useState } from 'react';

export default function StartupSignup() {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    companyName: '',
    stage: '',
    legalNeeds: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Startup Signup Data:', formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Startup Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="founderName" onChange={handleChange} value={formData.founderName} placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
        <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" type="email" className="w-full px-4 py-2 border rounded" />
        <input name="companyName" onChange={handleChange} value={formData.companyName} placeholder="Company Name" className="w-full px-4 py-2 border rounded" />
        <select name="stage" onChange={handleChange} value={formData.stage} className="w-full px-4 py-2 border rounded">
          <option value="">Select Stage</option>
          <option value="idea">Idea Stage</option>
          <option value="mvp">MVP Ready</option>
          <option value="funded">Funded</option>
        </select>
        <input name="legalNeeds" onChange={handleChange} value={formData.legalNeeds} placeholder="Describe Legal Needs (e.g., incorporation, IP)" className="w-full px-4 py-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
}

