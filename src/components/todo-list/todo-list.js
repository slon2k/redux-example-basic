import React from 'react';
import './todo-list.css'

const TodoList = ({todos, toggleTodo}) => {

    const todoListItems = todos.map((item) => {
        const itemClass = item.completed ? 'todo-list__item todo-list__item_completed' : 'todo-list__item';
        return(
            <li key={item.id} className={itemClass} onClick={() => toggleTodo(item.id)}>
                {item.text}
            </li>
        )
    })
    return(
        <ol className={'todo-list'}>
            {todoListItems}
        </ol>
    )
}

export default TodoList