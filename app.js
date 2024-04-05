const initApi = require('./api/main');

const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const connection = require('./src/connection/connection');
const User = require('./model/User');

const uuid = require('uuid');

const app = express();

connection();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
     res.render("home");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] }); // Check if username or email already exists in the database ($or = or operator)
        if (existingUser) {
            res.json({ message: 'Username or email already exists', ping: '0' });
        } else {
            const random_id = uuid.v4();
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ id: random_id, username, password: hashedPassword, email });
            await user.save();
            res.json({ message: `User ${username} created successfully`, ping: '1' });
        }
    } catch (error) {
        console.log(error);
    }
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {

        const user = await User.findOne({ username });
        
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password); // Compare the password entered by the user with the hashed password in the database
            if (passwordMatch) {
                res.json({ message: `Welcome ${username}`, ping: '1'});
            } else {
                res.json({ message: `Invalid username or password`, ping: '0' });
            }
        } else {
            res.json({ message: `Invalid username or password`, ping: '0' });
        }
        
    } catch (error) {
        console.log(error);
    };
});
initApi(app);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});

