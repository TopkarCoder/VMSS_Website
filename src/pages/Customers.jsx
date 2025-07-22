import { useState } from 'react';
import './Customers.css';

const clientData = {
  India: [
    { name: 'SI Group - India Pvt. Ltd.', logo: '/logos/SI group.png' },
    { name:'Bharat Rasayan Ltd.', logo: '/logos/BR.png' },
    { name: 'DIC Fine Chemicals Pvt. Ltd.', logo: '/logos/DIC.png' },
    { name: 'RSSB', logo: '/logos/RSSB.png' },
    { name: 'ELANTAS Beck India Ltd.', logo: '/logos/EL.png' },
    { name: 'Ginni Filaments Ltd.', logo: '/logos/GF.png' },
    { name: 'PolyPlex', logo: '/logos/PP.png' },
    { name: 'JSW Steel Ltd.', logo: '/logos/JSW.png' },
    { name: 'Huhtamaki PPL Ltd.', logo: '/logos/HPL.png' },
    { name: 'Indorama Synthetics India Ltd.', logo: '/logos/IND.png' },
    { name: 'Thermax', logo: '/logos/TM.png' },
    { name: 'Kansai Paint Nerolac', logo: '/logos/KP.png' },
    { name: 'L&T Heavy Engineering', logo: '/logos/L&T.png' },
    { name: 'Garden Vareli', logo: '/logos/Garden.png' },
    { name: 'Century Enka Ltd.', logo: '/logos/CEL.png' },
    { name: 'AsianPaints', logo: '/logos/AP.png' },
    { name: 'Birla Opus', logo: '/logos/Birla.png' },
    { name: 'Unilever', logo: '/logos/U.png' },
    { name: 'Raj Rayon Industries Ltd.', logo: '/logos/RRIL.png' },
    { name: 'Graphite India Ltd.', logo: '/logos/GIL.png' },
    { name: 'Linde', logo: '/logos/Linde.png' },
    { name: 'Finornic Chemicals India Pvt Ltd.', logo: '/logos/Finornic.png' }

  ],
  Malaysia: [
    { name: 'BRB International', logo: '/logos/BRB.png' },
    { name: 'Indorama Ventures', logo: '/logos/IV.png'},
    { name: 'EVYAP', logo: '/logos/EVYAP.png' },
  ],
  Indonesia: [
    { name: 'Asia Pacific Fibers', logo: '/logos/APF.png' },
    { name: 'PT EuroAsiatic Jaya', logo: '/logos/EA.png'},
  ],
  Thailand: [
    { name: 'Indorama Ventures', logo: '/logos/IV.png'},
    { name: 'SRF', logo: '/logos/SRF.png'},
  ], 
  UK: [
    { name: 'Sappi', logo: '/logos/SA.png' },
    { name: 'Rockwell Solutions', logo: '/logos/RS.png' },
  ],
  USA: [
    { name: 'Finoric', logo: '/logos/Einoric.png' }
  ],
  Nigeria: [
    { name: 'Indorama Petrochemicals', logo: '/logos/IP.png' },
  ]
};

export default function Customers() {
  const countries = Object.keys(clientData);
  const [selectedCountry, setSelectedCountry] = useState('India');

  return (
    <div className="customers-page page">
      <h1>Our Clients</h1>

      <div className="country-selector">
        {countries.map((country) => (
          <button
            key={country}
            className={selectedCountry === country ? 'active' : ''}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="client-grid">
        {clientData[selectedCountry].map((client) => (
          <div key={client.name} className="client-card">
            <img src={client.logo} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
