import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [data, setData] = useState();

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem(key));
        if(response) {
            setData(response);
        }
    }, []);

    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    // useEffect(() => {
    //     if(items.length) {
    //         localStorage.setItem('data', JSON.stringify(items));
    //     }
    // }, [items]);

    return [data, saveData];
};