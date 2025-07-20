import './Company.css';

export default function Company() {
  return (
    <div className='page'>
      <div className="about-page">
        <div className="about-logo">
          <img src="/public/images/vmss-logo.png" alt="VMSS Logo" />
        </div>

        {/* Company Overview */}
        <section className="about-intro">
          <h1>About VMSS Thermal Engineering Consultants Pvt. Ltd.</h1>
          <p>
            VMSS is a trusted name in industrial thermal engineering consultancy, known for innovative, reliable,
            and technically sound solutions in heating, energy-saving systems, and process automation. Established
            in 2017, we have served global clients across the UK, Europe, Middle East, and South-East Asia.
          </p>
        </section>        

        {/* Founder Section */}
        <section className="about-founder">
          <h2>Our Founder</h2>
          <div className="founder-content">
            <div className="founder-wrapper">
              <img src="/images/vivek-sathaye.png" alt="Vivek Sathaye" className="founder-photo-wrap" />
              <div className="founder-text">
                <b>Mr. Vivek Sathaye</b>, a B.Tech graduate from IIT Kharagpur (1984) and IIM Ahmedabad-trained project manager, brings over 30 years of experience from Thermax Ltd., including international roles in the UK and Thailand. He has led large-scale thermal projects, energy audits, CE certifications, and combustion system innovations globally.

                <p>
                Mr. Vivek Sathaye, the Founder and Director of VMSS Thermal Engineering Consultants Pvt. Ltd., holds a B.Tech degree from IIT Kharagpur. He has also completed a crash course in Project Management from IIM Ahmedabad. Mr. Sathaye worked with Thermax Ltd. until 2014, followed by a year as a partner at Pride Projects.
                </p>
                <p>
                His extensive career at Thermax spanned service, project execution, technical sales support, and design. He played a key role in managing high-temperature thermic fluid heaters and high pressure once through boilers for the polyester industry. Mr. Sathaye spent six years in Thailand, heading Thermax’s representative office, overseeing the complete range of Thermax products including process cooling, water treatment, pollution control, and heating equipment, while handling both sales and customer support.
                </p>
                <p>
                For four years, he was supporting Thermax’s operation in UK, providing technical support and handling a variety of projects. During this time, he was involved in VOC incinerator systems and high-capacity designs such as a 14 million kcal/h Dowtherm A vaporizer, a battery of 176-bar 10 TPH boiler for Oil India, and a 40 TPH turbine test facility for the British Royal Navy. He was instrumental in obtaining CE certifications for several Thermax products, including thermosiphon boilers.
                </p>
                <p>
                As Commissioning Manager, Mr. Sathaye led the execution of two 2×25 MW solid fuel-fired power plants. In the final six years of his tenure at Thermax, he focused on developing heating system improvement solutions and energy-saving systems, undertaking various combustion and product enhancement projects.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section className='about-founder'>
          <h2>Our Associates</h2>
          <div className="founder-text">
            <p><b>Mr. Avadhoot Khandare</b>, is a Mechanical Engineer with 10 years of comprehensive experience in Thermal Engineering, specializing in steam and thermic fluid systems, energy conservation solutions, and industrial heat transfer applications. Proven expertise in designing, engineering, and executing turnkey thermal systems, including overseas projects and high-spec tender-based orders.
            He has had a significant tenure at Thermax, where he was part of the engineering department, contributing to both standard and customized energy solutions across diverse industrial sectors. Strong technical acumen combined with practical field exposure and cross-functional coordination, including client interfacing, vendor management, and project lifecycle execution.</p>
            <p><b>Mr Jayant Sagade.</b> He is B. Tech from IIT Mumbai. He has experience working in BHEL
            and Thermax on stem turbines and Power boilers. He has a huge experience in Power
            generation field over 50 years!</p>
            <p><b>Mr G S Deshpande.</b> He has a long experience with as design in charge of boilers and
            thermic fluid Heaters. He was also trained at Bertram for thermic fluid Heaters and at
            Struthers for Dowtherm vapourizer mainly in designing of large capacity Heaters. He
            has experience of over 50 years working in the Heating System design.</p>
            <p><b>Mr D D Dhokare.</b> He was responsible for engineering and development of soild fuel
            fired boilers and Heaters in Thermax. Now he has a manufacturing set up for Boiler,
            Heaters and Heat exchangers. He works for us on special projects.</p>
            <p><b>Mr Sachin Sangamnerkar.</b> He has very long experience of working with Thermax on
            boilers and Heaters in design. He was also trained by Struthers for Dowtherm
            vapourizers. He has also long experience of working for some global consultancy
            companies like Petrochem.</p>
            <p><b>Mr. Devendra Devestale:</b> He has been associated with thermic fluid conservation
            mission. They provide services to maintain thermic fluid properties by formulating
            various thermic fluid additives, filters etc. and also provide complete service to clean
            thermic fluid piping system if it gets scaled! They have over 40 years’ experience in this
            field and have a large, satisfied customer base.</p>
          </div>
          <img className="centered-image" src='/images/products/associate.jpeg' alt='associates'></img>
        </section>


        {/* Projects */}
        <section className="projects-section">
          <h2>Recent Projects</h2>

          <p className="projects-intro">
            Our consultancy has served clients such as 
            <strong> HUL, L&amp;T, Century Enka, Asian Paints, BRB International (Malaysia), 
            Sappi/Rockwell Solutions (Scotland), DIC Fine Chemicals, Supreme Petro, Indorama, and Thermax.</strong> 
            We have executed large, complex, and prestigious thermal engineering projects across the globe.
          </p>

          <ul className="projects-list">
            <li>
              <strong>Asia Pacific Fiber</strong> – Supplied air preheaters and burner retrofits to handle higher 
              combustion air temperature on their <em>14 m kcal/h capacity (2 no.) Bertrams Heaters</em>, including 
              redundant PLC panels.
            </li>
            <li>
              <strong>Indorama – India</strong> – Repaired <em>2 × 10 m kcal/h and 1 × 8 m kcal/h capacity Heaters</em> 
              including top roof coil, bottom roof coil, and several inner/outer coil turns.
            </li>
            <li>Repaired <em>10 m kcal/h capacity Heater</em> at Garden Coil and Rajrayon.</li>
            <li>Continuously supporting <strong>Asian Paints</strong> for their resin plant thermic fluid system.</li>
            <li>
              Supplied a <em>3.5 m kcal/h thermic fluid heat recovery unit</em> to 
              <strong> Rockwell Solutions – UK</strong> and provided VOC incinerator consultancy.
            </li>
            <li>
              Designed thermic fluid waste heat recovery for <strong>Euroasiatic</strong> downstream of 
              <em> 2 × 7.5 MW gas turbines</em>, recovering <em>2 × 7 m kcal/h</em> and integrating with other 
              heaters for <strong>Indorama Ventures – Indonesia</strong>.
            </li>
            <li>
              Engineered <strong>Unilever Plant – Indonesia</strong> for integrating 
              <em> 4 × 4 m kcal/h biomass-fired Heaters</em> with a Geika gas-fired Heater and 
              <em> 3 × 6 m kcal/h</em> heaters.
            </li>
            <li>
              Working on <strong>Unilever – Indonesia</strong> expansion with 
              <em> 3 × 12 m kcal/h capacity Heaters</em> interconnected with existing systems.
            </li>
            <li>
              Audited <em>3 × 12 m kcal/h Dowtherm vaporizer system</em> for
              <strong> Indorama – Nigeria</strong>.
            </li>
            <li>
              Designed liquid pitch handling &amp; impregnation plant consultancy for 
              <strong> Graphite India</strong>.
            </li>
            <li>
              Designed and supplied VOC injection system for 
              <strong> SRF – Thailand</strong>.
            </li>
            <li>
              Performed stress analysis for thermic fluid piping at 
              <strong> Haldiram – Nagpur Plant</strong> for <em>2 × 6 m kcal/h Heaters</em> & utilities.
            </li>
          </ul>

          <p className="projects-conclusion">
            With deep expertise and global project experience, <strong>VMSS</strong> is committed to delivering 
            technically superior, efficient, and sustainable thermal engineering solutions.
          </p>
        </section>

      </div>
    </div>
  );
}
