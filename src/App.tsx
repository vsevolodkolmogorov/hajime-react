import './App.css'
import {useEffect} from "react";
import MyHeader from "./components/Header/MyHeader.tsx";
import {useTelegram} from "./hooks/useTelegram.ts";
import {Link, Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.tsx";
import Form from "./components/Form/Form.tsx";


function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div>
            <MyHeader />
            <Link to={'/'}>Product list</Link>
            <Link to={'/form'}>Form</Link>
            <Routes>
                <Route path={'/form'} element={<ProductList/>} />
                <Route index element={<Form/>} />
            </Routes>
        </div>
    )
}

export default App
