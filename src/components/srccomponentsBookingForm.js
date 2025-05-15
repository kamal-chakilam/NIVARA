import React, { useState } from 'react';

export default function BookingForm({ service, onBack, onComplete, language, t }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, simulate booking and generate a random tracking ID
    const trackingId = 'NIV' + Math.floor(100000 + Math.random() * 900000);
    setSubmitted(true);
    onComplete(trackingId);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <h2>{t('bookingSuccess')}</h2>
        <p>
          {t('bookingFor')}: <strong>{service.name}</strong>
        </p>
        <button
          onClick={onBack}
          style={{
            marginTop: 20,
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          {t('backToServices')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
        {t('bookingFor')}: {service.name}
      </h2>
      <input
        type="text"
        name="name"
        placeholder={t('namePlaceholder')}
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#222', color: '#eee' }}
      />
      <input
        type="tel"
        name="phone"
        placeholder={t('phonePlaceholder')}
        value={formData.phone}
        onChange={handleChange}
        required
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#222', color: '#eee' }}
      />
      <textarea
        name="address"
        placeholder={t('addressPlaceholder')}
        value={formData.address}
        onChange={handleChange}
        required
        rows={3}
        style={{ padding: 10, borderRadius: 6, border: '1px solid #555', backgroundColor: '#222', color: '#eee' }}
      />
      <button
        type="submit"
