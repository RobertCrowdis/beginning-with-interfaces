export interface IEdible {
    name: string;
    quantity: number;
    eat(): any;
    examine(): any;
}