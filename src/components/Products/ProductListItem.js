
import React from "react"
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
const ProductlistItem = () => {
    return <>
        <Card>
            <CardContent>
                <h4>iPhone X</h4>
                <p>This is iPhone X</p>
                <p>Type: phone</p>
                <p>Capacity: 64GB</p>
                <p>$ 500</p>
            </CardContent>
            <CardActions>
                    <Button variant="contained" color="primary">Add to Cart</Button>
                </CardActions>
        </Card>
    </>

    
}
export default ProductlistItem