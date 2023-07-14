import { ICard } from "./card";
import { CurrencyEnum } from "./transactions";


export class Pocket {
    private cards: Map<string, ICard>
    constructor(){
        this.cards = new Map();
    }
    addCard(name: string,card: ICard):void {
        this.cards.set(name, card);
    }
    removeCard(name: string):void {
        this.cards.delete(name);
    }
    getCard(name:string): ICard | undefined{
        return this.cards.get(name);
    }
    totalAmount(currency: CurrencyEnum):number {
        let tAmount = 0
        Object.values(this.cards).forEach((card)=>{
            tAmount +=card.getMoney(currency)
        })
        return tAmount
    }
}