import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";

const App = () => {
    return (
        <div className="wrapper clear">
            <Drawer/>

            <Header/>


            <div className="content p-40">

                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="searcher"/>
                        <input placeholder='Поиск ...' type="text"/>
                    </div>
                </div>


                <div className='d-flex'>

                    <Card/>
                    <Card/>
                    <Card/>


                </div>

            </div>
        </div>
    );
}

export default App;
