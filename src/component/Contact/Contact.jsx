import "./Contact.css";
import "../MainContent/MainContent.css";
import { useState } from "react";
function Contact() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="container">
      <div className="card cantact-card">
        <div
          className="contact-div"
          onMouseOver={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
        >
          <button className="contact-btn">
            <img src="/images/email logo.svg" className="btn-img" alt="email" />
          </button>
          <div className={`popup${hovered === "email" ? "show" : ""}`}>
            <p>jeyajothi108@gmail.com</p>
          </div>
        </div>
        <div
          className="contact-div"
          onMouseOver={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        >
          <button className="contact-btn">
            <img
              src="/images/github logo.svg"
              className="btn-img"
              alt="email"
            />
          </button>
          <div className={`popup${hovered === "github" ? "show" : ""}`}>
            Github
          </div>
        </div>
        <div
          className="contact-div"
          onMouseOver={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
        >
          <button className="contact-btn">
            <img
              src="/images/linkedin logo.svg"
              className="btn-img"
              alt="email"
            />
          </button>
          <div className={`popup${hovered === "linkedin" ? "show" : ""}`}>
            Linkedin
          </div>
        </div>
        <div
          className="contact-div"
          onMouseOver={() => setHovered("portfolio")}
          onMouseLeave={() => setHovered(null)}
        >
          <button className="contact-btn portfolio-btn">
            <img
              src="/images/portfolio logo.svg"
              className="btn-img"
              alt="email"
            />
          </button>
          <div className={`popup${hovered === "portfolio" ? "show" : ""}`}>
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
