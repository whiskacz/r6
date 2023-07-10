import React,{ useState} from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

const R6App = () => {

    const[temperature,setTemperature] = useState(0)

    return (
        <div className='wrapper'>
            <div className={`circle ${temperature < 0 ? "blue" : "red"}`}>
            {temperature}°C
            </div>
            <button onClick={()=>{setTemperature(temperature - 1)}}>-</button>
            <button onClick={()=>{setTemperature(temperature + 1)}}>+</button>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R6App />)
