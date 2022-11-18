import React from "react";
import classes from "./Card.module.scss";



const Card = (props) => {

    return (
        <div className={classes.card}>
            <div className={classes.favorite}>
                <img src="/img/like.svg" alt="unliked"/>
            </div>

            <img width={133} height={112} src={props.image} alt="card"/>
            <h5>
                {props.name}
            </h5>

            <div className="card-bottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className={classes.button}>
                    <img width={11} height={11} src="/img/vector-btn.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}


export default Card;