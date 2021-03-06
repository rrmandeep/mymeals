import React from 'react';
import classes from './Cart.module.css'
const Cart = (props) => {
  const cartItems = <ul className={classes['cart-item']}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}
        ].map((item) => <li>{item.name}</li>)}</ul>
  return(
    <div className={classes['cart-item']}>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  )
}

export default Cart;