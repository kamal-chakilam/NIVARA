import React, { useState } from 'react';

const statusOptions = ['Pending', 'Confirmed', 'Completed'];

export default function StatusTracker({ trackingId, onBack, t }) {
  const [status, setStatus] = useState('Pending');

  // For demo, cycle status every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => {
        const index = statusOptions.indexOf(prev);
        return statusOptions[(index + 1) % statusOptions.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '20px auto',
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        color: '#eee',
        textAlign: 'center',
      }}
    >
      <h2>{t('bookingStatus')}</h2>
      <p>{t('trackingId')}: <strong>{trackingId}</strong></p>
      <p>
        {t('checkStatus')}: <strong>{t(`status${status}`)}</strong>
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
        Back to Services
      </button>
    </div>
  );
}
