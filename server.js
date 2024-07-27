const express = require("express");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Landing Page" });
});

require("./routes/trello.routes.js")(app);

//Global error handling middleware
app.use((err,req,res,next)=>{
  res.status(500).json({
    message:err.message
  });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


