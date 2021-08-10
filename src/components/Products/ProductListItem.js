
import React from "react"
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import './ProductListItem.css'
const ProductlistItem = (props) => {
    console.log(props)
    return <>
        <Card>
            <CardContent className="product">
                <h4>{props.name}</h4>
                <p>This is iPhone X</p>
                <p>Type: phone</p>
                <p>Capacity: 64GB</p>
                <div className="product-price">$ 500</div>
            </CardContent>
            <CardActions className="product-btn">
                    <Button variant="contained" color="primary">Add to Cart</Button>
                </CardActions>
        </Card>
    </>

    
}
export default ProductlistItem