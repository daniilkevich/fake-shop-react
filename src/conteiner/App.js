import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
    })
    const addProductToCart = (count, price) => {
        setCartData({
            totalCount: cartData.totalCount + count,
            totalPrice: cartData.totalPrice + count * price,
        })
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductToCart(5, 1000)}>
                Add to cart
            </button>
            <Main addProductToCart={addProductToCart} />
        </>
    )
}
export default App
