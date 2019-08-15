import React from 'react';
import './filter-select.css';
import { Filters } from '../../actions'

const FilterSelect = ({filter, setFilter}) => {
    return (
        <div className={'filter-select'}>
            <button onClick={() => setFilter(Filters.SHOW_ALL)}>All</button>
            <button onClick={() => setFilter(Filters.SHOW_ACTIVE)}>Active</button>
            <button onClick={() => setFilter(Filters.SHOW_COMPLETED)}>Completed</button>
        </div>
    )
}

export default FilterSelect