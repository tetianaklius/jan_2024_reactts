import {useState} from "react";

export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const changeValue = (value: boolean) => {
        setValue(prev => !value)
    }

    return [value, changeValue] as const;
};