import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { App } from './app/app';
import { appStore } from './app/app.store';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const rootElement = document.getElementById('root');

const renderApp = () => {
    render(
        <Provider store={appStore}>
            <App />
        </Provider>,
        rootElement
    );
};

appStore.subscribe(renderApp);

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
