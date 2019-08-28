/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class VideoList extends React.Component {
    render() {
        const movieAnchorClass = 'p-2';
        const VideoListClass = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 mb-3 p-0';

        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on movie title from the list below.</h1>
                    <ul className='list-group d-block movie-group'>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Chickadee-Feeding.mp4'>Chickadee Feeding</a>
                        </li>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Closeup-Bird.mp4'>Closeup Bird</a>
                        </li>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Nature-Water-Fall.mp4'>Nature Water Fall</a>
                        </li>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Nature-Water-Fall.mp4'>Nature Water Fall</a>
                        </li>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Prairie-Dog.mov'>Prairie Dog</a>
                        </li>
                        <li className={VideoListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Squirrel-Monkey.mp4'>Squirrel Monkey</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

/*
 *  defining Proptype for the VideoList Class
 */
VideoList.propTypes = {
    callBack: PropTypes.func,
};

/*
 *  @VideoList
 *  Only class to export from this file
 */
export default VideoList;
