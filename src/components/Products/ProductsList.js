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
                    <ProductlistItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    Products 2
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    Products 3
                </Grid>
            </Grid>
            
            
        </>
    )
}
export default ProductsList