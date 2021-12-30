import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

function CategoryItem({title, image}){
    return <Link className="category-card">
        <div className="image-container" style={{backgroundImage: `url(${image})`}}/>
        <small>{title}</small>
    </Link>
}

function ShopFor(props) {
    const [category_list, set_category_list] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/categories`
        }).then(res => set_category_list(res.data))
    }, [])

    return (
        <div className="collection-container">
            <h3>SHOP FOR</h3>

            <div className="item-container">
                {
                    category_list.map(data => <CategoryItem key={data.id} title={data.title} image={data.image}/>)
                }
            </div>

        </div>
    );
}

export default ShopFor;