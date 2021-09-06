import React from 'react'
import productsArray, { getProductsObject } from '../Products/productsArray'
import { keys } from 'lodash'

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {productsObject[id].name} : {productsInCart[id]}
                </div>
            ))}
        </div>
    )
}

export default CartProductList
