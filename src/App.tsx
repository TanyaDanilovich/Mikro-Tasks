import React from 'react';
import './App.css';
import NewComponent from "./newComponent";

export type FilterType = "all" | "Dollars" | "RUBLS"
type currencyType = {
    banknots: string
    value: number
    number: string
}

export type MoneysType = Array<currencyType>

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
    }

    return (
        <div className="App">
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>
    );
}

export default App;
