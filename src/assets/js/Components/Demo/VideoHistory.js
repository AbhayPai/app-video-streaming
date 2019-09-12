/*
 *  All Usable Libraries in this File
 */
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import Cookie from "UtilitiesPath/Cookie";

/*
 *  Extending React Component
 */
class VideoHistory extends React.Component {
    render() {
        const LazyLoadVideo = React.lazy(
            () => import('ComponentsPath/Demo/Player')
        );
        let renderMarkup = '';

        let videoHistory = Cookie.getCookie('videoHistory');

        if (typeof videoHistory !== 'undefined') {
            videoHistory = JSON.parse(videoHistory);
        } else {
            videoHistory = [];
        }

        if (videoHistory.length > 0) {
            renderMarkup = (
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='col-12'>
                        <h1 className='display-4 mb-3 page-title'>
                            Recently Played Video.
                        </h1>
                    </div>
                    {
                        videoHistory.map((list, index) => {
                            return (
                                <div className='col-2 mb-3' key={index}>
                                    <LazyLoadVideo
                                        key={list.id}
                                        url={list.url}
                                        width={this.props.width || '100%'}
                                        height={this.props.height || '400px'}
                                    />
                                </div>
                            );
                        })
                    }
                </Suspense>
            );
        }

        return(renderMarkup);
    }
}

/*
 *  defining Proptype for the VideoHistory Class
 */
VideoHistory.propTypes = {
    // url: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

/*
 *  @VideoHistory
 *  Only class to export from this file
 */
export default VideoHistory;
