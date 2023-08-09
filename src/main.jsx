import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
