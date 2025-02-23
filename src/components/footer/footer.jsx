import "./footer.css";
import logo from "../../assets/logo/logoBinabox.png";
import { ContactCommunity } from "../contactCommunity/contactCommunity";

export function Footer() {
  const valueTeam = [
    { linkedin: "#", facebook: "#", instagram: "#", telegram: "#", youtube: "#", twitter: "#" },
  ];

  return (
    <div>
      <ContactCommunity />
      <div className="container-footer">
        <div className="container-ghost"></div>
        <div className="container1-footer">
          <div className="container2-footer">
            <img src={logo} alt="BINABOX" />
            <p className="p-txt">
              We are the best way to check the rarity <br />
              of NFT collection.
            </p>
          </div>
          <div className="menu1">
            <h6 className="title-footer">SUBSCRIBE</h6>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Roadmap</li>
              <li>Our Team</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="menu1">
            <h6 className="title-footer">COMPANY</h6>
            <ul>
              <li>About Us</li>
              <li>Roadmap</li>
              <li>Testimonial</li>
              <li>Item Details</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="container-input">
            <h6 className="title-footer">SUBSCRIBE</h6>
            <form action="#" id="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                id="subscribe-email"
                className="input-email"
              />
              <button type="button" className="button2">
                <div className="span">
                  <span>WHITELIST NOW</span>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="border-footer">
          <p className="border-footer-txt">BINABOX 2022 - ALL rights reserved</p>
          <div className="social-icons-footer">
            {valueTeam.map((value, index) => (
              <div key={index} className="link-logo">
                <a href={value.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={value.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={value.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={value.telegram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href={value.youtube} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href={value.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
