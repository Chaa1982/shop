import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order key={el.id} item={el} />
        ))}
    </div>)
}

const showNothing = () => {
    return (<div className={'empty'}>
        <h2>The cart is empty</h2>
    </div>)
}



export const Header = (props) => {
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
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()
                    }

                </div>
            )};
        </div>
        <div className='presentation'></div>
    </header>
  )
}
