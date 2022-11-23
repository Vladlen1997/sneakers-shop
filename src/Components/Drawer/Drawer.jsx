import React from "react";
import classes from "./Drawer.module.scss";


const Drawer = ({onClose, items = []}) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.drawer}>
                <h2 className="mb-15 d-flex justify-between align-center">
                    Корзина
                    <img onClick={onClose} className={classes.remove_cart} src="/img/btn-remove.svg"
                         alt="Remove"/>

                </h2>

                <div className={classes.items}>
                    {
                        items.map((obj) => (
                            <div className={classes.cartItem}>

                                <div style={{backgroundImage: `url(${obj.image})`}}
                                     className={classes.cartItemImg}></div>

                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
                            </div>
                        )

                        )
                    }
                </div>
                <div className={classes.cartTotalBlock}>
                    <ul className="mb-25">
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

                    <div className={classes.cart_button}>
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