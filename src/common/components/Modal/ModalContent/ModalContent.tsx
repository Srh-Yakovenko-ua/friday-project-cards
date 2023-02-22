import React from 'react'

import { MODAL_TYPE } from '../../../constants'
import { useAppSelector } from '../../../hooks'
import { modalTypeSelector } from '../../../selectors'

import { AddNewPackModal, DeletePackModal, EditPackModal } from 'features'

export const ModalContent: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const typeModal = useAppSelector(modalTypeSelector)

  return (
    <>
      {typeModal === MODAL_TYPE.addNewPack && <AddNewPackModal closeModal={closeModal} />}
      {typeModal === MODAL_TYPE.editCurrentPack && <EditPackModal closeModal={closeModal} />}
      {typeModal === MODAL_TYPE.deleteCurrentPack && <DeletePackModal closeModal={closeModal} />}
    </>
  )
}
