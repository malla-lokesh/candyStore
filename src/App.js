import React, { useState } from 'react';

import Form from './Components/Form/Form';
import ContextProvider from './Components/Store/ContextProvider';
import Items from './Components/Items/Items';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <ContextProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <div className='mainContet'>
        <Form></Form>
        <Items></Items>
      </div>
    </ContextProvider>
  );
}

export default App;
