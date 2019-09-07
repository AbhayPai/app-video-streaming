/*
 *  All Usable Libraries in this File
 */
import PropTypes from 'prop-types';
import React, { Fragment, Suspense } from 'react';

/*
 *  All Usable React Reusable Components in this File
 */
import FBList from 'ComponentsPath/Facebook/FBList';
import MovieList from 'ComponentsPath/Youtube/MovieList';
import VideoList from 'ComponentsPath/Personal/VideoList';
import ThemeManager from 'ComponentsPath/Footer/ThemeManager';

/*
 *  Extending React Component
 */
class RenderManager extends React.Component {
    constructor(props) {
        super(props);
        this.url = '';
        this.state = {
            videoId: '',
        };
        this.iframe = '';
        this.streamName = this.props.streamName;
        this.selectMovieList = this.selectMovieList.bind(this);
    }

    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount() {
        // setting up page title
        document.title = "Video App | " + this.props.streamName;
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
            // youtube video case
            case 'youtube':
                if (this.state.videoId) {
                    this.url = 'https://www.youtube.com/embed/' + this.state.videoId;
                    const LazyLoadIframe = React.lazy(
                        () => import('ComponentsPath/Youtube/Iframe')
                    );

                    this.iframe = <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadIframe
                            videoId={this.state.videoIde}
                            url={this.url} />
                    </Suspense>;
                }

                this.executeRenderStream = this.renderStreamYoutube(this.iframe);
                break;

            // personal video case
            case 'personal':
                this.url = 'https://apappvideo.000webhostapp.com/' + this.state.videoId;

                if (this.state.videoId) {
                    const LazyLoadVideo = React.lazy(
                        () => import('ComponentsPath/Personal/Video')
                    );

                    this.iframe = <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadVideo
                            videoId={this.state.videoId}
                            url={this.url} />
                    </Suspense>;
                }

                this.executeRenderStream = this.renderStreamPersonal(this.iframe);
                break;

            // facebook video case
            case 'facebook':
                this.url = 'https://www.facebook.com/' + this.state.videoId;

                if (this.state.videoId) {
                    const LazyLoadVideo = React.lazy(
                        () => import('ComponentsPath/Facebook/FB')
                    );

                    this.iframe = <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadVideo
                            videoId={this.state.videoId}
                            url={this.url} />
                    </Suspense>;
                }

                this.executeRenderStream = this.renderStreamFacebook(this.iframe);
                break;

            // default video case
            default:
                this.executeRenderStream = this.renderStreamNotFound();
        }

        return this.executeRenderStream;
    }

    /*
     *  @renderStreamYoutube()
     *  manages youtube stream
     */
    renderStreamYoutube(iframe) {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <MovieList callBack={this.selectMovieList} />
                {iframe}
                <ThemeManager />
            </Fragment>
        );
    }

    /*
     *  @renderStreamPersonal()
     *  manages personal stream
     */
    renderStreamPersonal(iframe) {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <VideoList callBack={this.selectMovieList} />
                {iframe}
                <ThemeManager />
            </Fragment>
        );
    }

    /*
     *  @renderStreamFacebook()
     *  manages facebook stream
     */
    renderStreamFacebook(iframe) {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <FBList callBack={this.selectMovieList} />
                {iframe}
                <ThemeManager />
            </Fragment>
        );
    }

    /*
     *  @renderStreamNotFound()
     *  manages notfound
     */
    renderStreamNotFound() {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <div className='row mb-3'>
                    <div className='col-12 col-sm-12'>
                        <h1 className='display-4 mb-3 page-title'>Stream Not Found</h1>
                    </div>
                </div>
                <ThemeManager />
            </Fragment>
        );
    }

    /*
     *  @selectMovieList()
     *  updates state for videoId
     */
    selectMovieList(event) {
        this.setState({
            videoId: event.target.options[event.target.selectedIndex].getAttribute('data-video'),
        });
    }
}

/*
 *  defining Proptype for the Iframe Class
 */
RenderManager.propTypes = {
    streamName: PropTypes.string,
};


/*
 *  @RenderManager
 *  Only class to export from this file
 */
export default RenderManager;
