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
        handleSearchList: (value) => dispatch(
            {
                value,
                type: 'SEARCH_LIST',
            }
        ),
        handleActiveList: (list) => dispatch(
            {
                list,
                type: 'HANDLE_ACTIVE_LIST',
            }
        ),
        handleVideoCategory: (event) => dispatch(
            {
                videocategory: event.target.getAttribute('data-category'),
                type: 'HANDLE_CATEGORY'
            }
        ),
    };
};

export {
    mapStateToProps,
    mapDispatchToProps
};
