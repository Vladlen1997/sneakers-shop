import React from 'react';


const Header = () => {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
                <div>
                    <h3 className='text-uppercase'>Sneakers</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок и цен</p>
                </div>
            </div>

            <ul className='d-flex'>
                <li className='mr-30'>
                    <img width={18} height={18} src="/img/cart.svg" alt="card"/>
                    <span>1205р.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/heart.svg" alt="like"/>
                </li>
                <li>
                    <img src="/img/Union.svg" alt="login"/>
                </li>

            </ul>
        </header>
    )
}


export default Header;
