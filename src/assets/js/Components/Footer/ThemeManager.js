/*
 *  All Usable Libraries in this File
 */
import React from 'react';

/*
 *  Extending React Component
 */
class ThemeManager extends React.Component {
    constructor(props) {
        super(props);
        this.selectTheme = this.selectTheme.bind(this);
    }

    componentDidMount() {
        document.body.setAttribute(
            'class',
            localStorage.getItem('theme') || 'white-blue'
        );
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
                    <a className='p-2' data-theme='black-red' onClick={this.selectTheme}>Black & Red</a>
                </li>
                <li className={classNameThemeItem}>
                    <a className='p-2' data-theme='white-blue' onClick={this.selectTheme}>White & Blue</a>
                </li>
            </ul>
        );
    }

    /*
     *  @selectTheme()
     *  updates the color of according to the selection
     */
    selectTheme(event) {
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

        localStorage.setItem('theme', bodyThemeName);

        document.body.setAttribute(
            'class',
            localStorage.getItem('theme')
        );
    }
}

/*
 *  Export @ThemeManager
 */
export default ThemeManager;
