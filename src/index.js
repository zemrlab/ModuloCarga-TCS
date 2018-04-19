import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
