import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 3,
    })
    
    const addProductToCart = (count, price) => {
        
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart}  />
            <button onClick={() => addProductToCart(5, 1000)}>
                Add to cart
            </button>
            <Main addProductToCart={addProductToCart} />
        </>
    )
}
export default App
