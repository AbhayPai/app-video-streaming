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
import Navbar from 'ComponentsPath/Header/Navbar';
import VideoList from 'ComponentsPath/Content/VideoList';
import VideoPlayer from 'ComponentsPath/Content/VideoPlayer';
import ThemeManager from 'ComponentsPath/Footer/ThemeManager';
import VideoHistory from 'ComponentsPath/Content/VideoHistory';
import VideoCategory from 'ComponentsPath/Content/VideoCategory';

/*
 *  Extending React Component
 */
const RenderContent = (props) => {
    return(
        <React.Fragment>
            <Navbar />
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h1 className='display-4 mb-3 page-title'>
                            Category
                        </h1>
                    </div>
                    <div className='col-12'>
                        <VideoCategory />
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
                                    <VideoList />
                                </div>
                                <div className='col-8 col-sm-8'>
                                    <VideoPlayer />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <VideoHistory />
                            </div>
                        </React.Fragment> :
                        ''
                }
            </div>
            <ThemeManager />
        </React.Fragment>
    );
};

RenderContent.propTypes = {
    videocategory: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderContent);
