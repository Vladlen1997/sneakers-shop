import React from "react";
import classes from "./Card.module.scss";


const Card = ({image, name, price, onPlus}) => {

    const [isAdded, setIsAdded] = React.useState(false);


    const onPlusClick = () => {
        onPlus({name, image, price});
        setIsAdded(!isAdded);
    }


    return (
        <div className={classes.card}>
            <div className={classes.favorite}>
                <img src="/img/like.svg" alt="unliked"/>
            </div>

            <img width={133} height={112} src={image} alt="card"/>
            <h5>
                {name}
            </h5>

            <div className="card-bottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={onPlusClick} className={classes.plus}
                     src={isAdded ? "/img/button-checked.svg" : "/img/vector-btn.svg"} alt="plus"/>
            </div>
        </div>
    )
}


export default Card;