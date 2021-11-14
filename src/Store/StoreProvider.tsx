import { createContext, FC, useState } from "react";

interface Store {
  hexValue: string;
  setHexValue: (s: string) => void;
}

export const StoreContext = createContext<Store>({
  hexValue: "",
  setHexValue: () => {},
});

const StoreProvider: FC = ({ children }) => {
  const [hexValue, setHexValue] = useState<string>("000000");
  return (
    <StoreContext.Provider value={{ hexValue, setHexValue }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
