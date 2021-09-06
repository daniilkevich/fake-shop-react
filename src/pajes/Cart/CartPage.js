import React from 'react'
import { Typography } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
