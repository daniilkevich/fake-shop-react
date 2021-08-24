import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
    })
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
        </>
    )
}
export default App
