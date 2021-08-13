
import React from "react"
import { Button, Card, CardActions, CardContent, TextField } from '@material-ui/core'
import './ProductListItem.css'
import PropTypes from 'prop-types'; 

const ProductlistItem = ({name, description, type, capacity, price, image}) => {
    
    return <>
        <Card>
            <CardContent className="product">
                <div className="product-img">
                        <img src={image} alt={name} />
                    </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Type: {type}</p>
                <p>Capacity: {capacity}GB</p>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity"></div>
                <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField variant="outlined" size="small" value={1} />
                        <Button variant="outlined">+</Button>
                    </div>
            </CardContent>
            <CardActions className="product-btn">
                    <Button variant="contained" color="primary">Add to Cart</Button>
                </CardActions>
        </Card>
    </>

    
}
ProductlistItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type :PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string
}
ProductlistItem.defaultProps = {
    description: "No description ...",
}

export default ProductlistItem