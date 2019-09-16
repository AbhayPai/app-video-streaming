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
                                        'list-group-item playlist-item active' :
                                        'list-group-item playlist-item'
                                }
                                key={list.id}
                                data-video={list.url}
                                data-title={list.title}
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
            </ul>
        );
    }

    search(event) {
        let lists = [];

        new GetVideoList().searchFromList(event.target.value).length > 0 ?
            lists = new GetVideoList().searchFromList(event.target.value) :
            lists = new GetVideoList().getAllList();

        this.setState({
            lists,
        });
    }

    toggleClass(event, list) {
        this.setState({
            activeId: list.id,
        });

        let tempVideoHistory = Cookie.getCookie('videoHistory');

        typeof tempVideoHistory !== 'undefined' ?
            tempVideoHistory = JSON.parse(tempVideoHistory) :
            tempVideoHistory = [];

        !this.searchHistory(list.id, tempVideoHistory) ?
            tempVideoHistory.push(list) :
            '';

        Cookie.setCookie(
            'videoHistory',
            JSON.stringify(tempVideoHistory),
            7,
            '/'
        );

        this.props.playVideo(event);
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
    playVideo: PropTypes.func,
};

/*
 *  @VideoList
 *  Only class to export from this file
 */
export default VideoList;
