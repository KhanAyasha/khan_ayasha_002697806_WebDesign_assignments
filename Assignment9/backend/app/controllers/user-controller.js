import { Express } from "express";
import { User } from "../models/user";


const setSuccess = (res, obj) => {
    res.status(200);
    res.json(obj);
}

// Create new user
  export const createUser = /*app.post('/user/create', */ async (req, res) => {

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
         
         
   };
  
  // Update user details


  export const updateUser = /*app.put('/user/edit',*/ async (req, res) => {
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
  };
  
  
  
  // Get all users
  export const getAllUsers = /*app.get('/user/getAll',*/ async (req, res) => {
    console.log("Inside getAll");
    try {
      const users = await User.find({}, { email: 1, fullName: 1, _id: 0 });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
    
  
  
   
  
  // Delete user
  export const deleteUser = /*app.delete('/user/delete',*/ async (req, res) => {
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
  };
  
  //login
  export const userLogin = /*app.post("/user/login",*/ async(req,res) => {
    console.log("login called")
    let email= req.body.email;
    let Password = req.body.password;
    const user = await User.findOne({ email: req.body.email },{Password:req.body.password});
    
           if (!user) {
            res.json(`fetch failed. User not found!`)
            console.log("Fetch failed");
          } else {res.json(`fetch sucess. User  found!`)
          console.log("Fetch success");}
          
          
           
         };