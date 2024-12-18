import express from "express";
import route from "./route/userRoute";
const PORT = process.env.PORT || 4001;
console.log(PORT, "Port is showing here");
const app = express();

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is running http:localhost:${PORT}/home`);
});
