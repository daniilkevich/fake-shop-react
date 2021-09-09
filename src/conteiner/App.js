import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 3,
    })
    const [likeButtonsState, setLikeButtonsState] = useState({
        1: true,
        2: true,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: (productsInCart[id] || 0) + count,
        })
    }

    const removeProductFromCart = (id) => {
        const prevProductsInCart = { ...productsInCart }
        delete prevProductsInCart[id]
        return setProductsInCart(prevProductsInCart)
    }
    const changeProductQuantity = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: count,
        })
    }

    const changeLike = (id) => {
        setLikeButtonsState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                changeLike={changeLike}
                likeButtonsState={likeButtonsState}
            />
        </>
    )
}
export default App
