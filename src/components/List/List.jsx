import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { motion, AnimatePresence } from "framer-motion";

import Blob from "../Blob/Blob";

export default function List() {
  const { blobs } = useContext(AppContext);

  return (
    <div>
      <AnimatePresence>
        {blobs.map((blob) => {
          return <Blob blob={blob} key={"blob" + blob.id} />;
        })}
      </AnimatePresence>
    </div>
  );
}
