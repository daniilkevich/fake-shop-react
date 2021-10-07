import React from 'react'
import { Button, TextField } from '@material-ui/core'
const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField variant="outlined" size="small" value={count} />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
