import './HeaderCartButton.css'

const HeaderCartButton = (props) => {
    return (
        <button 
            className='cartButton'
            onClick={props.showCart}>
            Your Cart
        </button>
    )
};

export default HeaderCartButton;