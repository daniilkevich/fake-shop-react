import React from 'react'
import productsArray, { getProductsObject } from '../Products/productsArray'
import { keys } from 'lodash'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    return (
        <>
            {keys(productsInCart).map((id) => (
                <CartItem
                    key={id}
                    product={productsObject[id]}
                    productCount={productsInCart[id]}
                />
            ))}
        </>
    )
}

export default CartProductList
