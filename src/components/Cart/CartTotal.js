import React from 'react'
import productsArray, { getProductsObject } from '../Products/productsArray'
import { keys } from 'lodash'

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            Total:
            {keys(productsInCart).reduce(
                (sum, id) =>
                    sum + productsInCart[id] * productsObject[id].price,
                0
            )}
            $
        </div>
    )
}
export default CartTotal
