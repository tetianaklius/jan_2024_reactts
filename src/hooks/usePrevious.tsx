import {useRef} from "react";

export const usePrevious = <T, >(value: T): T | undefined => {
    const newV = useRef<T>(value); //50
    const prev = useRef<T | undefined>(); //undefined

    if (newV.current !== value) {
        prev.current = newV.current;
    }

    return prev.current;
}

