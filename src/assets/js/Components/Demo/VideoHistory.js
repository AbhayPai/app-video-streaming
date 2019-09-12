/*
 *  All Usable Libraries in this File
 */
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import Cookie from 'UtilitiesPath/Cookie';

/*
 *  Extending React Component
 */
class VideoHistory extends React.Component {
    render() {
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
                    <div className='col-12'>
                        <ul className='list-group d-block'>
                            {
                                videoHistory.map((list) => {
                                    return (
                                        <li
                                            className='list-group-item list-group-item-primary text-white d-inline-block mr-1 mb-1'
                                            key={list.id}
                                            data-video={list.url}
                                            onClick={this.props.callBack}
                                        >
                                            {list.title}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
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
    callBack: PropTypes.func,
};

/*
 *  @VideoHistory
 *  Only class to export from this file
 */
export default VideoHistory;
