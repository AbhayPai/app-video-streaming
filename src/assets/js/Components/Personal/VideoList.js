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
        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on movie title from the list below.</h1>
                    <select onChange={this.props.callBack} defaultValue={'DEFAULT'} className='form-control movie-group'>
                        <option disabled value='DEFAULT'> -- select an option -- </option>
                        <option data-video='Chickadee-Feeding.mp4'>
                                Chickadee Feeding
                        </option>
                        <option data-video='Closeup-Bird.mp4'>
                                Closeup Bird
                        </option>
                        <option data-video='Nature-Water-Fall.mp4'>
                                Nature Water Fall
                        </option>
                        <option data-video='Nature-Water-Fall.mp4'>
                                Nature Water Fall
                        </option>
                        <option data-video='Prairie-Dog.mov'>
                                Prairie Dog
                        </option>
                        <option data-video='Squirrel-Monkey.mp4'>
                                Squirrel Monkey
                        </option>
                    </select>
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
