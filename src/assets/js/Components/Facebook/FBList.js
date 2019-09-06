/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class FBList extends React.Component {
    render() {
        const movieAnchorClass = 'p-2';
        const FBListClass = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 mb-3 p-0';

        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on title from the list below.</h1>
                    <ul className='list-group d-block movie-group'>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1339998596145181/'>Sekou Andrews - Give A Damn</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1340533822758325/'>Brendan Burchard - Earn Your Blessing</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1341193462692361/'>David Goggins - Embrace the Suck</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1341980082613699/'>Mandy Morris - Choose Love</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1341300096015031/'>Stephen Hawking - Reach for the Stars</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1343257965819244/'>Rick Rigsby - Make an Impact</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1343970052414702/'>Jim Morris - Nothing Is Impossible</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1344562165688824/'>Dr. Robert Quinn - Find Your Purpose</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1345225718955802/'>Sebastian Terry - What's on Your List</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1345960885548952/'>Lisa Nichols - Find Your Way Back</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1346335345511506/'>Kevin Rupp - Keep Hope Alive</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1346780378800336/'>Khalid Latif - Become Your Tomorrow</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1341980082613699/'>Mandy Morris - Choose Love</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1348524248625949/'>Jana Kramer - Break The Silence</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1349256341886073/'>John Assaraf - Write Your Story</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1349883875156653/'>Richard Pimentel - Believe in Someone</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1350457528432621/'>Jake Bailey - Stay Strong</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1350596385085402/'>Les Brown - Chase Your Dream</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1350518078426566/'>Rock Thomas - Redefine Yourself</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1352586878219686/'>Grant Cardone - Go All The Way</a>
                        </li>
                        <li className={FBListClass}>
                            <a className={movieAnchorClass}
                                onClick={this.props.callBack}
                                data-video='dailygoalcast/videos/1353115148166859/'>Sunny Jacobs - Shine Your Light</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

/*
 *  defining Proptype for the FBList Class
 */
FBList.propTypes = {
    callBack: PropTypes.func,
};

/*
 *  @FBList
 *  Only class to export from this file
 */
export default FBList;
