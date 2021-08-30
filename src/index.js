import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { RouteContextProvider } from './context/RoutesContext'
ReactDOM.render(

      <RouteContextProvider>
<App/></RouteContextProvider>,document.getElementById('root'))