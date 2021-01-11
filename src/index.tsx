// React
import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

// Containers
import { cnntApp as App } from '~/app/containers/App';

// Styles
import '~/resources/assets/scss/index.scss';

// Store Reducers
import storeReducers from '~/store/reducers';

// Epics
import rootEpics from '~/store/epics';
const rootEpicsMdwr = createEpicMiddleware( rootEpics );

// TODO we need to add applyMiddleware for redux-observable
const store = createStore( storeReducers, applyMiddleware( rootEpicsMdwr ));

import registerServiceWorker from './registerServiceWorker';

const mainApp = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render( mainApp, document.getElementById('⚛') as HTMLElement );
registerServiceWorker();
