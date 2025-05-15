import React from 'react';

const allServices = {
  en: [
    { id: 1, category: 'Emergency', name: 'ICU Doctor' },
    { id: 2, category: 'Emergency', name: 'Bail Lawyer' },
    { id: 3, category: 'Non-Emergency', name: 'Skilled Labor' },
    { id: 4, category: 'Non-Emergency', name: 'Notary Service' },
  ],
  hi: [
    { id: 1, category: 'आपातकालीन', name: 'आईसीयू डॉक्टर' },
    { id: 2, category: 'आपातकालीन', name: 'जमानत वकील' },
    { id: 3, category: 'गैर-आपातकालीन', name: 'कुशल मजदूर' },
    { id: 4, category: 'गैर-आपातकालीन', name: 'नोटरी सेवा' },
  ],
  te: [
    { id: 1, category: 'అత్యవసర', name: 'ICU డాక్టర్' },
    { id: 2, category: 'అత్యవసర', name: 'జామీనుదారు' },
    { id: 3, category: 'అసమయం', name: 'అనుభవజ్ఞుడైన కార్మికుడు' },
    { id: 4, category: 'అసమయం', name: 'నోటరీ సేవ' },
  ],
};

export default function ServiceList({ onSelect, language, t }) {
  const services = allServices[language] || allServices.en;

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>{t('selectService')}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map(({ id, category, name }) => (
          <li
            key={id}
            onClick={() => onSelect({ id, category, name })}
            style={{
              backgroundColor: '#222',
              margin: '10px 15px',
              padding: 15,
              borderRadius: 8,
              color: '#eee',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#222')}
          >
            <strong>{category}</strong>: {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
