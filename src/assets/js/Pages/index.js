/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*
 *  All Usable React Reusable Components in this File
 */
import RenderManager from 'ComponentsPath/RenderManager';

class Index {
    /*
     *  @constructor
     *  all definition of variable should be done inside this
     */
    constructor () {
        /*
         *  @streamName
         *  gets value from location param
         */
        this.streamName = new URL(location.href).searchParams.get("streamName") ||
            '';
    }

    /*
     *  @init
     *  all trigger of main function should be done inside this
     */
    init () {
        this.render();
    }

    /*
     *  @render
     *  all render logic should be done inside this
     */
    render () {
        if (document.getElementById('app')) {
            ReactDOM.render(
                <RenderManager streamName={this.streamName} />,
                document.getElementById('app')
            );
        }
    }
}

new Index().init();
