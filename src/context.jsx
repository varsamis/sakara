import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("cz");
  const [moreAbout, setMoreAbout] = useState(false);
  const [moreCranio, setMoreCranio] = useState(false);
  const [moreQualification, setMoreQualification] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        moreAbout,
        setMoreAbout,
        moreCranio,
        setMoreCranio,
        moreQualification,
        setMoreQualification,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
