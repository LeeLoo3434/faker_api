// import dependencies 
const express = require ("express")
const cors = require("cors")
const { faker } = require("@faker-js/faker")
const { response } = require("express")

// how to use faker HOW TO USE
// faker.datatype.uuid()
// faker.internet.userName()
// faker.internet.email()
 

// instantiate express server 

const app = express()
const PORT = 8000

// middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// define endpoints 
app.get("/api", (request,response)=>{
    response.json("hello world")
})
app.get("/api/users/new" , (request,res)=>{
    let user_object = {
        password:faker.internet.password(),
        email:faker.internet.exampleEmail(),
        phoneNumber:faker.phone.phoneNumber(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    res.json(user_object)
})

app.get("api/companies/new", (request, response)=>{
    let company_object = {
        _id:faker.datatype.uuid, 
        name:faker.company.companyName(),
        address:faker.address.buildingNumber(),
            street:faker.address.street(),
            city:faker.address.cityName(),
            state:faker.address.state(), 
            zipCode:faker.address.zipCode(), 
            country:faker.address.country()
    }
    res.json(company_object)
})

app.listen(PORT,()=>console.log(`express running on PORT ${PORT}`))
