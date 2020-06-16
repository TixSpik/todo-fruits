import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todoActions'

const initialState = {
    todos: [
        {
            text: 'Crear componente',
            id: 'asd3',
            checked: false
        },
        {
            text: 'Eliminar componente',
            id: 'asd34',
            checked: true
        }
    ]
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                //copiamos el objeto con los items existentes
                ...state,
                todos: [
                    //se copian todos los TODOS dentro del array mas en nuevo que se agrega
                    action.payload,
                    ...state.todos
                ]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (action.payload.id === todo.id) {
                        return {
                            ...todo,
                            checked: !todo.checked
                        }
                    }
                    return todo
                })

            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }

        default:
            return state
    }
}

export default todo