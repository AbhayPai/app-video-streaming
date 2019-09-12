/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import Cookie from "UtilitiesPath/Cookie";
import GetVideoList from 'ModulesPath/GetVideoList';

/*
 *  Extending React Component
 */
class VideoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeId: '',
            nowPlaying: '',
            lists: new GetVideoList().getAllList(),
        };

        this.search = this.search.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    render() {
        let {lists} = this.state;

        return(
            <ul className='list-group playlist border border-primary'>
                <input
                    type='text'
                    placeholder='Search'
                    className='form-control search'
                    id='search'
                    onChange={this.search}
                />
                {
                    lists.map((list) => {
                        return (
                            <li
                                className={
                                    this.state.activeId === list.id ?
                                        'list-group-item active' :
                                        'list-group-item'
                                }
                                key={list.id}
                                data-video={list.url}
                                onClick={
                                    (event) => {
                                        this.toggleClass(
                                            event, list
                                        );
                                    }
                                }
                            >
                                {list.title}
                            </li>
                        );
                    })
                }
                {
                    this.state.nowPlaying ?
                        <li className='list-group-item active nowplaying'>
                            {this.state.nowPlaying}
                        </li> :
                        ''
                }
            </ul>
        );
    }

    search(event) {
        let lists = [];

        if (new GetVideoList().searchFromList(event.target.value).length > 0) {
            lists = new GetVideoList().searchFromList(event.target.value);
        } else {
            lists = new GetVideoList().getAllList();
        }

        this.setState({
            lists,
        });
    }

    toggleClass(event, list) {
        this.setState({
            activeId: list.id,
            nowPlaying: 'Now Playing: ' + list.title,
        });

        let videoHistory = Cookie.getCookie('videoHistory');

        if (typeof videoHistory !== 'undefined') {
            videoHistory = JSON.parse(videoHistory);
        } else {
            videoHistory = [];
        }

        if (!this.searchHistory(list.id, videoHistory)) videoHistory.push(list);

        Cookie.setCookie(
            'videoHistory',
            JSON.stringify(videoHistory),
            7,
            '/'
        );

        this.props.callBack(event);
    }

    searchHistory(id, list) {
        for (var i=0; i < list.length; i++) {
            if (list[i].id === id) return true;
        }

        return false;
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
