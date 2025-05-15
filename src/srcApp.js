import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import LanguageSwitcher from './components/LanguageSwitcher';
import ServiceList from './components/ServiceList';
import BookingForm from './components/BookingForm';
import RegistrationForm from './components/RegistrationForm';
import ProviderProfile from './components/ProviderProfile';
import StatusTracker from './components/StatusTracker';

function App() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState('en');
  const [user, setUser] = useState(null); // user logged in info
  const [page, setPage] = useState('services'); // services, booking, registration, profile, status
  const [selectedService, setSelectedService] = useState(null);
  const [bookingTrackingId, setBookingTrackingId] = useState(null);

  useEffect(() => {
    // Initialize language if saved in localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang) setLanguage(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const onServiceSelect = (service) => {
    setSelectedService(service);
    setPage('booking');
  };

  const onBookingComplete = (trackingId) => {
    setBookingTrackingId(trackingId);
    setPage('status');
  };

  const logout = () => {
    setUser(null);
    setPage('services');
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#121212',
      color: '#eee',
      minHeight: '100vh',
      paddingBottom: 40
    }}>
      <Header logo="/logo.png" user={user} logout={logout} />
      <LanguageSwitcher language={language} setLanguage={changeLanguage} />
      {!user && page !== 'registration' && (
        <button
          onClick={() => setPage('registration')}
          style={{
            backgroundColor: '#1f1f1f',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: 5,
            padding: '8px 16px',
            cursor: 'pointer',
            marginBottom: 10,
          }}
        >
          {t('register')}
        </button>
      )}
      {page === 'services' && (
        <ServiceList onSelect={onServiceSelect} language={language} t={t} />
      )}
      {page === 'booking' && selectedService && (
        <BookingForm
          service={selectedService}
          onBack={() => setPage('services')}
          onComplete={onBookingComplete}
          language={language}
          t={t}
        />
      )}
      {page === 'registration' && (
        <RegistrationForm
          onRegister={(userInfo) => {
            setUser(userInfo);
            setPage('services');
          }}
          onCancel={() => setPage('services')}
          t={t}
        />
      )}
      {page === 'profile' && user && (
        <ProviderProfile user={user} onBack={() => setPage('services')} t={t} />
      )}
      {page === 'status' && bookingTrackingId && (
        <StatusTracker
          trackingId={bookingTrackingId}
          onBack={() => setPage('services')}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
