import React, {useContext, useEffect, useState} from 'react';
import Slider from "./Slider";
import ShopFor from "./ShopFor";
import Home_ItemList from "./Home_ItemList";
import axios from "axios"
import {motion} from "framer-motion";
import {ItemListContext} from "../Contexts/ItemListContext";

function HomePage(props) {
    const {items} = useContext(ItemListContext)
    const [featured_list, set_featured_list] = useState([])
    const [analog_cameras, set_analog_cameras] = useState([])
    const [leica_M, set_leica_M] = useState([])

    const fetch_featured_list = () => {
        set_featured_list(items.filter(item => item.featured))
    }

    const fetch_analog_cameras = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/analog`
        }).then(res => set_analog_cameras(res.data))
    }

    const fetch_leica_M = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/leica_m`
        }).then(res => set_leica_M(res.data))
    }

    useEffect(() => {
        fetch_analog_cameras()
        fetch_leica_M()
    }, [])

    useEffect(() => {
        fetch_featured_list()
    }, [items])

    return (
        <motion.div className="content-container"
        initial={{ y: -1000, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ delay: 0.4, duration: 0.4}}
        >
            <div className="content-offset"/>
            <br/>
            <Slider/>

            <hr/>

            <ShopFor/>

            <hr/>

            <Home_ItemList title="FEATURED COLLECTION" items={featured_list}/>

            <hr/>

            <Home_ItemList title="ANALOG CAMERAS" items={analog_cameras}/>

            <hr/>

            <Home_ItemList title="LEICA M" items={leica_M}/>
        </motion.div>
    );
}

export default HomePage;