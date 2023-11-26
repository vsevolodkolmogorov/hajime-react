import React from 'react';
import MyButton from "../Button/MyButton.tsx";

const MyHeader: React.FC = () => {
    // @ts-ignore
    const tg =  window.Telegram.WebApp;
    const onClose = () => {
        console.log("закрыл")
        tg.close();
    }

    return (
        <div className={'header'}>
            <MyButton onClick={onClose}>
                Закрыть
            </MyButton>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
};

export default MyHeader;