import { useState } from 'react'
import { motion } from 'framer-motion'
import { ModalContainer } from './components/Modal/ModalContainer'
import Modal from './components/Modal'

export default function App() {
  // setting animation type
  const [animation, setAnimation] = useState('dropIn')
  const handleAnimationType = e => setAnimation(e.target.value)

  // modal open and modal close
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div className="container">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="launch_modal_button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>

      <motion.select
        className="launch_modal_button"
        onChange={handleAnimationType}
      >
        <option value="dropIn">🪂 Drop in</option>
        <option value="flip">🛹 Flip</option>
        <option value="newspaper">🗞 Newspaper</option>
        <option value="badSuspension">🔩 Bad Suspension</option>
      </motion.select>

      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={animation}
            animation={animation}
            handleClose={close}
          />
        )}
      </ModalContainer>
    </div>
  )
}
