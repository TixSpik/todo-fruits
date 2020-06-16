import React from 'react'
import { connect } from 'react-redux'
// import { updateName } from '../redux/actions/userActions'
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions/todoActions'
import { getId } from '../../utils'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todos = ({ todo, addTodo, updateTodo, deleteTodo }) => {

    const AddTodo = (e) => {
        e.preventDefault()
        const text = e.target[0].value
        addTodo({
            text,
            checked: false,
            id: getId()
        })
        e.target[0].value = ''
    }

    return (
        <div>
            <h2>Todos</h2>


            <TodoForm AddTodo={AddTodo} />

            <ul style={{ backgroundColor: 'grey' }}>
                {todo.todos.map(todo => (
                    <React.Fragment key={todo.id}>
                        <TodoList todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateName: (name) => dispatch(updateName(name))
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)