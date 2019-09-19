/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

/*
 *  Extending React Component
 */
const VideoCategory = (props) => {
    let categories = [
        {
            "id": 1,
            "name": "motivational",
            "title": "Motivational",
        },
    ];

    return(
        <ul className='list-group d-block category'>
            {
                categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                                props.active.videocategory === category.name ?
                                    'list-group-item category-item d-inline-block border border-0 mr-1 mb-1 active' :
                                    'list-group-item category-item d-inline-block border border-0 mr-1 mb-1'
                            }
                            data-category={category.name}
                            onClick={
                                (event) => {
                                    props.handleVideoCategory(event);
                                }
                            }
                        >
                            {category.title}
                        </li>
                    );
                })
            }
        </ul>
    );
};

VideoCategory.propTypes = {
    active: PropTypes.object,
    handleVideoCategory: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoCategory);