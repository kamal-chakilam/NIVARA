import React, { useState } from 'react';

export default function RegistrationForm({ onRegister, onCancel, t }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // For demo, simulate successful registration
    onRegister({ name: form.name, email: form.email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '20px',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        color: '#eee',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{t('register')}</h2>
      <input
        type="text"
        name="name"
        placeholder={t('namePlaceholder')}
        value={form.name}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#333', color: '#eee' }}
      />
      <input
        type="email"
        name="email"
        placeholder={t('emailPlaceholder')}
        value={form.email}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#333', color: '#eee' }}
      />
      <input
        type="password"
        name="password"
        placeholder={t('passwordPlaceholder')}
        value={form.password}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#333', color: '#eee' }}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder={t('confirmPasswordPlaceholder')}
        value={form.confirmPassword}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#333', color: '#eee' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          padding: '12px 20px',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {t('register')}
      </button>
      <button
        type="button"
        onClick={onCancel}
        style={{
          marginTop: 10,
          backgroundColor: '#444',
          color: '#ccc',
          border: 'none',
          padding: '10px 20px',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
    </form>
  );
}
