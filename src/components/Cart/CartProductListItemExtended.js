import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
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
})
const CartProductListItemExtended = ({ product, productCount }) => {
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
                    <p>Price for one item</p>
                    <p>Count : {productCount}</p>
                    <Button variant="contained">
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
