import { deleteCard, updateCard } from '../cards-slice'

import { CardsSelector, useAppDispatch, useAppSelector, userIdSelector } from 'common'

export const useTableCardsBody = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(CardsSelector)
  const myProfileId = useAppSelector(userIdSelector)
  const deleteCurrentCard = (idCard: string) => {
    dispatch(deleteCard({ id: idCard }))
  }
  const updateCurrentCard = (idCard: string) => {
    const updateCurrentPack = {
      _id: idCard,
      question: 'question updated',
    }

    dispatch(updateCard(updateCurrentPack))
  }

  const redactorData = (data: string) => {
    return data
      .slice(0, -14)
      .replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')
      .replace(/-/g, '.')
  }

  return { redactorData, updateCurrentCard, deleteCurrentCard, myProfileId, cards }
}
