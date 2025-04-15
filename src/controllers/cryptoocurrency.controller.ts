import { Router } from "express";
import { fetchMarketData } from "../services/marketData.service";
import { analyzePriceChanges } from "../services/analyzePriceChange";

const router = Router();

router.get("/price-analysis/:symbol/:interval", async (req, res) => {
  try {
    const { symbol, interval } = req.params;
    const klines = await fetchMarketData(symbol.toUpperCase(), interval);
    const analysis = analyzePriceChanges(klines);

    res.json(analysis);
  } catch (e) {
    res.status(500).send("Failed to analyze price changes :" + e);
  }
});

export default router;