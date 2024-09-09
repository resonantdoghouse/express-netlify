import express, { Router } from "express";
import serverless from "serverless-http";
import jokesData from "../../data/jokes.json";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/jokes", (req, res) => res.json(jokesData));
router.get("/jokes/:id", (req, res) => {
  res.json(jokesData.find((joke) => joke.id === req.params.id));
});

api.use("/api/", router);

export const handler = serverless(api);
