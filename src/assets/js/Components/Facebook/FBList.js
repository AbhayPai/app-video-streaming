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
        return(
            <div className='row mb-3'>
                <div className='col-12 col-sm-12'>
                    <h1 className='display-4 mb-3 page-title'>Click on title from the list below.</h1>
                    <select onChange={this.props.callBack} defaultValue={'DEFAULT'} className='form-control movie-group'>
                        <option disabled value='DEFAULT'> -- select an option -- </option>
                        <option data-video='dailygoalcast/videos/1339998596145181/'>
                            Sekou Andrews - Give A Damn
                        </option>
                        <option data-video='dailygoalcast/videos/1340533822758325/'>
                            Brendan Burchard - Earn Your Blessing
                        </option>
                        <option data-video='dailygoalcast/videos/1341193462692361/'>
                            David Goggins - Embrace the Suck
                        </option>
                        <option data-video='dailygoalcast/videos/1341980082613699/'>
                            Mandy Morris - Choose Love
                        </option>
                        <option data-video='dailygoalcast/videos/1341300096015031/'>
                            Stephen Hawking - Reach for the Stars
                        </option>
                        <option data-video='dailygoalcast/videos/1343257965819244/'>
                            Rick Rigsby - Make an Impact
                        </option>
                        <option data-video='dailygoalcast/videos/1343970052414702/'>
                            Jim Morris - Nothing Is Impossible
                        </option>
                        <option data-video='dailygoalcast/videos/1344562165688824/'>
                            Dr. Robert Quinn - Find Your Purpose
                        </option>
                        <option data-video='dailygoalcast/videos/1345225718955802/'>
                            Sebastian Terry - What's on Your List
                        </option>
                        <option data-video='dailygoalcast/videos/1345960885548952/'>
                            Lisa Nichols - Find Your Way Back
                        </option>
                        <option data-video='dailygoalcast/videos/1346335345511506/'>
                            Kevin Rupp - Keep Hope Alive
                        </option>
                        <option data-video='dailygoalcast/videos/1346780378800336/'>
                            Khalid Latif - Become Your Tomorrow
                        </option>
                        <option data-video='dailygoalcast/videos/1341980082613699/'>
                            Mandy Morris - Choose Love
                        </option>
                        <option data-video='dailygoalcast/videos/1348524248625949/'>
                            Jana Kramer - Break The Silence
                        </option>
                        <option data-video='dailygoalcast/videos/1349256341886073/'>
                            John Assaraf - Write Your Story
                        </option>
                        <option data-video='dailygoalcast/videos/1349883875156653/'>
                            Richard Pimentel - Believe in Someone
                        </option>
                        <option data-video='dailygoalcast/videos/1350457528432621/'>
                            Jake Bailey - Stay Strong
                        </option>
                        <option data-video='dailygoalcast/videos/1350596385085402/'>
                            Les Brown - Chase Your Dream
                        </option>
                        <option data-video='dailygoalcast/videos/1350518078426566/'>
                            Rock Thomas - Redefine Yourself
                        </option>
                        <option data-video='dailygoalcast/videos/1352586878219686/'>
                            Grant Cardone - Go All The Way
                        </option>
                        <option data-video='dailygoalcast/videos/1353115148166859/'>
                            Sunny Jacobs - Shine Your Light
                        </option>
                    </select>
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
