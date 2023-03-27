import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
import List from "../List/List";
import Modal from "../OverlayModal/OverlayModal";

const HomePage = () => {
  const { selectedID } = useContext(AppContext);

  const subtitleVariants = {
    initial: {
      x: "-20%",
      opacity: 0,
    },
    movement: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        damping: 25,
        stiffness: 500,
        delay: 1,

        delayChildren: 1,
      },
    },
  };

  return (
    <div className="Main-Container">
      <div className="Main">
        <motion.p
          variants={subtitleVariants}
          initial="initial"
          animate="movement"
        >
          <a href="https://github.com/Cvlumww/" target="_blank">
            Calum F Wardrop
          </a>{" "}
          - Software Engineer
        </motion.p>
        <h1>I create technical solutions to real world problems</h1>
        <motion.p
          variants={subtitleVariants}
          initial="initial"
          animate="movement"
        >
          Email <a href="mailto:contact@calum.work">contact@calum.work</a> to
          get in touch
        </motion.p>
      </div>
      <div className="Blobs-Showcase">
        <List />
        <Modal />
      </div>
    </div>
  );
};

export default HomePage;
