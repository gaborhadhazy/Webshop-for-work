
import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ItemListContext} from "../Contexts/ItemListContext";
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import {numberWithCommas} from "../../utilities";


function ItemPage({data}){
    const {add_to_cart} = useContext(ShoppingCartContext)

    return <div className="item-details-container">
        <div>
            <img src={data.image} alt=""/>
        </div>

        <div>
            <h3>{data.title}</h3>
            <h2>${numberWithCommas(data.price)}</h2>

            <hr/>

            <div className="button-container">
                <button onClick={e => add_to_cart(data)}><i className="fas fa-cart-plus"/> ADD TO CART</button>
                <br/>
                <button className="inverted">BUY IT NOW</button>
            </div>

            <hr/>

            <p>{data.description}</p>
        </div>

    </div>
}


function ItemDetailsPage(props) {
    const {slug} = useParams()
    const {items} = useContext(ItemListContext)
    const [item_data, set_item_data] = useState(null)

    const get_item_data = () => {
        if(slug){
            const result = items.find(data => data.slug === slug)
            if(result){
                set_item_data(result)
            }
        }else{
            set_item_data(null)
        }
    }

    useEffect(() => {
        get_item_data()
    }, [items])

    return (
        <div className="content-container">
            <div className="content-offset"/>
            {
                item_data&& <ItemPage data={item_data}/>
            }
        </div>
    );
}

export default ItemDetailsPage;