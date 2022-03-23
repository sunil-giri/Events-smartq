import "./cart.scss"
import React, { useContext } from 'react'
import { GlobalContext } from "../../context"
import {BsTrash} from "react-icons/bs"

function Cart() {
  const {cartData,setCartData}=useContext(GlobalContext)
  console.log(cartData,setCartData)
  return (
    <div className="cart-main">
        <div className="cart-header">
            <p>Cart Summary</p>
            <button className="delete-cart p-2"><BsTrash/></button>
        </div>
        {cartData.items.length>0?
        <>
        <div className="cart-items">
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
          {
            cartData.items && cartData.items.map((val)=>{
              return (<div>
                        <p>val.item</p>
                        <p>val.quantity</p>
                        <p>val.price</p>
                      </div>
                      )
            })
          }
        </div>
        <div className="total">
          <p>Total:$120</p>
        <button className="btn btn-primary px-3">Proced to Checkout</button>
        </div>
        </>
        :<p className="text-secondary">Cart Empty</p>}
    </div>
  )
}

export default Cart