import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useRef, useState, useEffect } from "react";
import useClickOutside from "../hooks/hook";
import Language from "./Language";

function Header({ language, setLanguage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [extendedBar, setExtendedBar] = useState(false);

  const navigate = useNavigate();
  const divEl = useRef();
  const inputRef = useRef();

  useClickOutside(divEl, () => {
    setExtendedBar(false);
    setSearchTerm("");
  });

  useEffect(() => {
    if (extendedBar && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [extendedBar]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setExtendedBar(false);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (!extendedBar) {
      setExtendedBar(true);
    } else if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setExtendedBar(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setExtendedBar(false);
      setSearchTerm("");
    }
  };

  

  return (
    <div className="header">
      <Link to="/">
        <img
          onClick={() => {
            setExtendedBar(false);
            setSearchTerm("");
          }}
          className="header-logo"
          src={logo}
          alt="Netflix Logo"
        />
      </Link>

      <form
        ref={divEl}
        onSubmit={handleSearch}
        className={`searchbar ${extendedBar ? "extended" : ""}`}
      >
        <i className="bi bi-search" onClick={handleSearchClick}></i>

        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Titles, people, genres"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{
            opacity: extendedBar ? 1 : 0,
            pointerEvents: extendedBar ? "auto" : "none",
            width: extendedBar ? "auto" : "0",
          }}
        />

       
      </form>

      <Language currentLanguage={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Header;
import React from 'react'