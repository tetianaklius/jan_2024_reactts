import {useEffect, useState} from "react";

export const useStorage = (key: string, localStorObj: any, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        let jsonValue = localStorObj.getItem(key);

        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        }

        if (typeof defaultValue === "function") {
            return defaultValue();
        } else {
            return defaultValue;
        }
    }); //useState defaultValue


    useEffect(() => {
        if (value === undefined) {
            return localStorObj.removeItem(key);
        }

        localStorObj.setItem(key, JSON.stringify(value));
    }, [key, value, localStorObj]);


    return [value, setValue];
}