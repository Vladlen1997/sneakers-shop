import React from "react";
import classes from "./Header.module.scss";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className="header_left d-flex align-center">
                <img width={40} height={40} src="/img/logo.svg" alt="logo"/>


                <div className={classes.header_info}>

                    <h3 className="text-uppercase opacity-5">React Sneakers</h3>
                    <p>магазин лучших кроссовок</p>

                </div>

            </div>

            <ul className="header_right d-flex">
                <li onClick={props.onCartClick} className="mr-30 cu-p">

                    <img src="/img/cart.svg" alt="cart"/>

                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/Union.svg" alt="user"/>
                </li>
            </ul>

        </header>
    )
}


export default Header;