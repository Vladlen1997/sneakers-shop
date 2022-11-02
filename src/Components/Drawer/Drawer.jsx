import React from 'react';

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer-block">
            <h2 className='mb-15 d-flex justify-between'>Корзина
                <img className='cu-p' src="/img/btn-remove.svg" alt="remove"/>
            </h2>

            <div className="items">


                <div className="cartItem d-flex align-center mb-20">
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/sneak8.jpg"
                         alt="Sneakers"/>
                    <div className='mr-30'>
                        <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                        <b>12.999 руб.</b>
                    </div>


                    <img className='removeBtn' src="/img/r-btn.svg" alt="button"/>
                </div>


                <div className="cartItem d-flex align-center">
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/sneak8.jpg"
                         alt="Sneakers"/>
                    <div className='mr-30'>
                        <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                        <b>12.999 руб.</b>
                    </div>

                    <img className='removeBtn' src="/img/r-btn.svg" alt="button"/>
                </div>
            </div>

            <div className='cartTotalBlock'>

                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>2698 р.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>655 р.</b>
                    </li>
                </ul>

                <button className='greenButton'>
                    оформить заказ
                    <img src="/img/Vector.png" alt="arrow"/>
                </button>


            </div>
        </div>
        </div>

            )
            }
            export default Drawer;