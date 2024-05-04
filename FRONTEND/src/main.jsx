import React from 'react'
import { Toaster } from 'react-hot-toast'
import ReactDOM from 'react-dom/client'
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Toaster />
    <App />
    </Provider>
  </React.StrictMode>,
)
