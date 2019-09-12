/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

/*
 *  Extending React Component
 */
class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ReactPlayer
                url={this.props.url}
                width={this.props.width || '100%'}
                height={this.props.height || '400px'}
            />
        );
    }
}

/*
 *  defining Proptype for the Player Class
 */
Player.propTypes = {
    url: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

/*
 *  @Player
 *  Only class to export from this file
 */
export default Player;
