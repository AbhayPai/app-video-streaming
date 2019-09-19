const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        active: {
            id: state.active.id,
            url: state.active.url,
            title: state.active.title,
            videocategory: state.active.videocategory,
        },
        videocategory: state.videocategory,
        listshistory: state.listshistory,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleListSearch: (value) => dispatch(
            {
                value,
                type: 'LIST_SEARCH',
            }
        ),
        handleListHistory: (list) => dispatch(
            {
                list,
                type: 'LIST_HISTORY',
            }
        ),
        handleListDelete: (listid) => dispatch(
            {
                listid,
                type: 'LIST_DELETE'
            }
        ),
        handleListActive: (list) => dispatch(
            {
                list,
                type: 'LIST_ACTIVE'
            }
        ),
        handleVideoCategory: (event) => dispatch(
            {
                videocategory: event.target.getAttribute('data-category'),
                type: 'VIDEO_CATEGORY'
            }
        ),
    };
};

export {
    mapStateToProps,
    mapDispatchToProps
};
