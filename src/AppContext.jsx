import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [blobs, setBlobs] = useState([
    {
      id: 0,
      title: "Easier Combat for GM's",
      colour: "#c5f0fc",
    },
    {
      id: 1,
      title: "Mood Graph Generator",
      colour: "rgb(255, 181, 138)",
    },
    {
      id: 2,
      title: "Prototype Web App for Startups",
      colour: "#fbd9fc",
    },
  ]);

  return (
    <AppContext.Provider value={{ blobs }}>{children}</AppContext.Provider>
  );
}

export default AppContext;
