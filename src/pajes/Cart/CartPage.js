import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
import CartProductListItemExtended from '../../components/Cart/CartProductListItemExtended'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartPage
