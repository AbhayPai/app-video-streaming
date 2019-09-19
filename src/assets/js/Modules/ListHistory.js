import Cookie from "UtilitiesPath/Cookie";

const SaveListHistory = (lists) => {
    Cookie.setCookie(
        'videoHistory',
        JSON.stringify(lists),
        7,
        '/'
    );
};

const GetListHistory =  () => {
    let tempVideoHistory = Cookie.getCookie('videoHistory');

    typeof tempVideoHistory !== 'undefined' ?
        tempVideoHistory = JSON.parse(tempVideoHistory) :
        tempVideoHistory = [];

    return tempVideoHistory;
};

const SearchList = (id, list) => {
    for (var i=0; i < list.length; i++) {
        if (list[i].id === id) return true;
    }

    return false;
};

const SetListHistory = (list) => {
    let tempVideoHistory = GetListHistory();

    !SearchList(list.id, tempVideoHistory) ?
        tempVideoHistory.push(list) :
        '';

    SaveListHistory(tempVideoHistory);
};

export {
    SearchList,
    GetListHistory,
    SetListHistory,
    SaveListHistory,
};
