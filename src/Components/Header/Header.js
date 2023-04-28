import './Header.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <header>
            <h1>
                Candy Store
            </h1>
            <HeaderCartButton showCart={props.showCart}/>
        </header>
    )
};

export default Header;