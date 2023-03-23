import React from "react";
import { motion } from "framer-motion";
import { FaDiceD20, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

import { useContext } from "react";

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

  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      transition={{
        duration: 0.5,
        scale: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      variants={variants}
      initial="initial"
      animate="movement"
      className="Blobs"
      style={{ backgroundColor: blob.colour }}
      id={"blob" + blob.id}
      key={"blob" + blob.id}
    >
      {blob.id === 0 && <FaDiceD20 />}
      {blob.id === 1 && <FaHandHoldingHeart />}
      {blob.id === 2 && <FaBriefcase />}

      <h4>{blob.title}</h4>

      {/* <motion.svg></motion.svg> */}
    </motion.div>
  );
};

export default Blob;
