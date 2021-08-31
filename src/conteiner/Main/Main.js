import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import ProductsList from '../../components/Products/ProductsList'
import { Route } from 'react-router-dom'
import CartPage from '../../pajes/Cart/CartPage'
import ShippingPage from '../../pajes/Shipping/ShippingPaje'
import PaymentPage from '../../pajes/Payment/PaymentPaje'

const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container maxWidth="lg">
                <Route
                    path="/"
                    exact
                    render={() => (
                        <ProductsList addProductToCart={addProductToCart} />
                    )}
                />
                <Route path="/cart" component={CartPage} />
                <Route path="/shipping" component={ShippingPage} />
                <Route path="/payment" component={PaymentPage} />
            </Container>
        </>
    )
}
export default Main
