/*
 *  All Usable Libraries in this File
 */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Cookie from "UtilitiesPath/Cookie";

/*
 *  Extending React Component
 */
const ThemeManager = (props) => {
    useEffect(() => {
        document.body.setAttribute(
            'class',
            Cookie.getCookie('theme') || 'white-blue'
        );
    }, []);

    /*
     *  @selectTheme()
     *  updates the color of according to the selection
     */
    const selectTheme = (event) => {
        let bodyThemeName = '';

        switch(event.target.getAttribute('data-theme')) {
            case 'black-red':
                bodyThemeName = event.target.getAttribute('data-theme');
                break;
            case 'white-blue':
                bodyThemeName = event.target.getAttribute('data-theme');
                break;
            default:
                bodyThemeName = 'white-blue';
        }

        Cookie.setCookie(
            'theme',
            bodyThemeName,
            7,
            '/'
        );

        document.body.setAttribute(
            'class',
            Cookie.getCookie('theme')
        );
    };

    const classNameThemeItem = 'list-group-item list-group-item-primary text-white d-inline-block mr-1 theme-item p-0';

    return (
        <ul className='fixed-bottom list-group d-block theme-group'>
            <li className={classNameThemeItem}>
                <a className='p-2' data-theme='black-red' onClick={selectTheme}>Black & Red</a>
            </li>
            <li className={classNameThemeItem}>
                <a className='p-2' data-theme='white-blue' onClick={selectTheme}>White & Blue</a>
            </li>
            {
                props.nowplaying ?
                    <li className={classNameThemeItem}>
                        <a className='p-2'>Now Playing: {props.nowplaying}</a>
                    </li> :
                    ''
            }
        </ul>
    );
};

/*
 *  defining Proptype for the ThemeManager Class
 */
ThemeManager.propTypes = {
    nowplaying: PropTypes.string,
};

/*
 *  Export @ThemeManager
 */
export default ThemeManager;
