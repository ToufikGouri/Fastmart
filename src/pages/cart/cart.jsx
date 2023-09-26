import React from 'react'
import { useCart } from '../../context/cart'
import './cart.css'
import { Link } from 'react-router-dom';
import cartImg from './emptyCart.png'

const Cart = () => {

  const Shipping_Charge = 40;
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }
  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }

  return (
    <>
      {/* <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="failed to load image" className="empty-cart"> */}

      {cart.length >= 1 ? (
        <div className='container '>
          <h2 className='my-2' >Your Cart</h2>
          <div className="cart-containerX d-flex flex-wrap my-4 "> {/* X at the end of class means it doesn't have it's own css (just an empty container) */}
            <div className="allCartItems">

              {cart.map((item) => (
                <div className="card mb-3 cartCard" key={item.product.id} style={{ maxWidth: "900px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 ">
                      <img src={item.product.image} className="img-fluid rounded-start cart-image" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <Link to={`/product/${item.product.id}`} className="card-title cart-title">{item.product.title}</Link>
                        <p style={{ fontSize: "20px" }}>Price: <b> ${round(item.product.price * item.quantity, 2)} </b></p>
                        <div className="allButtons">
                          <div className="d-flex extra-containerX">

                            <button className='btn btn-primary me-4'
                              onClick={() => decreaseQuantity(item.product.id)}
                              disabled={item.quantity === 1}
                            > - </button>

                            <p>{item.quantity}</p>

                            <button className='btn btn-primary mx-4'
                              onClick={() => increaseQuantity(item.product.id)}
                            > + </button>
                          </div>

                          <button className='btn btn-primary removeItem d-flex align-items-center ' onClick={() => removeFromCart(item.product.id)} >Remove <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                          </svg></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='paymentX mx-auto'>
              <h2>Payment Summary</h2>
              <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item my-2 d-flex justify-content-between"><span>Subtotal: </span><span className='payment-items'>${round(cartTotal(), 2)}</span></li>
                  <li className="list-group-item my-2 d-flex justify-content-between"><span>Shipping Fee: </span><span className='payment-items'>${Shipping_Charge}</span></li>
                  <li className="list-group-item my-2 d-flex justify-content-between"><span>Total: </span><span className='payment-items'>${round(cartTotal() + Shipping_Charge, 2)}</span></li>
                  <li className="list-group-item my-2 ">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed to Buy </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">This option will come soon!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Till then please explore more products {':)'}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex flex-column align-items-center text-center">
          <img src={cartImg} />
          <h3>Your cart is empty</h3>
          <p>Looks like you have not added anything to your cart. Go ahead & explore top categories.</p>
        </div>
      )}
    </>
  )
}

export { Cart }