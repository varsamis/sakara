import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("cz");

  return (
    <GlobalContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>{props.children}</GlobalContext.Provider>
  );
};

export default AppContext;
