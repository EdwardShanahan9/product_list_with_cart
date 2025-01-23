import { createContext, useState } from "react";

export const ButtonActiveContext = createContext();

export const ButtonActiveProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const buttonActive = () => setActive(true);

  return (
    <ButtonActiveContext.Provider value={{ active, buttonActive }}>
      {children}
    </ButtonActiveContext.Provider>
  );
};
