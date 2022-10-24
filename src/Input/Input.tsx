import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
}

const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    );
};

export default Input;