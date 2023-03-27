import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { motion, AnimatePresence } from "framer-motion";
import { FaDiceD20, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

const OverlayModal = () => {
  const { handleBackdropClick } = useContext(AppContext);
  const { selectedID } = useContext(AppContext);
  const { blobs } = useContext(AppContext);

  const blobData = blobs[selectedID];

  if (selectedID === null) return <></>;

  console.log("blobs:", blobs);
  // console.log(blobData.title);

  return (
    <div className="modal-container">
      {selectedID !== null && (
        <motion.div
          onClick={handleBackdropClick}
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}

      <motion.div
        layoutId={`blob-${blobData.id}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: blobData.colour }}
        className="BigBlobs"
      >
        {blobData.id === 0 && <FaDiceD20 />}
        {blobData.id === 1 && <FaHandHoldingHeart />}
        {blobData.id === 2 && <FaBriefcase />}

        <h3>{blobData.title}</h3>
        <h4>{blobData.subtitle}</h4>
        <p>{blobData.paraText1}</p>
        <p>{blobData.paraText2}</p>

        {blobData.id !== 2 && (
          <a href={blobData.link} target="_blank">
            <button
              className="modalButton"
              style={{ backgroundColor: blobData.colour }}
            >
              Click here to view
            </button>
          </a>
        )}
      </motion.div>

      {/*  */}
    </div>
  );
};

export default OverlayModal;
