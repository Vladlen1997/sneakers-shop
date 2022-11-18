import React from "react";
import classes from "./Drawer.module.scss";


const Drawer = () => {
    return (
        <div style={{display: 'none'}} className={classes.overlay}>
            <div className={classes.drawer}>
                <h2 className="mb-15 d-flex justify-between align-center">
                    Корзина
                    <img className="remove-cart cu-p" src="/img/btn-remove.svg" alt="Remove"/>

                </h2>

                <div className={classes.items}>
                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{backgroundImage: 'url(/img/sneakers/sneak1.jpg)'}}
                             className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul className="cartTotalBlock mb-25">
                        <li className="d-flex justify-between">
                            <span>Цена:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex justify-between">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>

                    <div className="cart-button">
                        <button className="greenButton">
                            Оформить заказ
                            <img src="/img/Vector.svg" alt="Vector"/>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default Drawer;