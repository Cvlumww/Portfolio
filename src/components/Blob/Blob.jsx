import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { FaDiceD20, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Blob = ({ blob }) => {
  const { handleBlobSubmit } = useContext(AppContext);
  return (
    <motion.div
      layoutId={`blob-${blob.id}`}
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
    </motion.div>
  );
};

export default Blob;
