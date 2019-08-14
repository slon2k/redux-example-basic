import React from 'react';

const TodoList = (todos) => {
    const todoList = todos.map((item) => {
        return(
            <li>
                {item.text}
            </li>
        )
    })
    return(
        <ul>

        </ul>
    )
}

export default TodoList