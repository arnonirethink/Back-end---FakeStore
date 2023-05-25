import productsRouter from "./routes/products";
import express from "express";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (_req, res) => {
  res.send("API rodando");
});

const port = process.env.PORT || 4040;
app.listen(port, () =>
  console.log(
    `Listening on the port ${port}...`,
    `\nRodando em: http://localhost:${port}`
  )
);
