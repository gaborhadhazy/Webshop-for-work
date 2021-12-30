import React, {useContext, useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import CartItem from "../ShoppingCart/CartItem";
import {numberWithCommas} from "../../utilities";

function CheckoutPage(props) {
    const {shopping_list, total, count} = useContext(ShoppingCartContext)
    const [logged_in, set_logged_in] = useState(false)

    return (
        <div>hello</div>
    )
}

export default CheckoutPage;


