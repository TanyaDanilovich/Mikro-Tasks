import React from 'react';
import {FilterType, MoneysType} from "./App";

type NewComponentPropsType = {
    currentMoney: MoneysType
    onClickFilterHandler: (valName: FilterType)=> void
}

const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ol>
                {props.currentMoney.map((el, index) => {
                    return <li key={index}>
                        <span>{`${el.banknots} по ${el.value}`} </span>
                    </li>
                })}
            </ol>
            <button onClick={() => {
                props.onClickFilterHandler("all")
            }}>all
            </button>
            <button onClick={() => {
                props.onClickFilterHandler("Dollars")
            }}>Dollars
            </button>
            <button onClick={() => {
                props.onClickFilterHandler("RUBLS")
            }}>RUBLS
            </button>
        </div>
    );
};

export default NewComponent;