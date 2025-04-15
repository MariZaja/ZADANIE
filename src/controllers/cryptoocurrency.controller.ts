import { Router } from "express";

const router = Router();

router.get("/fetch/:symbol/:interval", async (req, res) => {
  try {
    res.send("Trades fetched and stored");
  } catch (e) {
    res.status(500).send("Failed to fetch/store trades" + e);
  }
});

export default router;