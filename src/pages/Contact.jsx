import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div>
          <h3>📍 Our Office</h3>
          <p>Flat no. 12, E3 Popular Nagar,
             Warje Malwadi, Pune 411 058</p>
        </div>

        <div>
          <h3>📞 Call Us</h3>
          <p>Mr. Vivek Sathaye</p>
          <p>+91 98230 50490</p>
          <br></br>
          <p>Mr. Avadhoot Khandare</p>
          <p>+91 87936 02197</p>
          
        </div>

        <div>
          <h3>📧 Email</h3>
          <p>sathayev@hotmail.com</p>
          <p>avadhoot.khandare@gmail.com</p>
        </div>
      </div>

      
    </div>
  );
}
