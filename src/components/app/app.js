import React from 'react';
import './app.css';
import TodoList from "../../containers/todo-list-container";
import FilterSelect from "../../containers/filter-select-container";
import InputTodo from "../../containers/input-todo.container";

const App = () => {
  return (
    <div>
      <h2>App</h2>
        <FilterSelect/>
        <TodoList/>
        <InputTodo/>
    </div>
  );
}

export default App;
