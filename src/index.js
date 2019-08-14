import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import './index.css';
import App from './components/app';

const store = createStore(reducer);

const Root = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));