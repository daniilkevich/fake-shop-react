import React from 'react'
import CartTotal from '../Cart/CartTotal'
import CartProductList from '../Cart/CartProductList'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
