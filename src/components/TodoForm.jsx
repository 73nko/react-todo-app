import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

export const TodoForm = () => {
    const { addCard } = useContext(AppContext);
    const [todo, setTodo] = useState("");

    const handleInput = ({ target }) => setTodo(target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addCard(todo);
        setTodo("");
    };
    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="todo">Add a new todo item</label>
            <input
                type="text"
                name="todo"
                id="todo"
                value={todo}
                onChange={handleInput}
            />

            <button type="submit">Add</button>
        </form>
    );
};
