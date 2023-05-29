const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const User = require("./models/User");

const app = express();
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://allankiplagatkipkemei:0POqzgyH5jy5aDuV@cluster0.fvszr7t.mongodb.net/", {
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


// Signup route
app.post("/signup", (req, res) => {
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});

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

        if (user.password === password) {
            return res.status(200).json({message: "Login successful"});
        } else {
            return res.status(403).json({message: 'Invalid password or email'});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Server error'});
    }
});


// Start the server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
