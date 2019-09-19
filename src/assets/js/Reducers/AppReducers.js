import GetVideoList from 'ModulesPath/GetVideoList';
import { initialState } from 'StatesPath/GlobalStates';
import { GetListHistory, SearchList, SetListHistory, SaveListHistory } from 'ModulesPath/ListHistory';

/*
 *  Example:-
 *  createStore(AppReducers);
 */
const AppReducers = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return {};
    }

    const newState = Object.assign({}, state);

    if (action.type === 'LIST_SEARCH') {
        GetVideoList().searchFromList(event.target.value).length > 0 ?
            newState.lists = GetVideoList().searchFromList(event.target.value) :
            newState.lists = GetVideoList().getAllList();
    }

    if (action.type === 'LIST_HISTORY') {
        if (!SearchList(action.list.id, state.listshistory)) {
            newState.listshistory = state.listshistory.concat(action.list);
        }

        newState.active = action.list;
        newState.active.videocategory = state.videocategory;
        SetListHistory(newState.active);
    }

    if (action.type === 'LIST_DELETE') {
        newState.listshistory = GetListHistory().filter(( obj ) => {
            return obj.id !== action.listid;
        });

        newState.listshistory[0] ?
            newState.active = newState.listshistory[0]:
            newState.active = initialState.active;

        SaveListHistory(newState.listshistory);
    }

    if (action.type === 'LIST_ACTIVE' &&
        action.list.id !== newState.active.id) {
        newState.active = action.list;
        newState.active.videocategory = state.videocategory;
    }

    if (action.type === 'VIDEO_CATEGORY') {
        newState.videocategory = action.videocategory;
        newState.active.videocategory = action.videocategory;
        newState.active.videocategory = state.videocategory;
    }

    return newState;
};

export default AppReducers;