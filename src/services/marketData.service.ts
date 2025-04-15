import axios from "axios";

const URL = process.env.BINANCE_API_URL || "https://api.binance.com";

export const fetchMarketData = async (symbol: string, interval: string) => {
  const response = await axios.get(URL + `/api/v3/klines?symbol=${symbol}&interval=${interval}`);
  return response.data;
};