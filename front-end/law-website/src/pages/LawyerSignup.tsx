import { useState } from 'react';

export default function LawyerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lawFirm: '',
    yearsExperience: '',
    specialization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lawyer Signup Data:', formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Lawyer Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} value={formData.name} placeholder="Full Name" className="w-full px-4 py-2 border rounded" />
        <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" type="email" className="w-full px-4 py-2 border rounded" />
        <input name="lawFirm" onChange={handleChange} value={formData.lawFirm} placeholder="Law Firm" className="w-full px-4 py-2 border rounded" />
        <input name="yearsExperience" onChange={handleChange} value={formData.yearsExperience} placeholder="Years of Experience" type="number" className="w-full px-4 py-2 border rounded" />
        <select name="specialization" onChange={handleChange} value={formData.specialization} className="w-full px-4 py-2 border rounded">
          <option value="">Select Specialization</option>
          <option value="corporate">Corporate Law</option>
          <option value="ip">Intellectual Property</option>
          <option value="contract">Contract Law</option>
          <option value="startup">Startup Law</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
