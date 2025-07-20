import './MissionVision.css';

export default function MissionVision() {
  return (
    <div className="mission-page page">
      <h1>Mission & Vision</h1>

      <section className="mission-block">
        <h2>Our Mission</h2>
        <p>
          To provide innovative, energy-efficient, economical and sustainable thermal engineering solutions that
          empower industries across the globe. We provide all the necessary support to implement energy solutions to our customers. 
          We aim to exceed client expectations through technical excellence, integrity, and long-term value creation.
        </p>
      </section>

      <section className="vision-block">
        <h2>Our Vision</h2>
        <p>
          To be a globally respected engineering consultancy delivering world-class competitive process heating,
          energy saving and automation solutions — built on trust, experience and forward-thinking design.
        </p>
      </section>

              {/* Services */}
        <section className="about-services">
          <h2>What We Offer</h2>
          <ul>
            <li>Thermic fluid, steam, and hot water system audits & troubleshooting</li>
            <li>Design of energy-saving systems & heat recovery systems</li>
            <li>Automation panels for process heating & cooling</li>
            <li>Design of utility and process piping</li>
            <li>Repair of high temperature heaters</li>
            <li>Custom combustion systems and burner retrofits</li>
            <li>Electrical system design</li>
            <li>Hazop studies, stress analysis, and technical training</li>

          </ul>
        </section>
    </div>
  );
}
