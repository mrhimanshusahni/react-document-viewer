import { createContext, useState } from "react";

import { DocumentFileType } from "../types";

const CurrentFileContext = createContext({});

const CurrentFileContextLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentFile, setCurrentFile] = useState<DocumentFileType>();

  const value = {
    currentFile,
    setCurrentFile,
    currentFileNumber: 0,
  };

  return (
    <CurrentFileContext.Provider value={value}>
      {children}
    </CurrentFileContext.Provider>
  );
};

export { CurrentFileContext, CurrentFileContextLayout };
