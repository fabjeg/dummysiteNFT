import "./contact.css";
import { useNavigate } from "react-router-dom";
import location from "../../assets/logo/loaction.svg";
import email from "../../assets/logo/email.svg";
import phone from "../../assets/logo/phone.svg";

export function Contact() {
  const navigate = useNavigate();

  const data = [
    {
      logo: location,
      title: "Location",
      content: "2163 Phillips Gap Rd West Jefferson",
    },
    { logo: email, title: "Email", content: "Info.avitex@gmail.com" },
    { logo: phone, title: "Phone", content: "+1 666 8888" },
  ];

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container-collection">
        <h5 className="title-h5">Contact</h5>
        <div className="span-collection">
          <a className="home-collection" onClick={handleHomeClick}>
            HOME
          </a>
          <span className="col-collection">CONTACT</span>
        </div>
      </div>

      <div className="container-contact">
        {data.map((contact, contactId) => (
          <div className="contact-square" key={contactId}>
            <img src={contact.logo} alt={contact.title} />
            <strong className="contact-strong">{contact.title}</strong>
            <span className="contact-span">{contact.content}</span>
          </div>
        ))}
      </div>

      <div className="container-form">
        <div className="title-contact">
          <h6 className="title-h6">Get In Touch</h6>
          <p className="p-txt">
            Browse through the most frequently asked questions
          </p>
        </div>
        <form className="form">
  <div className="input-group">
    <label>
      <input required type="text" className="input" placeholder="Name" />
    </label>

    <label>
      <input required type="email" className="input" placeholder="Enter your email" />
    </label>
  </div>

  <label>
    <input required type="tel" className="input" placeholder="Phone Number" />
  </label>

  <label>
    <textarea className="input" placeholder="Message"></textarea>
  </label>

  <button type="submit" className="style_button2">
    SEND MESSANGER
  </button>
</form>

      </div>
    </div>
  );
}
