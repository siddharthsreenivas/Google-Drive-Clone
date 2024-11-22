const express = require("express");
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/index.routes");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require('./config/db')
connectToDB()
const cookieParser = require('cookie-parser')

const app = express();

app.set("view engine", "ejs");

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", userRouter);

// app.use("/", (req,res)=>{
//     res.send('Test Home')
// });

app.listen(3000);
