import React, {useContext, useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";

function CheckoutPage(props) {
    const {shopping_list, total, count} = useContext(ShoppingCartContext)
    const [logged_in, set_logged_in] = useState(false)

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <div className="checkout-container">
                {
                    count >0?
                        <Fragment>
                            <div className="costumer-details-container">
                    <h3>Contact information</h3>
                    <hr/>
                    {
                        !logged_in&& <small>Already have an account? <Link to={"/users/login"}>Log in</Link></small>
                    }

                    <input type="email" placeholder="Email"/>

                    <h4>Shipping address</h4>
                    <hr/>

                    <div className="name-container">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>

                    <input type="text" placeholder="Company"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="Post code"/>
                    <input type="text" placeholder="Phone"/>
                </div>

                            <div className="shopping-cart-container">
                    Shopping cart...
                </div>
                        </Fragment>
                        :
                        <div>
                            <h3>YOUR CART IS CURRENTLY EMPTY.</h3>
                            <p>Continue browsing <Link to={"/"}>here.</Link>.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default CheckoutPage;