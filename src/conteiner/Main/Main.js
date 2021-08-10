import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import ProductsList from '../../components/Products/ProductsList';





const Main = () => {
    
    return (
        <>
         <Container maxWidth="lg">
            <ProductsList />
         </Container>
         
        </> 
    )
}
export default Main