import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import {motion} from "framer-motion";
import {numberWithCommas} from "../../utilities";

function Quantity({quantity, item_id}){
    const {set_quantity} = useContext(ShoppingCartContext)

    return <div className="quantity-container">
       <motion.i className="far fa-minus-square" onClick={() => set_quantity(item_id, -1)}
            whileHover={{
                scale: 1.1
            }}

       />
        <div>{quantity}</div>
         <motion.i className="far fa-plus-square" onClick={() => set_quantity(item_id, +1)}
            whileHover={{
                scale: 1.1
            }}
         />
    </div>
}

function CartItem({data}) {
    const {remove_from_cart} = useContext(ShoppingCartContext)

    return (
        <div className="cart-item-container">
            <img src={data.image} alt=""/>
            <div>{data.title}</div>
            <Quantity quantity={data.quantity} item_id={data.id}/>
            <h3>${numberWithCommas(data.price)}</h3>

            <motion.i className="fas fa-trash-alt" onClick={e => remove_from_cart(data.id)}

                whileHover={{
                    scale: 1.1,
                }}
            />
        </div>
    );
}

export default CartItem;