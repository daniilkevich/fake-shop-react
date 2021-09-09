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
import Quantity from '../Quantity/Quantity'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const ProductlistItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    isLiked = false,
    changeLike,
}) => {
    const [count, setCount] = useState(1)
    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <Card>
                <CardContent className="product">
                    <div className="product-img">
                        <img src={image} alt={name} />
                    </div>
                    <Button onClick={() => changeLike(id)}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Type: {type}</p>
                    <p>Capacity: {capacity}GB</p>
                    <div className="product-price">$ {price}</div>
                    <Quantity
                        count={count}
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                    />
                </CardContent>
                <CardActions className="product-btn">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addProductToCart(id, count)}
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
