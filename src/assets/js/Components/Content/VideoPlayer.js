/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

/*
 *  Extending React Component
 */
const VideoPlayer = (props) => {
    return(
        <ReactPlayer
            url={props.active.url}
            width='100%'
            height='400px'
            onPlay={
                () => {
                    props.handleListHistory(
                        props.active
                    );
                }
            }
        />
    );
};

VideoPlayer.propTypes = {
    active: PropTypes.object,
    handleListHistory: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
