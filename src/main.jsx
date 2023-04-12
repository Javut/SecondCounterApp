import React from 'react'
import ReactDom from 'react-dom/client'
import { CounterApp } from './CounterApp';
import { App } from './FirstApp'
import { SecondApp } from './SecondApp'
import './styles.css';




ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20}/>
        {/* <App title="Hola, Soy superman"/> */}
        {/* <SecondApp title="Mindsait"/>   */}
        {/* //De esta forma se le estarian mandando properties al componente Hijo <SecondApp></SecondApp> */}
    </React.StrictMode>
)


