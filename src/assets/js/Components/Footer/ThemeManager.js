/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Extending React Component
 */
class ThemeManager extends React.Component {
    constructor(props) {
        super(props);
    }

    /*
     *  @render()
     *  React Lifecyle Function
     */
    render() {
        const classNameThemeItem = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 theme-item p-0';

        return (
            <ul className='fixed-bottom list-group d-block theme-group'>
                <li className={classNameThemeItem}>
                    <a className='p-2' data-theme='black-red' onClick={this.props.callBack}>Black & Red</a>
                </li>
                <li className={classNameThemeItem}>
                    <a className='p-2' data-theme='white-blue' onClick={this.props.callBack}>White & Blue</a>
                </li>
            </ul>
        );
    }
}

/*
 *  defining Proptype for the ThemeManager Class
 */
ThemeManager.propTypes = {
    callBack: PropTypes.func,
};

/*
 *  Export @ThemeManager
 */
export default ThemeManager;
