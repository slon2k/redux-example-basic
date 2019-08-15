import React from 'react';
import TodoList from "../components/todo-list";
import { connect } from "react-redux";
import { Filters, toggleTodo, removeTodo } from '../actions'

const filteredTodos = (todos, filter) => {
    switch (filter) {
        case Filters.SHOW_ALL:
            return todos
        case Filters.SHOW_ACTIVE:
            return todos.filter(item => !item.completed)
        case Filters.SHOW_COMPLETED:
            return todos.filter(item => item.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: filteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
