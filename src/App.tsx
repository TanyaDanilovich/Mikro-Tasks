import React from 'react';
import logo from './logo.svg';
import './App.css';

type FilterType = "all" | "Dollars" | "RUBLS"


function App() {
    const [money, setMoney] = React.useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = React.useState<FilterType>("all")


    let currentMoney = money
    if (filter === "Dollars") {
        currentMoney = money.filter(el => el.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter(el => el.banknots === "RUBLS")
    }

    const onClickFilterHandler = (valName: FilterType) => {
        setFilter(valName)
        console.log(filter)
    }


    return (
        <div className="App">
            <ul>
                {currentMoney.map((el, index) => {
                    return <li key={index}>
                        <span>{`${el.banknots} по ${el.value}`} </span>
                    </li>
                })}
            </ul>
            <button onClick={() => {
                onClickFilterHandler("all")
            }}>all
            </button>
            <button onClick={() => {
                onClickFilterHandler("Dollars")
            }}>Dollars
            </button>
            <button onClick={() => {
                onClickFilterHandler("RUBLS")
            }}>RUBLS
            </button>
        </div>
    );
}

export default App;
