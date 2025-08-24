import { useState, useEffect, useRef } from 'react';
import './Home.css';

const images = [
  '/images/attachments/indo inge r1.JPG',
  '/images/attachments/indorama r2.JPG',
  '/images/attachments/indorama r4.JPG',
  '/images/attachments/indorama r8.JPG',
  '/images/attachments/indo ven r5.JPG',
  '/images/attachments/alok r3.JPG',
  '/images/attachments/rock r1.JPG',
  '/images/attachments/rock r4.JPG',
  '/images/attachments/rock r6.JPG',
  '/images/attachments/rock r8.JPG',
  '/images/attachments/rock r9.JPG',
  '/images/attachments/thermax r1.JPG',
  '/images/attachments/uoi r1.jpeg',
  '/images/attachments/accumulator r1.JPG',
  '/images/attachments/apf r1.JPG',
  '/images/attachments/apf r2.JPG',
  '/images/attachments/apf r4.JPG',
  '/images/attachments/apf r6.JPG',
  '/images/attachments/apf r8.JPG',
  '/images/attachments/gil r1.jpeg'
];

const GlobeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0077cc" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83-.48-5.1-2.75-5.58-5.58H5v-2h2.42C7.9 8.81 10.17 6.54 13 6.07V4h2v2.07c2.83.48 5.1 2.75 5.58 5.58H19v2h-2.42c-.48 2.83-2.75 5.1-5.58 5.58V20h-2v-2.07z"/>
  </svg>
);

const GearIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0077cc" viewBox="0 0 24 24">
    <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.49.49 0 0 0 .12-.63l-2-3.46c-.14-.24-.44-.31-.68-.22l-2.49 1a7.027 7.027 0 0 0-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.63.25-1.2.58-1.69.98l-2.49-1c-.24-.1-.54-.02-.68.22l-2 3.46c-.14.24-.08.54.12.63l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98L2.46 14.63a.49.49 0 0 0-.12.63l2 3.46c.14.24.44.31.68.22l2.49-1c.49.4 1.06.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.63-.25 1.2-.58 1.69-.98l2.49 1c.24.1.54.02.68-.22l2-3.46c.14-.24.08-.54-.12-.63l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
  </svg>
);

const PeopleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0077cc" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-.38 0-.74.07-1.08.21l-2.91 2.91c-.14.34-.21.7-.21 1.08 0 1.66 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.92 13.41 19 14.53 19 16.5V20h3v-3.5c0-2.33-4.67-3.5-6-3.5z"/>
  </svg>
);

const whyPoints = [
  { text: "Vast global industrial experience in the field of heating equipment", icon: GlobeIcon },
  { text: "Strong technical background", icon: GearIcon },
  { text: "Extensive experience in installation and commissioning", icon: GearIcon },
  { text: "Serving a large customer base for more than a decade", icon: GlobeIcon },
  { text: "Global experience in Southeast Asia, Africa, Middle East, and UK", icon: GlobeIcon },
  { text: "Associates having a lifetime expertise in heating equipment & system design", icon: GearIcon },
  { text: "Proven ability to execute large projects", icon: GearIcon },
  { text: "Thorough understanding of piping stress analysis", icon: GearIcon },
  { text: "Extensive experience in thermic fluid heater repair", icon: GearIcon },
  { text: "Expertise in HAZOP study ", icon: GearIcon },
  { text: "Strong customer relations & high moral values", icon: PeopleIcon }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(1); // start at real 1
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoSlideRef = useRef(null);

  // ✅ Clone last → start, first → end
  const extendedImages = [
    images[images.length - 1], // fake last
    ...images,
    images[0], // fake first
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // ✅ Auto slide
  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 8000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  // ✅ Seamless transition fix
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      // reached fake first → jump to real first
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50); // restore animation
      }, 500);
    }
    if (currentIndex === 0) {
      // reached fake last → jump to real last
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex]);

  return (
    <>
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-btn left">❮</button>

      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease" : "none",
        }}
      >
        {extendedImages.map((src, idx) => (
          <img key={idx} src={src} className="carousel-slide" />
        ))}
      </div>

      <button onClick={nextSlide} className="carousel-btn right">❯</button>
    </div>


      {/* ✅ Home Sections */}
      <section className="why-section">
        <h2 className="why-title">Why Choose VMSS?</h2>
        <div className="why-grid">
          {whyPoints.map((point, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{point.icon}</div>
              <p style={{fontSize: "20px"}}><b>{point.text}</b></p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


