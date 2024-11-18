require('dotenv').config(); // to access .env variables
const express = require("express");
const authRouter = require("./routes/authRoute.js");
const connectDB = require("./utils/connectDB.js");
const app = express();


// it is a middleware that parse the data into json type
app.use(express.json()); // to get json data in all over the application

app.get("/",(req,res)=>{
    res.status(200).send("Server is ready to use");
})
app.use("/api/auth",authRouter);
const PORT = process.env.PORT | 5000
connectDB().then(()=>{
    app.listen(PORT,()=>console.log(`server is running at http://localhost:${PORT}`));
})