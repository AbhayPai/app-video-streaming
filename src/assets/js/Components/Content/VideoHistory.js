/*
 *  All Usable Libraries in this File
 */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

const VideoHistory = (props) => {
    let renderMarkup = '';

    props.listshistory.length > 0 ?
        renderMarkup = (
            <Suspense fallback={<div>Loading...</div>}>
                <div className='col-12'>
                    <h1 className='display-4 mb-3 page-title'>
                        Recently Played Video.
                    </h1>
                </div>
                <div className='col-12'>
                    <ul className='list-group d-block recently-played'>
                        {
                            props.listshistory.map((list) => {
                                return (
                                    <li
                                        className='list-group-item recently-played-item list-group-item-primary text-white d-inline-block mr-1 mb-1'
                                        key={list.id}
                                        data-title={list.title}
                                        data-video={list.url}
                                    >
                                        <span
                                            onClick={
                                                () => {
                                                    props.handleActiveClass(
                                                        list
                                                    );
                                                }
                                            }
                                        >
                                            {list.title}
                                        </span>
                                        <span
                                            className='delete pl-2'
                                            onClick={
                                                () => {
                                                    props.handleListDelete(list.id);
                                                }
                                            }
                                        >
                                            X
                                        </span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </Suspense>
        ) :
        '' ; // Do Nothing.

    return(renderMarkup);
};

VideoHistory.propTypes = {
    active: PropTypes.object,
    listshistory: PropTypes.array,
    handleListDelete: PropTypes.func,
    handleActiveClass: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoHistory);
