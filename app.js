const express = require("express");
const { sequelize } = require("./src/helper/database.helper");
const { pageNotFoundController } = require("./src/controller/404");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/api", require("./src/routes/index"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
