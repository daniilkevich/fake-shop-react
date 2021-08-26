import React from 'react'
import { keys } from 'lodash'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((id) => (
                <div>
                    {id} : {productsInCart[id]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
