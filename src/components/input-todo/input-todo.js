import React from 'react';

const InputTodo = ({addTodo}) => {
    let textInput = React.createRef();

    const handleInput = (text) => {
        addTodo(text);
        textInput.current.value = '';
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleInput(event.target.value)
        }
    }

    return (
        <div>
            <input type="text" ref={textInput} placeholder={'new todo'} onKeyDown={handleKeyPress}/>
            <button onClick={() => handleInput(textInput.current.value)}>Add</button>
        </div>
    )
}

export default InputTodo