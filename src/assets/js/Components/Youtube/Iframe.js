/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

/*
 *  Extending React Component
 */
class Iframe extends React.Component {
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
 *  defining Proptype for the Iframe Class
 */
Iframe.propTypes = {
    url: PropTypes.string,
};

/*
 *  @Iframe
 *  Only class to export from this file
 */
export default Iframe;
