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
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {productsObject[id].name} : {productsInCart[id]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
