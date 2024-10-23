import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
    const [cartOpen, setCartOpen] = React.useState(false);

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Account</li>
            </ul>
            <FaShoppingCart className={`shop-cart-button ${cartOpen && 'active'}`}
                            onClick={() => setCartOpen(!cartOpen)}  />

            {cartOpen && (
                <div className={'shop-cart'}>
                    <h1>SHOP-CART</h1>
                </div>
            )};
        </div>
        <div className='presentation'></div>
    </header>
  )
}
