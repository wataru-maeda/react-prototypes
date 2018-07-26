import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import { Home } from './screens';
import registerServiceWorker from './common/registerServiceWorker';

const Rooter = () => (
    <BrowserRouter>
        <main>
            <Route path="/" exact component={Home} />
        </main>
    </BrowserRouter>
)

ReactDOM.render(<Rooter />, document.getElementById('root'));
registerServiceWorker();
