import { KlineData } from "../types/klineData"

export interface PriceAnalysis {
  startPrice: number;
  endPrice: number;
  percentageChange: number;
  maxSingleIncrease: number;
  maxSingleDecrease: number;
  upMoves: number;
  downMoves: number;
  trend: string;
}

export const analyzePriceChanges = (klines: KlineData[]): PriceAnalysis => {
    if (klines.length < 2) throw new Error('Not enough data.')
    
    const startPrice = klines[0].openPrice
    const endPrice = klines[klines.length-1].closePrice
    const percentageChange = ((endPrice - startPrice) / startPrice) * 100

    let maxSingleIncrease = 0
    let maxSingleDecrease = 0
    let upMoves = 0
    let downMoves = 0

    for(let i=1; i < klines.length; i++){
        const previous = klines[i-1].closePrice
        const current = klines[i].closePrice
        const change = current - previous

        if(change > 0){
            upMoves++
            if (change > maxSingleIncrease) maxSingleIncrease = change
        } else if(change < 0){
            downMoves++
            if (change < maxSingleDecrease) maxSingleDecrease = change
        } 
    }

    let trend = '';
    if (percentageChange > 1) trend = 'UPWARD';
    else if (percentageChange < -1) trend = 'DOWNWARD'
    else trend = 'FLAT'
    
    return {
        startPrice,
        endPrice,
        percentageChange,
        maxSingleIncrease,
        maxSingleDecrease,
        upMoves,
        downMoves,
        trend
    }
}