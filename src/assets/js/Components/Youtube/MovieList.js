/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class MovieList extends React.Component {
    render() {
        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on movie title from the list below.</h1>
                    <select onChange={this.props.callBack} defaultValue={'DEFAULT'} className='form-control movie-group'>
                        <option disabled value='DEFAULT'> -- select an option -- </option>
                        <option data-video='7y3KbUHnee8'>
                            Bajrangi Bhaijaan
                        </option>
                        <option data-video='a0yYmyVD-5M'>
                            Jai Ho
                        </option>
                        <option data-video='dPgS6Xzxj64'>
                            Baby
                        </option>
                        <option data-video='EACzgWlPKe4'>
                            kick
                        </option>
                        <option data-video='LvtEnYvicno'>
                            Dangal
                        </option>
                        <option data-video='dw6QQdFEfeo'>
                            Ghajini
                        </option>
                        <option data-video='D4HvmICrC8w'>
                            PK
                        </option>
                        <option data-video='0qBBSAFjlEs'>
                            Thugs of Hindostan
                        </option>
                        <option data-video='KHFpcUq7b8I'>
                            Taare Zameen Par
                        </option>
                        <option data-video='S0qD_kGzz-s'>
                            Rang de basanti
                        </option>
                        <option data-video='AI0FuE6jkB0'>
                            Brothers: Blood Against Blood
                        </option>
                        <option data-video='Gj0q9mFn8bg'>
                            Boss
                        </option>
                        <option data-video='zB2uW7hFs1I'>
                            Airlift
                        </option>
                        <option data-video='e6QGJ5B_ceQ'>
                            Housefull 3
                        </option>
                    </select>
                </div>
            </div>
        );
    }
}

/*
 *  defining Proptype for the MovieList Class
 */
MovieList.propTypes = {
    callBack: PropTypes.func,
};

/*
 *  @MovieList
 *  Only class to export from this file
 */
export default MovieList;
