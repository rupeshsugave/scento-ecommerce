import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import type { CSSProperties } from "react";
import api from "../services/api";


function Security(){


const user = JSON.parse(
    localStorage.getItem("user") || "{}"
);



const [name,setName] = useState(
    user.name || ""
);


const [email,setEmail] = useState(
    user.email || ""
);



 const [editName,setEditName] = useState(false);

const [editEmail,setEditEmail] = useState(false);

const [oldPassword,setOldPassword] = useState("");

const [newPassword,setNewPassword] = useState("");

    






// UPDATE NAME

const saveName = async()=>{


try{


const res = await api.put(

`/users/profile/${user._id}`,

{
name,
email:user.email
}

);



localStorage.setItem(

"user",

JSON.stringify(res.data.user)

);



setEditName(false);


window.location.reload();



}
catch(error){

console.log(error);

}


};








// UPDATE EMAIL

const saveEmail = async()=>{


try{


const res = await api.put(

`/users/profile/${user._id}`,

{
name:user.name,
email
}

);



localStorage.setItem(

"user",

JSON.stringify(res.data.user)

);



setEditEmail(false);


window.location.reload();



}
catch(error){

console.log(error);

}


};









// CHANGE PASSWORD

const changePassword = async()=>{


try{


const res = await api.put(

`/users/change-password/${user._id}`,

{

oldPassword,

newPassword

}

);



alert(res.data.message);



setOldPassword("");

setNewPassword("");



}
catch(error){

console.log(error);

}



};









// DELETE ACCOUNT

const deleteAccount = async()=>{


const confirmDelete =
window.confirm(
"Are you sure you want to delete your account?"
);



if(!confirmDelete){

return;

}



try{


await api.delete(

`/users/${user._id}`

);



localStorage.removeItem("user");

localStorage.removeItem("token");



window.location.href="/login";



}
catch(error){

console.log(error);

}


};






return(

<>


<Navbar/>




<div style={pageStyle}>


<h1 style={titleStyle}>

🔒 LOGIN & SECURITY

</h1>






<div style={boxStyle}>


<h2>

Personal Information

</h2>







<div style={rowStyle}>


<div>


<h3>

Name

</h3>


{

editName ?


<input

style={inputStyle}

value={name}

onChange={(e)=>
setName(e.target.value)
}

/>


:

<p>

{name}

</p>


}



</div>




<button

style={buttonStyle}

onClick={()=>{

editName
?
saveName()
:
setEditName(true)

}}

>

{

editName
?
"Save"
:
"Edit"

}

</button>




</div>









<div style={rowStyle}>


<div>


<h3>

Email

</h3>



{

editEmail ?


<input

style={inputStyle}

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

/>


:


<p>

{email}

</p>


}



</div>




<button

style={buttonStyle}

onClick={()=>{

editEmail
?
saveEmail()
:
setEditEmail(true)

}}

>


{

editEmail
?
"Save"
:
"Edit"

}


</button>




</div>









<div style={passwordBox}>


<h3>

Change Password

</h3>




<input

type="password"

placeholder="Old Password"

style={inputStyle}

value={oldPassword}

onChange={(e)=>
setOldPassword(e.target.value)
}

/>





<input

type="password"

placeholder="New Password"

style={inputStyle}

value={newPassword}

onChange={(e)=>
setNewPassword(e.target.value)
}

/>





<button

style={buttonStyle}

onClick={changePassword}

>

Change Password

</button>




</div>







</div>









<div style={dangerBox}>


<h2>

Delete Account

</h2>


<p>

Deleting your account will remove your data permanently.

</p>



<button

style={deleteButton}

onClick={deleteAccount}

>

Delete Account

</button>



</div>







</div>



<Footer/>




</>

);


}








const pageStyle:CSSProperties={


background:"#050505",

minHeight:"100vh",

padding:"40px 20px",

color:"#fff"


};





const titleStyle:CSSProperties={


textAlign:"center",

fontSize:"38px",

color:"#d4af37",

letterSpacing:"3px",

marginBottom:"40px"


};






const boxStyle:CSSProperties={


maxWidth:"800px",

margin:"auto",

background:"#111",

padding:"30px",

borderRadius:"20px",

border:"1px solid #2d2d2d"


};






const rowStyle:CSSProperties={


display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"20px 0",

borderBottom:"1px solid #333"


};






const passwordBox:CSSProperties={


marginTop:"30px",

display:"flex",

flexDirection:"column",

gap:"15px"


};






const inputStyle:CSSProperties={


background:"#000",

color:"#fff",

border:"1px solid #555",

padding:"12px",

borderRadius:"8px",

width:"100%",

boxSizing:"border-box"


};






const buttonStyle:CSSProperties={


background:"#d4af37",

color:"#000",

border:"none",

padding:"10px 20px",

borderRadius:"8px",

cursor:"pointer",

fontWeight:"bold"


};







const dangerBox:CSSProperties={


maxWidth:"800px",

margin:"30px auto",

background:"#1a0000",

padding:"25px",

borderRadius:"20px",

border:"1px solid #550000"


};







const deleteButton:CSSProperties={


background:"#b30000",

color:"#fff",

border:"none",

padding:"12px 25px",

borderRadius:"8px",

cursor:"pointer"


};





export default Security;