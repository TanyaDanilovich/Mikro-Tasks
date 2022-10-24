import React, {useState} from 'react';
import './App.css';
// import NewComponent from './newComponent';
// import FullInput from './Input/Full_Input';
import Input from './Input/Input';
import Button from './Input/Button';

export type FilterType = 'all' | 'Dollars' | 'RUBLS'
type currencyType = {
    banknots: string
    value: number
    number: string
}

export type MoneysType = Array<currencyType>

function App() {

    // const [money, setMoney] = React.useState([
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ])
    // const [filter, setFilter] = React.useState<FilterType>("all")
    // let currentMoney = money
    // if (filter === "Dollars") {
    //     currentMoney = money.filter(el => el.banknots === "Dollars")
    // }
    // if (filter === "RUBLS") {
    //     currentMoney = money.filter(el => el.banknots === "RUBLS")
    // }
    // const onClickFilterHandler = (valName: FilterType) => {
    //     setFilter(valName)
    // }

    const [message, setMessage] = useState([
        {text: 'message1'},
        {text: 'message2'},
        {text: 'message3'}
    ])

    const [title, setTitle] = useState('')

    const addMessage = (text: string) => {
        setMessage([{text: text}, ...message])
    }
    const allMessages = message.map((el, index) => {
        return (<div key={index}>{el.text}</div>)
    })

    const callbackButtonHandler = () => {
        addMessage(title);
        setTitle('')
    }

    return (
        <div className="App">
            {/*<NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={callbackButtonHandler}/>
            {allMessages}
        </div>
    );
}

export default App;
