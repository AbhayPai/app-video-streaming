/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

/*
 *  All Usable React Reusable Components in this File
 */
import ThemeManager from 'ComponentsPath/Footer/ThemeManager';

import TestVideoList from 'ComponentsPath/Content/VideoList';
import TestVideoPlayer from 'ComponentsPath/Content/VideoPlayer';
import TestVideoHistory from 'ComponentsPath/Content/VideoHistory';
import TestVideoCategory from 'ComponentsPath/Content/VideoCategory';

/*
 *  Extending React Component
 */
const RenderContent = (props) => {
    return(
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h1 className='display-4 mb-3 page-title'>
                            Category
                        </h1>
                    </div>
                    <div className='col-12'>
                        <TestVideoCategory />
                    </div>
                </div>
                {
                    props.videocategory === 'motivational' ?
                        <React.Fragment>
                            <div className='row mb-3'>
                                <div className='col-12'>
                                    <h1 className='display-4 mb-3 page-title'>
                                        Motivational Video Lists.
                                    </h1>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <TestVideoList />
                                </div>
                                <div className='col-8 col-sm-8'>
                                    <TestVideoPlayer />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <TestVideoHistory />
                            </div>
                        </React.Fragment> :
                        ''
                }
                <ThemeManager />
            </div>
        </React.Fragment>
    );
};

RenderContent.propTypes = {
    videocategory: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderContent);
