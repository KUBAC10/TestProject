const express = require("express");
const connectDb = require("./src/connection");
const Point = require("./src/Point.model");
const bodyParser=require("body-parser")
const cors = require("cors");

const app = express();

app.use(bodyParser.json())
app.use(cors());

const PORT = 8080;

app.post("/point-create",async(req,res)=>{
  const point = new Point({ 
    x: req.body.x,
    y: req.body.y,
    status: req.body.status,
   });

  await point.save().then(() => console.log("Point created"));

  res.send("Point created \n");
})

app.get("/points", async (req, res) => {
  const points = await Point.find();
  res.json(points);
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
