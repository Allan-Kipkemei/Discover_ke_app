//import the necessary libraries and dependancies
const express = require("express");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const User = require("./models/User");
const Contact = require("./models/Contact")
const destinations = require('./destinations')

//initialize express app
const app = express();
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://allankiplagat:92839283F4y@cluster0.9nleubm.mongodb.net/", {

 useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error(err);
});

app.get("/", (req, res) => {
    res.json({message: "Hello, world"});
});

//contact us 
app.post('/contact',(req, res) => {
    const {username, email, message} = req.body;
    const newContact = new Contact ({username, email, message});
    newContact.save().then(() => {
        res.status(200).json({message: 'Message sent successfully'});
    }).catch(err => {
        console.error(err); 
    res.status(500).json({message: err.message}); })
})

// Signup route
app.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // hashing the password
    const newUser = new User({username, email, password: hashedPassword});
    newUser.save().then(() => {
        res.status(200).json({message: "Sign up successful"});
    }).catch((err) => {
        console.error(err);
        res.status(500).json({error: "Failed to sign up Check for potential errors"});
    });
});

app.get('/login', (req, res) => {
    res.json({message: "logged in"})
})

//login route
app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (! user) {
            return res.status(404).json({message: 'Invalid email'});
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) {
            return res.status(200).json({message: "Login successful"});
        } else {
            return res.status(403).json({message: 'Invalid password or email'});
        }

        const token = jwt.sign({
            userID: user._id
        }, key, {expiresIn: '1hr'})
        res.status(200).json({message: "Login successful", token});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Server error'});
    }
});

// generating random key using crypto
const secretKey = crypto.randomBytes(64).toString('hex');




app.use('/api', (req, res,) => {
res.json(destinations)
console.log(destinations)
})

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
