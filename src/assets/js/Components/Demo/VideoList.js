/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
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
            <div className='col-4 col-sm-4'>
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
                                                event, list.id, list.title
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
            </div>
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

    toggleClass(event, listId, listTitle) {
        this.setState({
            activeId: listId,
            nowPlaying: 'Now Playing: ' + listTitle,
        });
        this.props.callBack(event);
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
