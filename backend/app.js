const express = require('express');
const cors = require('cors');
// const PetAdopterRoute = require('./routes/PetAdopterRoute');
const SignUpRoute = require('./routes/SignUpRoute');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());

app.use("/SignUp",SignUpRoute);
// app.use("/PetAdopter",PetAdopterRoute);


app.use(cors());
app.use(errorHandler);

// app.get("/",(req,res,next)=>
// {
//     console.log("Sandaruwan Gamage");
// })


const PORT = 3000;

app.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}...`);
})