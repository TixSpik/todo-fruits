import { createStore } from 'redux'
import rootReducer from './reducers'

// Store
// Almacenamiento de nuestro estado
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store