import axios from 'axios'
import { fetchMarketData } from '../marketData.service';

jest.mock("axios");

describe('Fetch Market Data', () => {
  it('fetches successfully data from an API', async () => {
    const data = [
      {
        klineOpen: 1499040000000, // Kline open time
        openPrice: "0.01634790", // Open price
        highPrice: "0.80000000", // High price
        lowPrice: "0.01575800", // Low price
        closePrice: "0.01577100", // Close price
        volume: "148976.11427815", // Volume
        klineCloseTime: 1499644799999, // Kline Close time
        qutoeAssetVolume: "2434.19055334", // Quote asset volume
        numberOfTrades: 308, // Number of trades
        takerBuyBaseAssetVolume: "1756.87402397", //
        takerBuyQuoteAssetVolume: "28.46694368",
        ignore: "0",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchMarketData('BTCUSDT', '1m')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {

  });
})