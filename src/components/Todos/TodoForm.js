import React from 'react'

export default function TodoForm({ AddTodo }) {
    return (
        <form onSubmit={AddTodo}>
            <input type='text' />
            <button>Agregar</button>
        </form>
    )
}
