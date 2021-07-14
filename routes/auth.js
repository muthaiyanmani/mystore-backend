const express = require("express");
var router = express.Router();
const {check,validationResult} = require('express-validator');

const {signout,signup,signin,isSignedIn} = require("../controllers/auth");


router.post("/signup",[
    check("name","Name should be atleast 3 character").isLength({min:3}),
    check("email","Must be an email format").isEmail(),
    check("password","Password should be 5 characters").isLength({min:5}),
    
],signup);

router.post("/signin",[
    check("email","Must be an email format").isEmail(),
    check("password","Password is required").isLength({min:5}),
],signin);

router.get("/signout",signout);

router.get("/test",isSignedIn,(req,res) =>{
    res.send("TEst working")
});

module.exports = router