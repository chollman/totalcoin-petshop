import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'

const OrderItem = ({ petsByUser, order, index }) => {
  const pet = petsByUser.find((pet) => order.petId === pet.id)
  if (!pet) {
    return
  }
  return (
    <div className='order'>
      <div>{index + 1}.</div>
      <div>{order.date}</div>
      <div>
        Combo para {pet?.race}: {pet?.name} de {order.amount} kg de comida y{' '}
        {order.complement1 + order.complement2} complementos dietarios
      </div>
      <div
        className={order.delivered ? 'order-status delivered' : 'order-status'}
      >
        <AiFillCheckSquare />
      </div>
    </div>
  )
}

export default OrderItem
