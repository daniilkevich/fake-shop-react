import React from 'react'
import { keys } from 'lodash'
import productsArray from '../Products/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

console.log(productsObject)
console.log(productsArray)

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <div>
                {keys(productsInCart).map((id) => (
                    <div key={id}>
                        {productsObject[id].name} : {productsInCart[id]}
                    </div>
                ))}
            </div>
            <div>
                Total:
                {keys(productsInCart).reduce(
                    (sum, id) =>
                        sum + productsInCart[id] * productsObject[id].price,
                    0
                )}
                $
            </div>
        </div>
    )
}

export default CartHeader
