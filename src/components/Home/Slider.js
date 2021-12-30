import React, {useContext, useEffect, useState} from 'react';
import {ItemListContext} from "../Contexts/ItemListContext";
import {Link} from "react-router-dom";

function Slider(props) {
    const {items} = useContext(ItemListContext)
    const [featured_list, set_featured_list] = useState([])
    const [current_index, set_current_index] = useState(0)

    const step_action = (value) => {
        let _index = current_index
        _index += value

        if(_index > featured_list.length -1 ){
            _index = 0
        }else if (_index < 0){
            _index = featured_list.length -1
        }

        set_current_index(_index)
    }


     const fetch_featured_list = () => {
        set_featured_list(items.filter(item => item.featured))
    }


    useEffect(() => {
        fetch_featured_list()
    }, [items])

    if(items.length === 0) return null

    return (

        <div className="slider-container">
            <Link to={`/details/${items[current_index].slug}`}>
                 <div className="image-container">
                {
                    featured_list.map((featured_item, index) => <img key={featured_item.id} className={`slider-image ${current_index === index? "active": ""}`} src={featured_item.image} alt=""/>)
                }
            </div>
            </Link>

                <div className="left-step-button">
                    <i className="fas fa-chevron-left" onClick={e => step_action(-1)}/>
                </div>
                <div className="right-step-button">
                    <i className="fas fa-chevron-right" onClick={e => step_action(+1)}/>
                </div>

        </div>

    );
}

export default Slider;