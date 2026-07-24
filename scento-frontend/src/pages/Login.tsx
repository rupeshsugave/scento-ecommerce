import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";


function Login() {


const navigate = useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);







const handleLogin=async()=>{



if(!email || !password){

setError("Please fill all details");

return;

}



try{


setLoading(true);

setError("");



const {data}=await axios.post(

"http://localhost:5000/api/users/login",

{

email,

password

}

);






if(data.success){


localStorage.setItem(

"token",

data.token

);



localStorage.setItem(

"user",

JSON.stringify(data.user)

);





navigate("/");



}

else{


setError(

data.message || "Login Failed"

);


}



}


catch(error:any){


setError(

error.response?.data?.message ||

"Invalid Email or Password"

);



}



finally{


setLoading(false);


}




};








return (

<AuthLayout

title="Welcome Back 👋"

subtitle="Login to your Scento account"

>


{
error &&

<div

style={{

background:"#8b0000",

color:"white",

padding:"12px",

borderRadius:"8px",

marginBottom:"15px",

textAlign:"center"

}}

>

{error}

</div>

}<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}


style={{

width:"100%",

padding:"14px",

marginBottom:"15px",

borderRadius:"10px",

border:"1px solid #555",

background:"#111",

color:"white"

}}

/>






<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}


style={{

width:"100%",

padding:"14px",

marginBottom:"20px",

borderRadius:"10px",

border:"1px solid #555",

background:"#111",

color:"white"

}}

/>







<button


onClick={handleLogin}



disabled={loading}



style={{


width:"100%",


padding:"14px",


background:"#d4af37",


color:"black",


border:"none",


borderRadius:"30px",


cursor:"pointer",


fontWeight:"bold",


fontSize:"16px"


}}



>



{
loading

?

"Logging in..."

:

"LOGIN"

}



</button>







<p

style={{

marginTop:"20px",

textAlign:"center",

color:"#ccc"

}}

>

Don't have an account?{" "}



<Link

to="/register"

style={{

color:"#d4af37"

}}

>

Register

</Link>



</p>






</AuthLayout>


);


}



export default Login;