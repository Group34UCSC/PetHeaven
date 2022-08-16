const express = require('express');
const PetAdopterRoute = require('./routes/PetAdopterRoute');
const StaffMemberRoute = require('./routes/staffMemberRoute');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());


app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    next()
}) 
app.options('/PetAdopter/findapet/adoptrequestform',async(req,res,next)=>
{
    console.log("check data");
    let {name} =req.body
    console.log(name)
    // console.log( req.body.name);
    // console.log( req.body.age);
    // res.status(200).json({
    //     data:"hi machan",
    //     asd:'asdgd'
    // })

})

// app.use("/PetAdopter",PetAdopterRoute);
app.use('/staffmember',StaffMemberRoute);

app.use(errorHandler);

app.get("/",(req,res,next)=>
{
    console.log("Sandaruwan Gamage");
})



// app.get('/findapet',(req,res,next)=>
// {
//     console.log('thisara');
// })

const PORT = 3000;

app.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}...`);
})