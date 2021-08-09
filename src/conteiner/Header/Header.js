import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';
import Menu from '../../components/Menu/Menu';
import CartHeader from '../../components/CartHeader/CartHeader';




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 5,
    },
    title: {
        flexGrow: 1,
    },
})


const Header = () => {
    const classes = useStyles()
    return (
      <>
         <div className={classes.root}>
        <AppBar position="static">
          <Container maxWidth="lg">
             <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fake Shop
          </Typography>
          <Menu/>
          <CartHeader/>
        </Toolbar>
              </Container>
       
      </AppBar>
      </div>
     </>
    )                
}

export default Header
