import './App.css'
import {useEffect} from "react";
// @ts-ignore
const tg =  window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return (
        <div>
            Work
            <button onClick={onClose}></button>
        </div>
    )
}

export default App
