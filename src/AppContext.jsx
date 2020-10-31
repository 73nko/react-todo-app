import * as React from "react";
import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "./hooks/useLocalStorage";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [cards, setCards] = useLocalStorage("cards", []);

    const addCard = (text) => {
        const id = uuidv4();
        const newCard = { id, text, status: "new" };
        setCards([...cards, newCard]);
    };

    const removeCard = (id) => {
        const newCards = cards.filter((card) => card.id !== id);
        setCards(newCards);
    };

    const completeTodo = (id) => {
        const newCards = cards.map((card) => {
            return id === card.id
                ? { ...card, status: card.status === "done" ? "new" : "done" }
                : card;
        });
        setCards(newCards);
    };

    const contextValue = {
        cards,
        addCard,
        removeCard,
        completeTodo,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
