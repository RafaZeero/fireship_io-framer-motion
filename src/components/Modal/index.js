import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'
import { dropIn } from '../../animations/DropIn'
import { badSuspension } from '../../animations/BadSuspension'
import { flip } from '../../animations/Flip'
import { newspaper } from '../../animations/Newspaper'
import { ModalButton } from './ModalButton'
import { ModalText } from './ModalText'

const Modal = ({ handleClose, text, animation }) => {
  return (
    <Backdrop onClick={handleClose}>
      {animation === 'dropIn' && (
        <motion.div
          onClick={e => e.stopPropagation()} // Prevent click from closing modal
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {animation === 'flip' && (
        <motion.div
          onClick={e => e.stopPropagation()}
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {animation === 'newspaper' && (
        <motion.div
          onClick={e => e.stopPropagation()}
          className="modal orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {animation === 'badSuspension' && (
        <motion.div
          onClick={e => e.stopPropagation()}
          className="modal orange-gradient"
          variants={badSuspension}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />

          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}
    </Backdrop>
  )
}

export default Modal
