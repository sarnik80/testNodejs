const express = require("express"),
     app = express();
     productRoute = require("./routes/products-routes"),
     mongoose = require("mongoose")

app.use(express.json())
app.use('/api',productRoute.router )


mongoose
    .connect("mongodb://127.0.0.1:27017/myProduct")
    .then(()=>{
        app.listen(8000, () => {

            console.log('http://localhost:8000')
        })
    })
    .catch((err)=>{
        console.log(err)
    })