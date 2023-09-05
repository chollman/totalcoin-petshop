import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'

const OrderItem = ({ pets, users, order, index, handleDeliveryClicked }) => {
  const pet = pets.find((pet) => order.petId === pet.id)
  if (!pet) {
    return
  }
  const customer = users?.find((user) => order.customerId === user.id)

  return (
    <div className='order'>
      <div>{index + 1}.</div>
      <div>{order.date}</div>
      <div>
        Combo para {pet?.race}: {pet?.name} de {order.amount} kg de comida y{' '}
        {order.complement1 + order.complement2} complementos dietarios
      </div>
      {customer && <div>Cliente: {customer.name}</div>}
      {handleDeliveryClicked && (
        <div
          className={
            order.delivered ? 'order-status delivered' : 'order-status'
          }
          onClick={() => handleDeliveryClicked(order.id)}
        >
          <AiFillCheckSquare />
        </div>
      )}
      {!handleDeliveryClicked && (
        <div
          className={
            order.delivered ? 'order-status delivered' : 'order-status'
          }
        >
          <AiFillCheckSquare />
        </div>
      )}
    </div>
  )
}

export default OrderItem
