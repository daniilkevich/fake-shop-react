import React from 'react'
import ReactDOM from 'react-dom'
import App from './conteiner/App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import productsLikeReducer from './redux/productsLikeReducer'
import { Provider } from 'react-redux'

const store = createStore(
    productsLikeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
