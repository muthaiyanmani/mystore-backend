require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

//My Routes URL
const authRoutes = require("./routes/auth") 
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

//Db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() =>{
    console.log("DB CONNECTED")
}).catch((err) =>{
    console.log(err)
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Port
const port = 8000;

//My Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",orderRoutes)



//Starting a server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
