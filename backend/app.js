const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const PetAdopterRoute = require('./routes/PetAdopterRoute');
const SignUpRoute = require('./routes/SignUpRoute');
const errorHandler = require('./utils/errorHandler');
const AdminRoute = require('./routes/AdminRoute');



app.use(express.json());
app.use(cors());
// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());

// app.use(cors({
//     origin: 'http://localhost:5000', 
//     credentials: true,
// }));
app.use(bodyParser.json()); 


app.use("/SignUp",SignUpRoute);
// app.use("/PetAdopter",PetAdopterRoute);




//admin
app.use("/Admin",AdminRoute);
// app.delete("/Admin",AdminRoute);


// app.use(cors());
app.use(errorHandler);

// app.get("/",(req,res,next)=>
// {
//     console.log("Sandaruwan Gamage");
// })


const PORT = 5000;

app.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}...`);
})