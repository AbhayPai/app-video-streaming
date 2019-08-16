/*
 *  All Usable Libraries in this File
 */
import React from 'react';

/*
 *  All Usable React Reusable Components in this File
 */
import Iframe from 'ComponentsPath/Youtube/Iframe';
import MovieList from 'ComponentsPath/Youtube/MovieList';

/*
 *  Extending React Component
 */
class RenderManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: '',
            theme: 'light',
        };
        this.selectTheme = this.selectTheme.bind(this);
        this.selectMovieList = this.selectMovieList.bind(this);
    }

    /*
     *  @render()
     *  React Lifecyle Function
     */
    render() {
        return (
            <div className='container-fluid'>
                {this.manageRender()}
            </div>
        );
    }

    /*
     *  @manageRender()
     *  manages render according to passed param
     */
    manageRender() {
        switch (this.streamName) {
            case 'youtube':
                this.executeRenderStream = this.renderStreamYoutube();
                break;
            default:
                this.executeRenderStream = this.renderStreamYoutube();
        }

        return this.executeRenderStream;
    }

    /*
     *  @renderStreamYoutube()
     *  manages youtube stream
     */
    renderStreamYoutube() {
        let iframe = '';
        let callBack = {
            selectMovieList: this.selectMovieList
        };
        const url = 'https://www.youtube.com/embed/' + this.state.videoId;
        const classNameThemeItem = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 theme-item p-0';

        if (this.state.videoId) {
            iframe = <Iframe
                videoId={this.state.videoIde}
                callBack={callBack}
                url={url} />;
        }

        /*
         *  @JSX Syntax to display
         */
        return (
            <div>
                <div className='row mb-3'>
                    <div className='col-12 col-sm-12'>
                        <MovieList callBack={callBack} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12'>
                        {iframe}
                    </div>
                </div>
                <ul className='fixed-bottom list-group d-block theme-group'>
                    <li className={classNameThemeItem}>
                        <a className='p-2' data-theme='black-red' onClick={this.selectTheme}>Black & Red</a>
                    </li>
                    <li className={classNameThemeItem}>
                        <a className='p-2' data-theme='white-blue' onClick={this.selectTheme}>White & Blue</a>
                    </li>
                </ul>
            </div>
        );
    }

    selectMovieList(event) {
        this.setState({
            videoId: event.target.getAttribute('data-video'),
        });
    }

    selectTheme(event) {
        let bodyThemeName = '';

        switch(event.target.getAttribute('data-theme')) {
            case 'black-red':
                bodyThemeName = event.target.getAttribute('data-theme');
                break;
            case 'white-blue':
                bodyThemeName = event.target.getAttribute('data-theme');
                break;
            default:
                bodyThemeName = 'white-blue';
        }

        document.body.setAttribute(
            'class',
            bodyThemeName
        );
    }
}

/*
 *  @RenderManager
 *  Only class to export from this file
 */
export default RenderManager;
