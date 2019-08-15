import React from 'react';

const InputTodo = ({addTodo}) => {
    let textInput = React.createRef();

    const handleClick = (text) => {
        addTodo(text);
        textInput.current.value = '';
    }

    return (
        <div>
            <input type="text" ref={textInput}/>
            <button onClick={() => handleClick(textInput.current.value)}>Add</button>
        </div>
    )
}

export default InputTodo