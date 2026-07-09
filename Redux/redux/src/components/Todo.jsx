import { useSelector } from "react-redux";
import AddForm  from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTodo(id));
    }

    return(
        <>
        <AddForm />
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
};