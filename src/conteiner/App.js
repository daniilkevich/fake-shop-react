import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 3,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: (productsInCart[id] || 0) + count,
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 5)}>Add to cart</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </>
    )
}
export default App
