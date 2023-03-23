import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [blobs, setBlobs] = useState([
    {
      id: 0,
      title: "Easier Combat for GM's",
      colour: "#c5f0fc",
      subtitle: "A combat tracker for Dungeons & Dragons",
      paraText1: "",
      paraText2: "",
    },
    {
      id: 1,
      title: "Mood Graph Generator",
      colour: "rgb(255, 181, 138)",
      subtitle: "A way to visualise your feelings",
      paraText1: "",
      paraText2: "",
    },
    {
      id: 2,
      title: "Prototype Web Apps for Startups",
      colour: "#fbd9fc",
      subtitle: "A way to show off the business idea to early clients",
      paraText1: "",
      paraText2: "",
    },
  ]);

  const [selectedID, setSelectedID] = useState(null);

  const handleBlobSubmit = (id) => {
    setSelectedID(id);
  };

  const handleBackdropClick = () => {
    setSelectedID(null);
  };

  return (
    <AppContext.Provider
      value={{ blobs, handleBlobSubmit, handleBackdropClick }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
