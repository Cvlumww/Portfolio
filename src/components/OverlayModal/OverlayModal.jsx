import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { motion, AnimatePresence } from "framer-motion";
// import { FaDiceD20, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";

const OverlayModal = () => {
  const { showModal } = useContext(AppContext);
  const { handleBackdropClick } = useContext(AppContext);
  const { selectedID } = useContext(AppContext);
  const { blobs } = useContext(AppContext);

  // const blobData = blobs[selectedID];
  const blobData = blobs[selectedID];

  if (!selectedID) return <></>;

  console.log(blobData.title);

  if (selectedID === 0) console.log(blobData.title);
  if (selectedID === 1) console.log(blobData.title);
  if (selectedID === 2) console.log(blobData.title);

  return (
    <>
      {showModal && (
        <div onClick={handleBackdropClick} className="backdrop"></div>
      )}

      <motion.div
        layoutId={`blob-${blobData.id}`}
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        style={{ backgroundColor: blobData.colour }}
        className="BigBlobs"
      >
        <h3>{blobData.title}</h3>
        <h4>{blobData.subtitle}</h4>
        <p>{blobData.paraText1}</p>
        <p>{blobData.paraText2}</p>
      </motion.div>

      {/*  */}
    </>
  );
};

export default OverlayModal;
