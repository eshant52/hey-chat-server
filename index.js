import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const json = req.body;
  res.json(json);
})

app.listen(3000, () => {
  console.log("Server is now listening to request..");
});
