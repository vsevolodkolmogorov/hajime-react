import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem.tsx";
import {useTelegram} from "../../hooks/useTelegram.ts";
import axios from "axios";

export interface IProduct {
    id: string,
    title: string,
    price: number,
    description: string
}

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Брюки', price: 2500, description: 'Черного цвета, косые'},
    {id: '3', title: 'Куртка', price: 10000, description: 'Синего цвета, теплая'},
    {id: '4', title: 'Юбка', price: 8000, description: 'Черного цвета'},
    {id: '5', title: 'Шарф', price: 1000, description: 'Цвет радуги'},
]

const getTotalPrice = (items: IProduct[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState<IProduct[]>([]);
    const {tg, queryId} = useTelegram();

    useEffect(() => {
        axios.post(`http://185.237.253.173:8000/test`, {
                text: "test on hook"
            })
            .then((response) => {
                console.log(response.data);
            });

        axios.get('http://185.237.253.173:8000/basket')
            .then((response) => {
                console.log(response.data);
            });
    }, [])

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://185.237.253.173:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product: IProduct) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }

        setAddedItems(newItems);
    }


    const sendPostData = async (text: string) => {
        axios
            .post(`http://185.237.253.173:8000/test`, {
                text: text
            })
            .then((response) => {
                console.log(response.data);
            });
    };


    return (
        <div className={'list'}>
            <button onClick={() => sendPostData("test work")}>send test get and post</button>
            {
                products.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                    />
                ))
            }
        </div>
    );
};

export default ProductList;