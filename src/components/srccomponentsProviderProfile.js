import React from 'react';

export default function ProviderProfile({ user, onBack, t }) {
  // Demo static data for provider profile
  const profile = {
    name: user.name,
    email: user.email,
    phone: '123-456-7890',
    services: ['ICU Doctor', 'Emergency Response'],
    bio: 'Experienced healthcare provider serving rural and urban areas with care and compassion.',
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '20px auto',
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        color: '#eee',
      }}
    >
      <h2>{t('providerProfile')}</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Services:</strong> {profile.services.join(', ')}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>

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
        Back
      </button>
    </div>
  );
}
