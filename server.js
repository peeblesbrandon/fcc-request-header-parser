const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.static("public"));
app.use(cors());


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  // res.json(req.header());
  let ipaddress = req.headers['x-forwarded-for'];
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  console.log(ipaddress);
  console.log(language);
  console.log(software);
  res.json({ ipaddress: ipaddress, language: language, software: software })
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
