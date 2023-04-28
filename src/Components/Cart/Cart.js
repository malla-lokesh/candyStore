import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import candyContext from '../Store/Context';

const Cart = (props) => {

    const ctx = useContext(candyContext);

    let totalAmount = 0;

    const cartItems = <ul>{
        ctx.cartItems.map(item => {
            totalAmount = totalAmount + item.price * item.quantity;
            return <li key={item.name}>
                {item.name}-{item.price}x{item.quantity}
            </li>
        })
    }
    </ul>

    return (
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount: {totalAmount}</span>
            </div>
            <div>
                <button 
                    onClick={props.hideCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;