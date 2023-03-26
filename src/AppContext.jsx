import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [blobs, setBlobs] = useState([
    {
      id: 0,
      title: "Easier Combat for GM's",
      colour: "#c5f0fc",
      subtitle: "A combat tracker for Dungeons & Dragons",
      paraText1:
        "As an active DnD player I noticed that my friend who DMs was using a notepad file on his computer to keep track of all of the characters. I knew I could develop something to help him.",
      paraText2:
        "This web app helps track initiative, heal and damage NPC's, includes death saving throws for NPC's whos HP is lower than 0 and much more! I developed this web app to be the ultimate GM's best friend, to take care of all of the minute details involved in tracking DnD combat and let them focus on the story and having fun",
    },
    {
      id: 1,
      title: "Mood Graph Generator",
      colour: "rgb(255, 181, 138)",
      subtitle: "A way to visualise your feelings",
      paraText1:
        "This website combines the usage of two different React libraries to create this mood graph generator. The idea behind the website is to help people in therapy or out of therepy visualise how they feel.",
      paraText2:
        "The idea came to me while I was speaking to a close friend who was in therapy at the time and said that each week they were asked to write down on a scale of 1 to 10 how they felt over the week but when the numbers were written down, they were just numbers. There was no connection to moods or emotions. Thats why I decided to try to help. With this web app users can visualise their highs and lows and pass the generated images to the medical professionals to better explain how they have felt and how the events of the week affected them.",
    },
    {
      id: 2,
      title: "Prototype Web Apps for Startups",
      colour: "#fbd9fc",
      subtitle: "A way to show off the business idea to early clients",
      paraText1:
        "I was approached to build a mock website that helped the client convey the idea they had of their business. This is great as ",
      paraText2: "",
    },
  ]);

  const [selectedID, setSelectedID] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleBlobSubmit = (id) => {
    setShowModal(true);
    setSelectedID(id);
    // if (id === null) console.log(selectedID);
    console.log(id);
  };

  const handleBackdropClick = () => {
    setShowModal(false);
    setSelectedID(null);
  };

  return (
    <AppContext.Provider
      value={{
        blobs,
        handleBlobSubmit,
        handleBackdropClick,
        showModal,
        selectedID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
