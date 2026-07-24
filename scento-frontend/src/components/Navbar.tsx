import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import type { CSSProperties } from "react";


function Navbar(){


const {cart}=useCart();

const navigate=useNavigate();


const [menu,setMenu]=useState(false);



const user = JSON.parse(
localStorage.getItem("user") || "null"
);





const logout=()=>{

localStorage.removeItem("user");

navigate("/");

window.location.reload();

};





return(

<nav style={navbarStyle}>


<div style={containerStyle}>


<Link
to="/"
style={logoStyle}
>
SCENTO
</Link>





<div

style={{
...menuStyle,
display:menu ? "flex" : "none"
}}

>


<Link to="/" style={linkStyle}>
HOME
</Link>


<Link to="/collections" style={linkStyle}>
COLLECTIONS
</Link>


<Link to="/category/perfumes" style={linkStyle}>
PERFUMES
</Link>


<Link to="/category/candles" style={linkStyle}>
CANDLES
</Link>


<Link to="/category/soaps" style={linkStyle}>
SOAPS
</Link>


</div><div style={rightStyle}>


<Link

to="/cart"

style={cartStyle}

>

🛒 Cart


<div style={cartBadge}>

{cart.length}

</div>


</Link>





{

user ?


<>

<span style={userStyle}>

👤 {user.name}

</span>


<Link

to="/my-orders"

style={linkStyle}

>

MY ORDERS

</Link>



<button

onClick={logout}

style={logoutButton}

>

Logout

</button>


</>


:

<>

<Link

to="/login"

style={linkStyle}

>

LOGIN

</Link>




<Link

to="/register"

style={registerButton}

>

REGISTER

</Link>

</>


}





<button

onClick={()=>setMenu(!menu)}

style={mobileButton}

>

☰

</button>




</div>



</div>


</nav>


);

}





const navbarStyle:CSSProperties = {


position:"sticky",

top:0,

zIndex:1000,

background:"rgba(5,5,5,0.88)",

backdropFilter:"blur(15px)",

borderBottom:"1px solid rgba(212,175,55,.25)"

};





const containerStyle:CSSProperties = {


maxWidth:"1400px",

margin:"auto",

padding:"18px 40px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

gap:"30px"

};





const logoStyle:CSSProperties = {


color:"#d4af37",

textDecoration:"none",

fontSize:"36px",

fontWeight:300,

letterSpacing:"10px"

};





const menuStyle:CSSProperties = {


display:"flex",

gap:"30px",

alignItems:"center"

};





const linkStyle:CSSProperties = {


color:"#eee",

textDecoration:"none",

fontSize:"13px",

letterSpacing:"2px"

};





const rightStyle:CSSProperties = {


display:"flex",

alignItems:"center",

gap:"18px"

};





const cartStyle:CSSProperties = {


position:"relative",

display:"flex",

alignItems:"center",

gap:"8px",

color:"white",

textDecoration:"none",

fontSize:"14px"

};





const cartBadge:CSSProperties = {


position:"absolute",

top:"-12px",

right:"-15px",

background:"#d4af37",

color:"black",

width:"20px",

height:"20px",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"12px",

fontWeight:"bold"

};





const userStyle:CSSProperties = {


color:"#d4af37",

fontWeight:"bold"

};





const registerButton:CSSProperties = {


background:"#d4af37",

color:"#111",

padding:"10px 22px",

borderRadius:"30px",

textDecoration:"none",

fontWeight:"bold"

};





const logoutButton:CSSProperties = {


background:"transparent",

color:"#d4af37",

border:"1px solid #d4af37",

padding:"8px 18px",

borderRadius:"20px",

cursor:"pointer"

};





const mobileButton:CSSProperties = {


display:"none",

background:"transparent",

border:"1px solid #d4af37",

color:"#d4af37",

fontSize:"20px",

borderRadius:"8px",

cursor:"pointer"

};





export default Navbar;