import React from 'react';
import MyButton from "../Button/MyButton.tsx";
import {useTelegram} from "../../hooks/useTelegram.ts";
import './Header.css'
import {Link} from "react-router-dom";

const MyHeader: React.FC = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <MyButton onClick={onClose}>
                Закрыть
            </MyButton>
            {/*<div>*/}
            {/*    <Link to={'/'}>Product list</Link>*/}
            {/*    <Link to={'/form'}>Form</Link>*/}
            {/*</div>*/}
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
};

export default MyHeader;