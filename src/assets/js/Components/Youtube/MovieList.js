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
        const movieAnchorClass = 'p-2';
        const movieListClass = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 mb-3 p-0';

        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on movie title from the list below.</h1>
                    <ul className='list-group d-block movie-group'>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='7y3KbUHnee8'>Bajrangi Bhaijaan</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='a0yYmyVD-5M'>Jai Ho</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='8FWj1ED6I6A'>Dabang 2</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dPgS6Xzxj64'>Baby</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='EACzgWlPKe4'>kick</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='wtO-QE_PbJY'>Bodyguard</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='xhKan-i1qoU'>Partner</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='LvtEnYvicno'>Dangal</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dw6QQdFEfeo'>Ghajini</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='D4HvmICrC8w'>PK</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='0qBBSAFjlEs'>Thugs of Hindostan</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='KHFpcUq7b8I'>Taare Zameen Par</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='S0qD_kGzz-s'>Rang de basanti</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='AI0FuE6jkB0'>Brothers: Blood Against Blood</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='Gj0q9mFn8bg'>Boss</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='zB2uW7hFs1I'>Airlift</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='lg2i2oqnoy0'>Singh Is Bliing</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='1FT6VOrFMLo'>Phir Hera Pheri</a>
                        </li>
                        <li className={movieListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='e6QGJ5B_ceQ'>Housefull 3</a>
                        </li>
                    </ul>
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
