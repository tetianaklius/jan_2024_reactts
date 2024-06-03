import {ICarWithAuth} from "./ICarWithAuth";
import {IPaginatedPage} from "./IPaginatedPage";

export interface ICarsPaginated {
    total_items?: number,
    total_pages?: number,
    prev: IPaginatedPage | null,
    next: IPaginatedPage | null,
    items: ICarWithAuth[]
}