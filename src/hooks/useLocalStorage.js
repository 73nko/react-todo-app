import { useState } from "react";

const getItemFromLocalStorage = (key, defaultValue) => {
    const savedElement = window.localStorage.getItem(key);
    return savedElement ? JSON.parse(savedElement) : defaultValue;
};

export const useLocalStorage = (key = "default", defaultValue) => {
    const savedElement = getItemFromLocalStorage(key, defaultValue);
    const [element, setElement] = useState(savedElement || defaultValue);

    const updateElement = (newValue) => {
        setElement(newValue);
        const stringValue = JSON.stringify(newValue);
        window.localStorage.setItem(key, stringValue);
    };
    return [element, updateElement];
};
