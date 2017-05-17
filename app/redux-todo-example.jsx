var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    //state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};
//check for Redux dev Chrome extension: if it does not exist, pass plain function to keep middleware process working
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(()=> {
    var state = store.getState();

    console.log('Search text:', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});


console.log('currentState: ', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'play'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'rest'
});

console.log('Search text: ', store.getState());
