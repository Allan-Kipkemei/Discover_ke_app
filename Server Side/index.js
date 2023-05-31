const express = require("express");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const User = require("./models/User");
const Contact = require("./models/Contact")

const app = express();
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://allankiplagatkipkemei:dfbPhdZZEDwOTJ5k@cluster0.3xcjnaw.mongodb.net/", {


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
        res.status(200).json({message: 'success saved the contact to databsee'});
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
        res.status(200).json({message: "Successfully saved user to the database"});
    }).catch((err) => {
        console.error(err);
        res.status(500).json({error: "Failed to save user"});
    });
});

app.get('/login', (req, res) => {
    res.json({message: "logged in"})
})


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


// Start the server
app.listen(4000, () => {
    console.log("Listening on port 3000");
});
