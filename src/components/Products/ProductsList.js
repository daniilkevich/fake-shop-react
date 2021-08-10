import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ProductlistItem from './ProductListItem'

const useStyles = makeStyles({
    h1: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})


const ProductsList = () => {
   const classes = useStyles() 
    return (
        <>
         <Typography variant="h5" component="h1" align="center" className={classes.h1}>Products List</Typography>
             <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductlistItem name="iPhone X" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductlistItem name="iPhone XS" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductlistItem name="iPhone 12" />
                </Grid>
            </Grid>
            
            
        </>
    )
}
export default ProductsList