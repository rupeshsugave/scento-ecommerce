import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";


function Account() {


const navigate = useNavigate();


const user = JSON.parse(

localStorage.getItem("user") || "null"

);



const logout = () => {


localStorage.removeItem("user");

localStorage.removeItem("token");


navigate("/login");


window.location.reload();


};




return(

<>


<Navbar/>


<div style={pageStyle}>


<h1 style={titleStyle}>

👤 MY ACCOUNT

</h1>



<p style={subtitleStyle}>

Welcome,

<span style={goldText}>

{" "}

{user?.name || "Customer"}

</span>

</p>





<div style={gridStyle}>




<div

style={cardStyle}

onClick={()=>navigate("/my-orders")}

>

<div style={iconStyle}>

📦

</div>

<h2>

My Orders

</h2>

<p>

Track, view and manage your orders.

</p>

</div>







<div

style={cardStyle}

onClick={()=>navigate("/addresses")}

>

<div style={iconStyle}>

📍

</div>

<h2>

Your Addresses

</h2>

<p>

Add, edit and manage delivery addresses.

</p>

</div>








<div

style={cardStyle}

onClick={()=>navigate("/security")}

>

<div style={iconStyle}>

🔒

</div>

<h2>

Login & Security

</h2>

<p>

Update password and account details.

</p>

</div>







<div

style={cardStyle}

onClick={()=>navigate("/wishlist")}

>

<div style={iconStyle}>

❤️

</div>

<h2>

Wishlist

</h2>

<p>

View your saved favourite products.

</p>

</div>







<div

style={cardStyle}

onClick={()=>navigate("/coupons")}

>

<div style={iconStyle}>

🎁

</div>

<h2>

Coupons

</h2>

<p>

View available offers and discounts.

</p>

</div>








<div

style={cardStyle}

onClick={()=>navigate("/support")}

>

<div style={iconStyle}>

📞

</div>

<h2>

Customer Support

</h2>

<p>

Contact us and raise support requests.

</p>

</div>








<div

style={cardStyle}

onClick={logout}

>

<div style={iconStyle}>

🚪

</div>

<h2>

Logout

</h2>

<p>

Sign out from your Scento account.

</p>

</div>





</div>


</div>



<Footer/>


</>


);

}







const pageStyle:CSSProperties = {


background:"#050505",

minHeight:"100vh",

padding:"40px 20px",

color:"white"


};





const titleStyle:CSSProperties = {


textAlign:"center",

fontSize:"42px",

color:"#d4af37",

letterSpacing:"4px",

marginBottom:"10px"


};





const subtitleStyle:CSSProperties = {


textAlign:"center",

fontSize:"18px",

color:"#cccccc",

marginBottom:"45px"


};





const goldText:CSSProperties = {


color:"#d4af37",

fontWeight:"bold"


};





const gridStyle:CSSProperties = {


maxWidth:"1200px",

margin:"0 auto",

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",

gap:"25px"


};






const cardStyle:CSSProperties = {


background:"#111",

border:"1px solid #2d2d2d",

borderRadius:"20px",

padding:"30px",

cursor:"pointer",

transition:"0.3s",

display:"flex",

flexDirection:"column",

alignItems:"center",

textAlign:"center",

minHeight:"220px",

justifyContent:"center"


};







const iconStyle:CSSProperties = {


fontSize:"55px",

marginBottom:"18px"


};





export default Account;