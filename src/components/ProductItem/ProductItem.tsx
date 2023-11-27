import React from 'react';
import './ProductItem.css'
import MyButton from "../Button/MyButton.tsx";
import {IProduct} from "../ProductList/ProductList.tsx";

interface IProductItem {
    product: IProduct,
    onAdd: (product:IProduct) => void,
}

const ProductItem: React.FC<IProductItem> = ({product, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product'}>
            <div className={'img'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <MyButton onClick={onAddHandler}>Добавить в корзину</MyButton>
        </div>
    );
};

export default ProductItem;