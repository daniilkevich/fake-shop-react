import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ProductlistItem from './ProductListItem'
import productsArray from './productsArray'

const useStyles = makeStyles({
    h1: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

const ProductsList = ({ addProductToCart, changeLike, likeButtonsState }) => {
    const classes = useStyles()
    return (
        <>
            <Typography
                variant="h5"
                component="h1"
                align="center"
                className={classes.h1}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductlistItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                                changeLike={changeLike}
                                isLiked={likeButtonsState[id]}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
