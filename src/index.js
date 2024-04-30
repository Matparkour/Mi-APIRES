const express = require('express');
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 9000;
require("dotenv").config();
const userRoutes = require("./routes/user");

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req,res)=>{
    res.send('welcome to my API')
});
//mongodv conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("conected to MongDB atlas"))
.catch((error) =>console.error(error));

app.listen(port, () => console.log("el servidor esta funcionando en el puerto", port));