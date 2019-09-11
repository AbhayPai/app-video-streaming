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
            <div className='col-8 col-sm-8'>
                <ReactPlayer url={this.props.url} width='100%' height='400px' />
            </div>
        );
    }
}

/*
 *  defining Proptype for the Player Class
 */
Player.propTypes = {
    url: PropTypes.string,
};

/*
 *  @Player
 *  Only class to export from this file
 */
export default Player;
