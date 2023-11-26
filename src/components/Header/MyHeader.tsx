import React from 'react';
import MyButton from "../Button/MyButton.tsx";
import {useTelegram} from "../../hooks/useTelegram.ts";

const MyHeader: React.FC = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <MyButton onClick={onClose}>
                Закрыть
            </MyButton>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
};

export default MyHeader;