/*
 *  All Usable Libraries in this File
 */
import PropTypes from 'prop-types';
import React, { Fragment, Suspense } from 'react';

/*
 *  All Usable React Reusable Components in this File
 */
import VideoList from 'ComponentsPath/Demo/VideoList';
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
        this.player = '';
        this.streamName = this.props.streamName;
        this.playVideo = this.playVideo.bind(this);
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
            // motivational video case
            case 'motivational':
                this.url = this.state.videoId;

                if (this.state.videoId) {
                    const LazyLoadVideo = React.lazy(
                        () => import('ComponentsPath/Demo/Player')
                    );

                    this.player = <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadVideo url={this.url} />
                    </Suspense>;
                }

                this.executeRenderStream = this.renderVideo(this.player);
                break;

            // default video case
            default:
                this.executeRenderStream = this.renderStreamNotFound();
        }

        return this.executeRenderStream;
    }

    /*
     *  @renderStreamPersonal()
     *  manages personal stream
     */
    renderVideo(player) {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h1 className='display-4 mb-3 page-title text-center'>
                            Motivational Video Lists.
                        </h1>
                    </div>
                    <VideoList
                        callBack={this.playVideo}
                    />
                    {player}
                </div>
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
     *  @playVideo()
     *  updates state
     */
    playVideo(event) {
        this.setState({
            videoId: event.target.getAttribute('data-video'),
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
