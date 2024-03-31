"use client";

import { useContext, createContext, useState } from "react";

const DirectoryContext = createContext();

export const useDirectoryContext = () => {
  return useContext(DirectoryContext);
}

const DirectoryContextProvider = ({ children }) => {
  const [directory, setDirectory] = useState("/help");
  return (
    <DirectoryContext.Provider value={{ setDirectory, directory }}>
      {children}
    </DirectoryContext.Provider>
  );
};

export default DirectoryContextProvider