import { useContext } from "react";
import { motion } from "framer-motion";

import AppContext from "../../AppContext";
import Blob from "../Blobs/Blob";

const HomePage = () => {
  const { blobs } = useContext(AppContext);

  // const testAnime = {
  //   start: { x: 0 },
  //   movement: { x: [60, 0, 0, 60, 0, -60] },
  // };

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

        {/* <motion.div
          variants={testAnime}
          initial="start"
          animate="movement"
          className="testBox"
        ></motion.div> */}
      </div>
    </div>
  );
};

export default HomePage;
