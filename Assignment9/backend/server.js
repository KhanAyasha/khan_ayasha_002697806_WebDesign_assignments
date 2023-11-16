//const { validateEmail, checkPassword, validateName } = require("./validations");
//import { validateName, checkPassword, validateName } from "./app/services/user-service";
 //import router from "./app/routes/user-router";
 //import { User } from "./app/models/user";
//imports 
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
      const { validateEmail, validatePassword, validateFullName }= require("./app/services/user-service");
     //import router from "./app/routes/user-router";
 //import { User } from "./app/models/user";
const saltRounds = 10;


// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// connect to db
mongoose.connect('mongodb://localhost/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//db connection settings

mongoose.connection.on('connected', function(){
  console.log("connection success")
})
//port config
app.listen(8080, () => {
  console.log("Server started at port 8080");
});





































































































































































































































































































































































































































































































































































































































































































































































































































// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');

// // const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/user_management', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

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


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// const userSchema = new mongoose.Schema(
//   {
//   email: {
//      type: String,
//      required: true,
//      unique: true,
//   },
//   password: {
//       type: String,
//       required: true,
//   },
//   name: {
//       type: String,
//       required: true
//   }
//   ,
//   joined: { type: Date, default: Date.now },
// });

//  const User = mongoose.model("user", userSchema);






// //  const userSchema = new mongoose.Schema({
// //    email: String,
// //    password: String,
// //    name: String,
// //    joined: { type: Date, default: Date.now },
// //  });

// //  const User = mongoose.model("user", userSchema);








// // Home Page
// app.get("/", (req, res) => {
//   res.send("Welcome to Assignment 8 - INFO6150.");
// });

// // Create new user
// app.post("/user/create", async (req, res) => {

//   try {

//     let user = await User.findOne({ email: req.body.email });
//     let passBool, emailBool, nameBool = false;

//     if (user) {
//       res.status(400).send({ message: "Email Address already exists." });
//     } else {

//       if (validateEmail(req.body.email)) {
//         // console.log("Proper email address");
//         emailBool = true;
//       } else {
//         emailBool = false;
//         res.status(400).send({ message: "Please input email address correctly!"});
//       }

//       if (checkPassword(req.body.password)) {
//         passBool = true;
//         // console.log("Password is correct");
//       } else {
//         passBool = false;
//         res.status(400).send({ message: "Please input password correctly!"});
//       }

//       if (validateName(req.body.name)) {
//         nameBool = true;
//         // console.log("Password is correct");
//       } else {
//         nameBool = false;
//         res.status(400).send({ message: "Please input name correctly!"});
//       }
//       if (passBool && emailBool) {
//         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
//         const innerResult = await User.create({
//           email: req.body.email,
//           password: hashedPassword,
//           name: req.body.name,
//           user_type: req.body.user_type
//         });
//         res.status(201).send(innerResult);
//       }   
//     }    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Internal Server Error Occurred!"});
//   }

// });

// // Update user details


// app.put('/user/edit', async (req, res) => {
 

//   const { name, password } = req.body;

//   // Find user by email
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   // Update user details
//   user.name = name;
//   user.password = await bcrypt.hash(password, 10);

//   try {
//     await user.save();
//     res.status(200).json({ message: 'User details updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// // Get all users
// app.get("/user/getAll", async (req, res) => {
//   console.log("Get called");
//  const users = await User.find({});

//       users.forEach(user => delete user.password);
//       const newResult = users.map(item => {
//         return {
//           id: item._id,
//           email: item.email,
//           password: item.password,
//           name: item.name
//         }
//       })
//       res.status(200).send(newResult);
//       console.log('getting');
//   });
  


 

// // Delete user
// app.delete("/user/delete", async (req, res) => {
//   console.log("Delete called")
//   const user = await User.findOne({email: req.body.email});

//   if (user) {
//       User.findByIdAndDelete(user._id)
//         .then(item => {
//           if (!item) {
//             res.status(404).send({
//               message: `Cannot delete User with email=${user.email}. User not found!`
//             });
//           } else {
//             res.send({
//               message: `User with email id ${user.email} was deleted successfully!`
//             });
//           }
//         })
//         .catch(err => {
//           res.status(500).send({
//             message: "Could not delete User with email=" + user.email
//           });
//         });
    
//   } else {
//     res.status(404).send({
//       message: `User was not found! Please check the email address.`
//     });
//   }
// });
//login
app.post("/user/login", async(req,res) => {
  console.log("login called")
  let email= req.body.email;
  let Password = req.body.password;
  const user = await User.findOne({ email: req.body.email },{Password:req.body.password});
  
         if (!user) {
        //  res.json(`fetch failed. User not found!`)
          console.log("Fetch failed");
        } else {res.json(`fetch sucess. User  found!`)
        console.log("Fetch success");}
        
        //   bcrypt.compare(user.Password, req.body.password, async(err, result)=> {
        //     if(err){
        //         res.status(400);
        // res.json("Fetch Failed");
        //     }
        //     if (result) {
        //       console.log("It matches!")
        //       res.status(200);
        //         res.json("Success");

        //     }
        //     else {
        //       console.log("Invalid password!");
        //       res.status(400);
        // res.json("Invalid password!");
        //     }
        //   });
         
       });
//  //const user = User.findOne({email:email}, function(error, doc){
//       if(error){
//           res.json("Fetch failed");
//           console.log("Fetch failed!");
//       }
//       if(doc == null){
//           res.status(400);
//           res.json("No Record found!! Please check the details again.");
//       }
     
//       }
//   });
 




