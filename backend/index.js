import express from 'express';

const PORT = process.env.API_PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});