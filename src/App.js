import "./App.scss";
import React from 'react';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";
import Content from "./Components/Content/Content";


const App = () => {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);


    React.useEffect(() => {

        fetch("https://637b689d10a6f23f7fa7ea2b.mockapi.io/Items").then((res) => {
            return res.json();
        }).then(json => {
            setItems(json);
        });

    }, []);


    const [cartOpened, setCartOpened] = React.useState(false);


    return (

        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}

            <Header onCartClick={() => setCartOpened(true)}/>


            {/*Content Page ---> to Component*/}


            <div className="content p-40">

                <Content/>

                <div className="sneakers d-flex flex-wrap">
                    {items.map((obj) => <Card name={obj.name} price={obj.price} image={obj.image}/>)}


                </div>

            </div>


        </div>
    )
}


export default App;
