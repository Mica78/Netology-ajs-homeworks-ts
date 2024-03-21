import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly phrase: string,
        readonly genre: Array<string>,
        readonly duration: number,
    ) { }
}