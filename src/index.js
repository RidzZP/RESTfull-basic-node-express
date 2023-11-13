const express = require("express");

const logMiddleware = require("./middleware/logs");
const userRoute = require("./routes/users");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logMiddleware);
app.use(express.json());

// use digunakan untuk semua method
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
