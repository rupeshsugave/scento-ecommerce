import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";


function OrderSuccess(){


const location = useLocation();

const navigate = useNavigate();


const orderId = location.state?.orderId;



return(

<>

<Navbar/>


<div style={pageStyle}>


<div style={cardStyle}>


<h1 style={successStyle}>
✅ Order Placed Successfully
</h1>


<p style={textStyle}>
Thank you for shopping with Scento
</p>



{
orderId &&

<p style={orderStyle}>
Order ID:
<br/>
{orderId}
</p>

}




<button

onClick={()=>navigate("/collections")}

style={buttonStyle}

>

CONTINUE SHOPPING

</button>



</div>


</div>


</>

);

}




const pageStyle:CSSProperties={

minHeight:"100vh",

background:"#050505",

display:"flex",

justifyContent:"center",

alignItems:"center",

color:"white"

};



const cardStyle:CSSProperties={

background:"#111",

padding:"50px",

borderRadius:"30px",

border:"1px solid #d4af37",

textAlign:"center",

boxShadow:"0 20px 50px rgba(0,0,0,.5)"

};



const successStyle:CSSProperties={

color:"#d4af37",

fontSize:"35px"

};



const textStyle:CSSProperties={

fontSize:"20px",

color:"#ccc",

margin:"20px"

};



const orderStyle:CSSProperties={

background:"#1a1a1a",

padding:"20px",

borderRadius:"15px",

color:"#d4af37"

};



const buttonStyle:CSSProperties={

marginTop:"30px",

padding:"15px 40px",

background:"#d4af37",

border:"none",

borderRadius:"30px",

fontWeight:"bold",

cursor:"pointer"

};



export default OrderSuccess;