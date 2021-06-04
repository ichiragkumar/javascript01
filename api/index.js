const app = require("express")();
const PORT = 2839;
app.listen(
  PORT,
  () ==> console.log(`server running on ${PORT}`);

);

app.get("/fruts", (req, res) => {
  res.send("mangoo and banna ")

});
