import { useContext } from "react";

import { AppContext } from "../AppContext";

import { TodoCard } from "./TodoCard";

export const TodoList = () => {
    const { cards } = useContext(AppContext);
    console.log({ cards });
    return (
        <div>
            {cards.map(({ id, text, status }) => (
                <TodoCard key={id} id={id} text={text} status={status} />
            ))}
        </div>
    );
};
