import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})
const Menu = () => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">
                <Link to="/cart" className={classes.link}>
                    Cart
                </Link>
            </Button>
        </>
    )
}
export default Menu
