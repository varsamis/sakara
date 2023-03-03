import React, { useState } from "react";
import emailjs from "emailjs-com";
import englishFlag from "./assets/UK.png";
import czechFlag from "./assets/CZ.png";
import { texts } from "./data";

function UnderConstruction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("cz");

  function LanguageToggle() {
    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.id === "en" ? "en" : "cz");
    };

    return (
      <div className="select-lang" onClick={handleLanguageChange}>
        {selectedLanguage === "en" ? (
          <img src={czechFlag} alt="Czech" id="cz" />
        ) : (
          <img src={englishFlag} alt="English" id="en" />
        )}
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setSendError(null);
    setSendSuccess(false);
    emailjs.sendForm("service_sg4hyal", "template_l8ap16n", event.target, "ZWkxLTNC0lQNcQIa3").then(
      (result) => {
        setIsSending(false);
        setSendSuccess(true);
      },
      (error) => {
        setIsSending(false);
        setSendError(error);
      }
    );
  };

  return (
    <>
      <LanguageToggle />
      <h1>{texts[selectedLanguage].h1}</h1>
      {texts[selectedLanguage].p_main.map((p, index) => {
        return <p key={index}>{p}</p>;
      })}

      <form className="grid" onSubmit={handleSubmit}>
        <label className="grid-label" htmlFor="name">
          {texts[selectedLanguage].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="grid-input"
          placeholder={texts[selectedLanguage].namePh}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="grid-label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="grid-input"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="grid-label" htmlFor="subject">
          {texts[selectedLanguage].subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="grid-input"
          placeholder={texts[selectedLanguage].subjectPh}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label className="grid-label" htmlFor="message">
          {texts[selectedLanguage].message}
        </label>
        <textarea
          id="message"
          name="message"
          className="grid-input"
          rows="5"
          placeholder={texts[selectedLanguage].messagePh}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="send">
          {isSending ? <p>{texts[selectedLanguage].sending}</p> : <button type="submit">Send</button>}
          {sendSuccess && <p>{texts[selectedLanguage].success}</p>}
          {sendError && (
            <p>
              {texts[selectedLanguage].error}
              {sendError.message}
            </p>
          )}
        </div>
      </form>
      <div className="footer">
        <a href="https://www.flaticon.com" title="flaticon icons">
          icons created by Freepik - Flaticon
        </a>
      </div>
    </>
  );
}

export default UnderConstruction;
