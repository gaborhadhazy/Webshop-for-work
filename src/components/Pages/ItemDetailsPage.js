import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ItemListContext} from "../Contexts/ItemListContext";
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import {motion} from "framer-motion";
import {numberWithCommas} from "../../utilities";

function ItemPage({data}){
    const {add_to_cart} = useContext(ShoppingCartContext)

    return <motion.div className="item-details-container"
        initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
            delay: 0.3,
            duration: 0.3
        }}
    >
        <div>
            <img src={data.image} alt=""/>
        </div>

        <div>
            <br/>
            <h3>{data.title}</h3>
            <h2>${numberWithCommas(data.price)}</h2>

            <hr/>

            <div className="button-container">
                <motion.button onClick={e => add_to_cart(data)}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 8px rbg(255, 255, 255)",

                    }}
                ><i className="fas fa-cart-plus"/> ADD TO CART</motion.button>

                <br/>

                <motion.button className="inverted"
                        whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 2px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 8px rbg(255, 255, 255)",

                    }}

                >BUY IT NOW</motion.button>
            </div>

            <hr/>

            <p>{data.description}</p>
        </div>

    </motion.div>
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