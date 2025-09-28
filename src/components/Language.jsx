import { useRef, useState } from "react";
import useClickOutside from "../hooks/hook";

function Language({ currentLanguage, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useClickOutside(divEl, () => setIsOpen(false));

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={divEl} className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage === "en-US" ? "English" : "Русский"}{" "}
        <i className="bi bi-chevron-down"></i>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleSelect("en-US")}>English</li>
          <li onClick={() => handleSelect("ru-RU")}>Русский</li>
        </ul>
      )}
    </div>
  );
}

export default Language;
