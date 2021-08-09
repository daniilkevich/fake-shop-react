import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles ({
    h1: {
        margin: "20px 0px",
        textTransform: "uppercase"
    }
})



const Main = () => {
    const classes = useStyles ();
    return (
        <Container>
            <Typography variant="h5" component="h1" align="center" className={classes.h1}>Products List</Typography>
        </Container>
    )
}
export default Main