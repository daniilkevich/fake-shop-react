import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@material-ui/core'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

const ProductlistItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}) => {
    const [count, setCount] = useState(1)
    return (
        <>
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
                        <Button
                            variant="outlined"
                            onClick={() => setCount(count - 1)}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField
                            variant="outlined"
                            size="small"
                            value={count}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => setCount(count + 1)}
                            disabled={count >= 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addProductToCart(count, price)}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
ProductlistItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}
ProductlistItem.defaultProps = {
    description: 'No description ...',
}

export default ProductlistItem
