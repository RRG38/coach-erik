const express = require("express");
const app = express();
const PORT = 3838;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
