/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

/*
 *  Extending React Component
 */
class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='row'>
                <div className='col-12 col-sm-12'>
                    <ReactPlayer url={this.props.url} />
                </div>
            </div>
        );
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
