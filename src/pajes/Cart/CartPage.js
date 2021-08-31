import { Typography } from '@material-ui/core'
import React from 'react'
import { keys } from 'lodash'
import productsArray from '../../components/Products/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Cart
            </Typography>
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
        </>
    )
}
export default CartPage
