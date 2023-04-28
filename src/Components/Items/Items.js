import React, { useContext } from "react";
import candyContext from "../Store/Context";
import './Items.css';

const Items = () => {
    const ctx = useContext(candyContext);

    return (
        <React.Fragment>
            {ctx.items.map((item) => {
                return (
                    <ul key={item.name}>
                        <li key={item.name}>{item.name} - {item.description} - ${item.price}
                            <br />
                            <div className='textDiv'>How many do you want?</div>
                            <button 
                                className="itemQuantityBtn"
                                onClick={() => ctx.addItemToCart({...item, quantity: 1})}>1</button>
                            <button 
                                className="itemQuantityBtn"
                                onClick={() => ctx.addItemToCart({...item, quantity: 2})}>2</button>
                            <button 
                                className="itemQuantityBtn"
                                onClick={() => ctx.addItemToCart({...item, quantity: 3})}>3</button>
                        </li>
                    </ul>
                )
            })}
        </React.Fragment>
    )
};

export default Items;