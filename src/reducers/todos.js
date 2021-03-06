import { actionTypes } from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, {id: action.id, completed: false, text: action.text}]
        case actionTypes.TOGGLE_TODO:
            return state.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        case actionTypes.REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        default:
            return state;
    }
}

export default todos