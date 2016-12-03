export class PagedResults<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}