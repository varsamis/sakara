import { useState } from "react";
import englishFlag from "../assets/UK.svg";
import czechFlag from "../assets/CZ.svg";
import { useGlobalContext } from "../context";
import {Box, Container} from "@mui/material";

const LanguageSwitch = () => {
  const { selectedLanguage, setSelectedLanguage } = useGlobalContext();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.id === "en" ? "en" : "cz");
  };

  return (
      <Box>
        <div className="select-lang" onClick={handleLanguageChange}>
          {selectedLanguage === "en" ? (
              <img src={czechFlag} alt="Czech" id="cz" />
          ) : (
              <img src={englishFlag} alt="English" id="en" />
          )}
        </div>
      </Box>

  );
};
export default LanguageSwitch;
