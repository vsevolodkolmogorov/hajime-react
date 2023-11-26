import './App.css'
import {useEffect} from "react";
import MyHeader from "./components/Header/MyHeader.tsx";
// @ts-ignore
const tg =  window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    }, [])



    return (
        <div>
            <MyHeader />
            Work
        </div>
    )
}

export default App
