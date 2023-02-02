import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from '../routes/Routing'
import { Provider } from '../context/Context'
const App = () => {
    return (
        <div>
            <Provider>
                <BrowserRouter>
                    <Routing />
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App