
import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ItemCard from "./ItemCard";
import {ItemListContext} from "../Contexts/ItemListContext";


function ItemListPage(props) {
    const {category} = useParams()
    const {subcategory} = useParams()
    const {items} = useContext(ItemListContext)

    return (
        <div className="content-container">
            <div className="content-offset"/>
            <h3>{category}</h3>

            <div className="item-list-container">
                {
                    items.filter(item_data => subcategory? item_data.category === category && subcategory === item_data.subcategory : item_data.category === category)
                        .map(item_data => <ItemCard key={item_data.id} data={item_data}/>)
                }
            </div>
        </div>
    );
}

export default ItemListPage;