import GetVideoList from 'ModulesPath/GetVideoList';
import { GetListHistory } from 'ModulesPath/ListHistory';

const initialState = {
    active: {
        id: '',
        url: '',
        title: '',
        videocategory: 'motivational',
    },
    videocategory: 'motivational',
    listshistory: new GetListHistory(),
    lists: new GetVideoList().getAllList(),
};

export {
    initialState
};
