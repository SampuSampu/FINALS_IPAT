import React, { useState } from 'react';
import axios from 'axios';

export default function EmailForm() {
  const [form, setForm] = useState({ to: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/send', form);
      setStatus(res.data.message);
    } catch {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="email-center">
      <form className="email-form" onSubmit={handleSubmit}>
        <h2>Send Email</h2>
        <input type="email" name="to" placeholder="Recipient" value={form.to} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
    </div>
  );
}
