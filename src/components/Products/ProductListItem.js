
import React from "react"
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import './ProductListItem.css'
const ProductlistItem = (props) => {
    console.log(props)
    return <>
        <Card>
            <CardContent className="product">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <p>Type: {props.type}</p>
                <p>Capacity: {props.capacity}GB</p>
                <div className="product-price">$ {props.price}</div>
            </CardContent>
            <CardActions className="product-btn">
                    <Button variant="contained" color="primary">Add to Cart</Button>
                </CardActions>
        </Card>
    </>

    
}
export default ProductlistItem