const express = require("express");
const app = express();

const liftsController = require('./controllers/liftsController')

const PORT = 3838;

app.use(express.json());

app.get("/api/lifts", liftsController.read);
app.post("/api/lifts", liftsController.create);
app.put("/api/lifts/:id", liftsController.update);
app.delete("/api/lifts/:id", liftsController.delete);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
