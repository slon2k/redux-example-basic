import {Filters, actionTypes} from "../actions";

const filter = (state = Filters.SHOW_ALL, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter