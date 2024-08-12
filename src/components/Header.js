import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
  let prixtotale = 0
  props.orders.forEach(el =>  prixtotale += Number.parseFloat(el.prix))
    
  

  return (<div>
    {props.orders.map(el => (
      <div>
        <Order onDelete={props.onDelete} key={el.id} item={el} />
        
      </div>
    ))}
    <p className='prixtotale'> Prix totale : {Intl.NumberFormat().format(prixtotale)} euros</p>
  </div>
  )
}

const showNothing = () => {
  return (
    <div className='vide'>
      <h2>Votre panier est vide</h2>
    </div>
  )
}






export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='Logo'>Jsp Encore</span>
        <ul className='menu'>
          <li><a href='#'>Acceuil</a></li>
          <li><a href='#'>A propos</a></li>
          <li><a href='#'>Profil</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <FaShoppingBasket onClick={() => setCartOpen(!cartOpen)} className={`panier ${cartOpen && 'active'}`} />
        <span className="order-count">({props.orderCount})</span>
        {cartOpen && (
          <div className='cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}