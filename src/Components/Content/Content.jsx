import React from "react";
import classes from "./Content.module.scss";


const Content = () => {
    return (

        <div className="d-flex justify-between align-center mb-40">
            <h1>Все кроссовки</h1>
            <div className={classes.search}>
                <img src="/img/search.svg" alt="search"/>
                <input className="pl-15" placeholder="Поиск ..." type="text"/>
            </div>
        </div>
    )

}


export default Content;