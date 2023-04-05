import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainNavigation from './MainNavigation'
import Description from './Description'
import Carousel from './Carousel'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MainNavigation/>
  </React.StrictMode>,
)
