import React, { useContext, useState } from 'react';
import './Form.css';
import candyContext from '../Store/Context';
import Card from '../UI/Card';

const Form = () => {
    const [candyName, setCandyName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const ctx = useContext(candyContext);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const item = {
            name: candyName,
            description: description,
            price: price
        }
        ctx.addItem(item);
        setCandyName('');
        setDescription('');
        setPrice('');
    }

    return (
        <Card>
            <form onSubmit={formSubmitHandler}>
                <label>Candy Name</label>
                <input 
                    type="text"
                    value={candyName}
                    onChange={(e) => setCandyName(e.target.value)}/>
                <label>Description</label>
                <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <label>Price</label>
                <input 
                    type="number" 
                    min={1}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                <button className='btn'>Add</button>
            </form>
        </Card>
    );
}

export default Form;