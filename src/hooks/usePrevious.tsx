import {useEffect, useRef} from "react";

// v1
export const usePrevious = <T, >(value: T): T | undefined => {
    const ref = useRef<T | undefined>();

    useEffect(() => {
        ref.current = value;
    }, [value])

    return ref.current;
}


// v2
// export const usePrevious = <T, >(value: T): T | undefined => {
//     const newV = useRef<T>(value);
//     const prev = useRef<T | undefined>();
//
//     if (newV.current !== value) {
//         prev.current = newV.current;
//         newV.current = value;
//     }
//
//     return prev.current;
// }

