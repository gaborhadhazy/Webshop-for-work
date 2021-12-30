import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import {ShoppingCartContext} from "./Contexts/ShoppingCartContext";
import {motion} from "framer-motion";


function MenuItem({item_data}){

    return <Link to={`/categories/${item_data.title}`} className="menu-item">
        {item_data.title.toUpperCase()}

        {
            item_data.items && <i className="fas fa-caret-down"/>
        }

        {
            item_data.items && <div className="popup-menu">
                {
                    item_data.items.map(i => <Link to={`/categories/${item_data.title}/${i}`} key={i} className="menu-item">{i}</Link>)
                }
            </div>
        }

    </Link>
}

function Menu(){
    const [menu_list, set_menu_list] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/categories`
        }).then(res => set_menu_list(res.data))
    }, [])

    return (
        <div className="menu">
            {
              menu_list.map(item_data => <MenuItem key={item_data.id} item_data={item_data}/>)
            }
        </div>
    )
}

function CartButton(){
    const {count, set_visible} = useContext(ShoppingCartContext)

    return <button className="cart-button" onClick={e => set_visible(true)}>
        <i className="fas fa-shopping-cart"/> CART
        {
            count>0 && <div className="item-count">{count}</div>
        }
    </button>
}

function Header(props) {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 170) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className="header-container">

            <div className="content-container">
                <div className="title-container">
                    <Link to="/"><h1>Stylus Shop</h1></Link>

                    <div className="welcome-container">
                        <h2>Hello, my name is Gabor.</h2>

                        <p>
                            Welcome to my webshop
                        </p>
                    </div>

                    <div>
                        <small className="sign-in-container"><Link to="/users/login">Sign in</Link> or <Link to="/users/registration">Create an Account</Link></small>
                        <br/>

                        <div className="search-box">
                            <input type="text" placeholder="Search all products..."/>
                            <i className="fas fa-search"/>
                        </div>


                        <CartButton/>
                    </div>

                </div>


                <Menu/>
            </div>

        </div>
    );
}

export default Header;