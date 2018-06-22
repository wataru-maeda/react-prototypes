import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';import { Home, Profile } from './screens';
import registerServiceWorker from './common/registerServiceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

const Rooter = () => (
    <Provider store={store}>
        <BrowserRouter>
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/Profile" exact component={Profile} />
            </main>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Rooter />, document.getElementById('root'));
registerServiceWorker();
