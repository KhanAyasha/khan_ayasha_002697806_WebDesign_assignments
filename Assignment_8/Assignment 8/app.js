const validateEmail = (email)  =>
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true)
  }

  return (false)
}

const validatePassword = (password) => { 
  var regexPassword=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if(password.match(regexPassword)) 
  { 
    return true;
  } else { 
    return false;
  }
}
const validateFullName = (fullname)  =>
{

  if (/^[a-zA-Z]+( [a-zA-Z]+)*$/i.test(fullname)) {
    return (true)
  }

  return (false)
}



const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema and model
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Define the routes for your APIs

// Create a user
app.post('/user/create', async (req, res) => {

  console.log("Inside create user"); 

  const { fullName, email, password } = req.body;

  try{
    let userEmail = await User.findOne({ email: req.body.email });

    
      // Validate email and password
      if (userEmail) {
        res.status(400).send({ message: "Email Address already exists." });
      } else {
              if ( !validateFullName(fullName)) {
                return res.status(400).json({ message: 'Invalid User Name! Please enter a valid name.' });
              } else if(!validateEmail(email) ){
                return res.status(400).json({ message: 'Invalid Email id! Please enter a valid Email.' });
              } else if(!validatePassword(password)){
                return res.status(400).json({ message: 'Invalid password!' });
              }

              // Hash the password before storing it in the database
              const hashedPassword = await bcrypt.hash(password, 10);

              const newUser = new User({
                fullName,
                email,
                password: hashedPassword,
              });

              try {
                await newUser.save();
                res.status(201).json({ message: 'User created successfully' });
              } catch (err) {
                res.status(400).json({ message: 'User creation failed' });
              }
            } 
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }   
       
       
 });


// Update a user
app.put('/user/edit', async (req, res) => {
  const { fullName, password } = req.body;
  const { email } = req.query;

  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'Invalid password' });
  } else if (!validateFullName(fullName)){
    return res.status(400).json({ message: 'Invalid Full Name' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.fullName = fullName;
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    res.json({ message: 'User details updated successfully' });
  } catch (err) {
    res.status(400).json({ message: 'User update failed' });
  }
});

// Delete a user
app.delete('/user/delete', async (req, res) => {
  const { email } = req.query;

  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'User deletion failed' });
  }
});

// Get all user information without passwords
app.get('/user/getAll', async (req, res) => {
  console.log("Inside getAll");
  try {
    const users = await User.find({}, { email: 1, fullName: 1, _id: 0 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


//home page
app.get('/', (req, res) => {
  console.log("Inside get call")
  res.send("This is Assignment 8");
});

//home page
app.get('/user/', (req, res) => {
  console.log("Inside get /user call")
  res.send("This is inside the API call get.");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
