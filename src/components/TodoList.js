import React from 'react';
import { Button } from 'react-bootstrap';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
    return (
        <div className='todoList'>
            <h1> ToDo List </h1>
            {todos.map((item, i) => (
                <ul className="paragrap-ul" key={item}>
                    <li>
                        {item}
                        <Button className='removeBtn' onClick={() => deleteTodo(i)}>Delete</Button>
                        <Button className='editBtn' onClick={() => editTodo(i)}>Edit</Button>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default TodoList;
