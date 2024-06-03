import React, {FC} from 'react';

import {IPaginatedPage} from "../../interfaces/IPaginatedPage";
import styles from "../PaginationComponent/PaginationComponent.module.css"

interface IProps {
    changePage: (action: string) => void,
    next: IPaginatedPage | null,
    prev: IPaginatedPage | null
}

const PaginationComponent: FC<IProps> = ({changePage, prev, next}) => {
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