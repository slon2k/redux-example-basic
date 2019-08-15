import React from 'react';
import {connect} from 'react-redux';
import FilterSelect from "../components/filter-select";
import { setFilter } from '../actions'

const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect);