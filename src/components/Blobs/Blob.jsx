import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiceD20, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

const Blob = ({ blob }) => {
  const variantsBlob0 = {
    initial: {
      x: "-20%",
      opacity: 0,
    },
    movement: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
        delay: 1,
      },
    },
  };

  const variantsBlob1 = {
    initial: {
      x: "20%",
      opacity: 0,
    },
    movement: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
        delay: 2,
      },
    },
  };

  const variantsBlob2 = {
    initial: {
      x: "-20%",
      opacity: 0,
    },
    movement: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
        delay: 3,
      },
    },
  };

  if (blob.id === 0) var variants = variantsBlob0;
  if (blob.id === 1) var variants = variantsBlob1;
  if (blob.id === 2) var variants = variantsBlob2;

  useEffect(() => {});

  const { handleBlobSubmit } = useContext(AppContext);
  const { handleBackdropClick } = useContext(AppContext);

  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.5 }}
        variants={variants}
        initial="initial"
        animate="movement"
        className="Blobs"
        style={{ backgroundColor: blob.colour }}
        id={"blob" + blob.id}
        key={"blob" + blob.id}
        onClick={() => {
          handleBlobSubmit(blob.id);
        }}
      >
        {blob.id === 0 && <FaDiceD20 />}
        {blob.id === 1 && <FaHandHoldingHeart />}
        {blob.id === 2 && <FaBriefcase />}

        <h3>{blob.title}</h3>
        {/* <h4>{blob.subtitle}</h4> */}

        {/* <motion.svg></motion.svg> */}
      </motion.div>

      <motion.div
        className="backdrop"
        onClick={handleBackdropClick}
      ></motion.div>
    </AnimatePresence>
  );
};

export default Blob;
