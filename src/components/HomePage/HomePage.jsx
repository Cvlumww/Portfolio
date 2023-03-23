import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import AppContext from "../../AppContext";
import Blob from "../Blobs/Blob";

const HomePage = () => {
  const { blobs } = useContext(AppContext);

  return (
    <div className="Main-Container">
      <div className="Main">
        <p>
          <a href="https://github.com/Cvlumww/" target="_blank">
            Calum F Wardrop
          </a>{" "}
          - Software Engineer
        </p>
        <h1>I create technical solutions to real world problems</h1>
        <p>
          Email <a href="mailto:contact@calum.work">contact@calum.work</a> to
          get in touch
        </p>
      </div>

      <div className="Blobs-Showcase">
        {blobs.map((blob) => {
          return <Blob blob={blob} key={"blob" + blob.id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
