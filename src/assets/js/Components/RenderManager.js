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
        };
        this.selectMovieList = this.selectMovieList.bind(this);
    }

    /*
     *  @render()
     *  React Lifecyle Function
     */
    render() {
        return this.manageRender();
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
            <div className='container-fluid'>
                <h1 className='display-4 mb-3'>Click on movie title from the list below.</h1>
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
            </div>
        );
    }

    selectMovieList(event) {
        this.setState({
            videoId: event.target.getAttribute('data-video'),
        });
    }
}

/*
 *  @RenderManager
 *  Only class to export from this file
 */
export default RenderManager;
