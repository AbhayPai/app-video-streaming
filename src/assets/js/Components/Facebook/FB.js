/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

/*
 *  Extending React Component
 */
class FB extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='row'>
                <div className='col-12 col-sm-12'>
                    <ReactPlayer url={this.props.url} width='100%' />
                </div>
            </div>
        );
    }
}

/*
 *  defining Proptype for the FB Class
 */
FB.propTypes = {
    url: PropTypes.string,
};

/*
 *  @FB
 *  Only class to export from this file
 */
export default FB;
