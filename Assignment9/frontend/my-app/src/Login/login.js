
import React, {useState} from "react"
import { Navigate } from "react-router-dom";
import "./Login.css";

export default function Login(props){
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [navigate, setNavigate] = useState(false);

    const handleSubmit = async () => {
        console.log("submit bef 1", email, password);
        const requestOptions= {
            method:"POST",
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
                
            })
        }
        try{
        const response = await fetch("http://localhost:8080/user/login",requestOptions)
        //console.log(response);
        if(response.ok){
            const data = await response.json()
            console.log(data);
            setNavigate(true);
            alert("User Login Succesful");
        }else{
            setNavigate(false);
            alert("User Login Failed. Please Enter correct credentials "); 
        }
    }
        catch(err){
            console.log(err)
            alert("User Login Failed. Please Enter correct credentials ");
        }

        
        
        // .then((res)=>res.json())
        // .then((data)=>{
        //     if(data.message==="login success"){
        //         console.log("login worked");
        //         setNavigate(true);
        //     }
            
        // })
    }

    return (
        <>
        {navigate?<Navigate to="/home"/>:""}
        <div className="loginPage"> 
            <h3 className="loginheading"> Enter Your Details to Login </h3><br/>
            <label className="loginLabel">Email :</label>
            <input onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder="your email" id='email' name = 'email' size={'100px'} />
            <br/>
            <label className="loginLabel">Password :</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type = "password" placeholder=" ********" id='password' name = 'password' />
            <br/>
            <button className="login-button" onClick={async() => await handleSubmit()} type = "submit">Login</button>

        </div>
        
        </>
    )
}
