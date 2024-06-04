import React, {FC} from 'react';

import {IPaginatedPage} from "../../interfaces/IPaginatedPage";
import styles from "../PaginationComponent/PaginationComponent.module.css"
import {useSearchParams} from "react-router-dom";

interface IProps {
    next: IPaginatedPage | null,
    prev: IPaginatedPage | null
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {

    const [query, setQuery] = useSearchParams({page: "1"})
    const changePage = (action: string): void => {
        switch (action) {
            case "prev":
                setQuery({...prev})
                break;
            case "next":
                setQuery({...next})
                break;
        }
        console.log("needed some changes in file")
    }


    return (
        <div>
            <button
                onClick={() => {
                    changePage("prev")
                }}
                disabled={!prev}
                className={styles.prev_next_button}
            >prev
            </button>

            <button
                onClick={() => {
                    changePage("next")
                }}
                disabled={!next}
                className={styles.prev_next_button}
            >next
            </button>

        </div>
    );
};

export default PaginationComponent;