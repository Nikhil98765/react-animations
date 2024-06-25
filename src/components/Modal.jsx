import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  // * Storing animation states in a variable and reuse it.
  // const hiddenAnimationState = { y: 30, opacity: 0 };
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        transition={{
          type: "spring",
        }}
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          // destroyed: { y: 30, opacity: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
