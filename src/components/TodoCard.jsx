import { useContext } from "react";
import { AppContext } from "../AppContext";

import "./todo-card.css";

export const TodoCard = ({ id, text, status }) => {
    const { removeCard, completeTodo } = useContext(AppContext);

    return (
        <div onDoubleClick={() => completeTodo(id)}>
            <span className={status}>{text}</span>
            <button onClick={() => removeCard(id)}>❌</button>
        </div>
    );
};
