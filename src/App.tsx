import './App.css'
import {useEffect} from "react";
import MyHeader from "./components/Header/MyHeader.tsx";
import {useTelegram} from "./hooks/useTelegram.ts";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div>
            <MyHeader />
            Work
            <button onClick={onToggleButton}>toggle</button>
        </div>
    )
}

export default App
