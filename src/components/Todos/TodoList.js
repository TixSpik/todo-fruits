import React from 'react'

export default function TodoList({ todo, updateTodo, deleteTodo }) {
    return (
        <div>
            <li onClick={() => updateTodo(todo)} style={{ margin: 40, padding: 20, }}>
                <input type='checkbox' defaultChecked={todo.checked} />
                {todo.text}
            </li>
            <button style={{ alignItems: 'start' }} onClick={() => deleteTodo(todo)}>X</button>
        </div>
    )
}
