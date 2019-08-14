export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export const actionTypes = {
    SET_FILTER: 'SET_FILTER',
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

let nextId = 0;

export const setFilter = (filter) => {
    return { type: actionTypes.SET_FILTER, filter }
}

export const addTodo = (text) => {
    return { type: actionTypes.ADD_TODO, id: nextId++, text }
}

export const toggleTodo = (id) => {
    return { type: actionTypes.TOGGLE_TODO, id}
}





