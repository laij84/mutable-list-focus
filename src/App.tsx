import React, { useState } from 'react'

import { ListItem } from './components/ListItem/ListItem'

export const App: React.FC = () => {
    const [list, setList] = useState([
        'Build app',
        'Improve accessibility',
        'Write gists',
        'Write article',
        'Publish story',
    ])

    const [status, setStatus] = useState('')

    const handleDelete = (text: string) => {
        setList((prevState) => prevState.filter((item) => item !== text))
        setStatus(`Todo "${text}" deleted.`)
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const todo = e.currentTarget.todo.value
                    setList((prevState) => [...prevState, todo])
                    setStatus(`Todo "${todo}" added.`)
                }}
            >
                <label htmlFor="todo">Enter a todo</label>
                <input type="text" name="todo" id="todo" />
            </form>

            <p role="status">{status}</p>

            <ol tabIndex={-1}>
                {list.map((item) => (
                    <ListItem key={item} text={item} handleDelete={handleDelete} />
                ))}
            </ol>
        </>
    )
}
