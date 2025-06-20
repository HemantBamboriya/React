import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";


function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword] = useState('')
  //to send data
    const{setUser} = useContext(UserContext) // ye userContextProvider ke ander jo value humne pass ki vaka se aaya

    const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})//ye data userContextProvider ke pass gaya
    }

    return(
  <div>
    <h2>Login</h2>

    <input 
    type="text" 
    value={username} 
    onChange={(e)=>setUsername(e.target.value)}
    placeholder="username"/>
  {"      "}
    <input 
    type="text"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    placeholder="password"/>

    <button onClick={handleSubmit}>Submit</button>
  </div>
    )
}

export default Login;