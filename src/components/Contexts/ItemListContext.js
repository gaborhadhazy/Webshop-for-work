import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ItemListContext = createContext(true)

export const ItemListProvider = (props) => {
    const [items, set_items] = useState([])

    const fetch_item_list = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/items`
        }).then(res => set_items(res.data))
    }

    useEffect(() => {
        fetch_item_list()
    }, [])

    return (
        <ItemListContext.Provider value={{
            items: items
        }}>
            {props.children}
        </ItemListContext.Provider>
    )
}