/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/*
 *  All Reducers in this File
 */
import AppReducers from 'ReducersPath/AppReducers';

/*
 *  All Usable React Reusable Components in this File
 */
import RenderContent from 'ComponentsPath/RenderContent';

const Index = () => {
    /*
     *  @render
     *  all render logic should be done inside this
     */
    const render = (store) => {
        if (document.getElementById('app')) {
            ReactDOM.render(
                <Provider store={store}>
                    <RenderContent />
                </Provider>,
                document.getElementById('app')
            );
        }
    };

    /*
     *  @init
     *  all trigger of main function should be done inside this
     */
    const init = () => {
        let store = createStore(AppReducers);
        render(store);
    };

    init();
};

new Index();
