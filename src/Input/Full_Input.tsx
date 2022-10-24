import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = { addMessage: (message: string) => void }


export default function FullInput(props: FullInputPropsType) {
    const [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHundler = () => {
        props.addMessage(title)
        setTitle('');
    }
    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHundler}>+
            </button>
        </div>
    )
}