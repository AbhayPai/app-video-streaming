/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

const VideoList = (props) => {
    return(
        <ul className='list-group playlist border border-primary'>
            <input
                type='text'
                placeholder='Search'
                className='form-control search'
                id='searchs'
                onChange={
                    (event) => {
                        props.handleSearchList(event.target.value);
                    }
                }
            />
            {
                props.lists.map((list) => {
                    return (
                        <li
                            className={
                                props.active.id === list.id ?
                                    'list-group-item playlist-item active' :
                                    'list-group-item playlist-item'
                            }
                            key={list.id}
                            data-video={list.url}
                            data-title={list.title}
                            onClick={
                                () => {
                                    props.handleActiveList(
                                        list
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
};

VideoList.propTypes = {
    lists: PropTypes.array,
    active: PropTypes.object,
    handleSearchList: PropTypes.func,
    handleActiveList: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
