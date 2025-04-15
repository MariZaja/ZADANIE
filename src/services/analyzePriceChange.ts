import { KlineData } from "../types/klineData"

export const analyzePriceChanges = (klines: KlineData[]): ?? => {
    if (klines.length < 2) throw new Error('Not enough data.')

    for(let i=1; i < klines.length; i++){
        const previous = klines[i-1].closePrice
        const current = klines[i].closePrice
        const change = current - previous

        if(change > 0){

        } else if(change < 0){
            
        } 
    }
    
}