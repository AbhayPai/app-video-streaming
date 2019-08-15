/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class Iframe extends React.Component {
    render() {
        return(
            <div>
                <iframe width='100%' height='600' src={this.props.url} />
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
