const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const PetAdopterRoute = require('./routes/PetAdopterRoute');
const SignUpRoute = require('./routes/SignUpRoute');
const PetStoreRoute = require('./routes/PetStoreRoute');
const errorHandler = require('./utils/errorHandler');
const AdminRoute = require('./routes/AdminRoute');
const PetAdopterRoute=require('./routes/PetAdopterRoute');
const staffMemberRoute=require('./routes/staffMemberRoute');
const PharmacyRoute=require('./routes/PharmacyRoute');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());

// app.use(cors({
//     origin: 'http://localhost:5000', 
//     credentials: true,
// }));
app.use(bodyParser.json()); 

app.use("/Admin",AdminRoute);
app.use('/petadopter',PetAdopterRoute);
app.use("/SignUp",SignUpRoute);
app.use("/petstore",PetStoreRoute);
app.use('/staffmember',staffMemberRoute);
app.use("/pharmacy",PharmacyRoute);

// app.use(cors());
app.use(errorHandler);

// app.use('/images', express.static('/images'))

// app.get("/",(req,res,next)=>
// {
//     console.log("Sandaruwan Gamage");
// })


const PORT = 5000;

app.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}...`);
})