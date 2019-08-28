/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class Video extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.contextMenuHandler = this.contextMenuHandler.bind(this);
    }

    render() {
        return(
            <div className='row'>
                <div className='col-12 col-sm-12'>
                    <video width='100%' onClick={this.clickHandler}
                        onContextMenu={this.contextMenuHandler}>
                        <source src={this.props.url}
                            type='video/mp4' crossOrigin='anonymous' />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        );
    }

    contextMenuHandler(event) {
        event.preventDefault();
    }

    clickHandler(event) {
        event.preventDefault();
        event.target.paused ? event.target.play() : event.target.pause();
    }
}

/*
 *  defining Proptype for the Video Class
 */
Video.propTypes = {
    url: PropTypes.string,
};

/*
 *  @Video
 *  Only class to export from this file
 */
export default Video;
