import { createStore } from 'redux';

// import reducer from './reducer';
import allReducer from './reducers'
import testInitialState from './testInitialState'

// const initialState =   {
//   first        : [],
//   second        : false,
//   vibes      : [ 
//     { name: 'Rock' },
//     { name: 'Hip Hop' },
//     { name: 'Reggae' },
//     { name: 'Jazz' },
//     { name: 'Country' },
//     { name: 'Disco' },
//     { name: 'Blues' },
//   ]
// }

// const store = createStore(reducer,
const store = createStore(allReducer,
  // TESTING
  testInitialState,

  // jic placeholder for preloadedState so dev tools config line below won't be misconstrued
  // undefined,
 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;

