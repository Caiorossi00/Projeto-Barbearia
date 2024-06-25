const express = require("express");
const api = express();

const consign = require("consign")
consign()
.include("./routers")
.into(api);


const port = 8080 | process.env.PORT;
api.listen(8080, () => {
  console.log(`serving ${port}`);
});
