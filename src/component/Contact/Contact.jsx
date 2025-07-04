import "./Contact.css";
import "../MainContent/MainContent.css";
function Contact() {
  return (
    <div className="container">
      <div className="card cantact-card">
        <div className="contact-div">
          <a
            className="contact-btn"
            href="mailto:jeyajothi108@gmil.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/email logo.svg" className="btn-img" alt="email" />
          </a>
          <div className="detail-txt">jeyajothi108@gmail.com</div>
        </div>
        <div className="contact-div">
          <a
            className="contact-btn"
            href="https://github.com/Jeya-Jothi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/github logo.svg"
              className="btn-img"
              alt="github"
            />
          </a>
          <div className="detail-txt">Github</div>
        </div>
        <div className="contact-div">
          <a
            className="contact-btn"
            href="https://www.linkedin.com/in/jeya-jothi-841277211"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/linkedin logo.svg"
              className="btn-img"
              alt="linkedin"
            />
          </a>
          <div className="detail-txt">Linkedin</div>
        </div>
        <div className="contact-div">
          <a
            className="contact-btn portfolio-btn"
            href="https://jothi-portfolio-9utu.onrender.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/portfolio logo.svg"
              className="btn-img"
              alt="portfolio"
            />
          </a>
          <div className="detail-txt">Portfolio</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
