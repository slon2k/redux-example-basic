import React from 'react';
import { connect } from "react-redux";
import InputTodo from "../components/input-todo";
import { addTodo } from "../actions";

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(InputTodo)

