import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import Quantity from '../Quantity/Quantity'
const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 20,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
    btnDelete: {
        marginTop: 20,
    },
})
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img
                        src={product.image}
                        alt={product.description}
                        className={classes.media}
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item {product.price}</p>
                    <p>Count : {productCount}</p>
                    <Button
                        variant="contained"
                        onClick={() => removeProductFromCart(product.id)}
                        className={classes.btnDelete}
                    >
                        <DeleteIcon />
                    </Button>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
