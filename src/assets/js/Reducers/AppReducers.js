import GetVideoList from 'ModulesPath/GetVideoList';
import { initialState } from 'StatesPath/GlobalStates';
import { SearchList, SetListHistory } from 'ModulesPath/ListHistory';

/*
 *  Example:-
 *  createStore(AppReducers);
 */
const AppReducers = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return {};
    }

    const newState = Object.assign({}, state);

    if (action.type === 'SEARCH_LIST') {
        new GetVideoList().searchFromList(event.target.value).length > 0 ?
            newState.lists = new GetVideoList().searchFromList(event.target.value) :
            newState.lists = new GetVideoList().getAllList();
    }

    if (action.type === 'HANDLE_ACTIVE_LIST' &&
        action.list.id !== newState.active.id) {
        if (!SearchList(action.list.id, state.listshistory)) {
            newState.listshistory = state.listshistory.concat(action.list);
        }

        newState.active = action.list;
        newState.active.videocategory = state.videocategory;
        new SetListHistory(newState.active);
    }

    if (action.type === 'HANDLE_CATEGORY') {
        newState.videocategory = action.videocategory;
        newState.active.videocategory = action.videocategory;
    }

    return newState;
};

export default AppReducers;