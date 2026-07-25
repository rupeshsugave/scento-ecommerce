import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { CSSProperties } from "react";


function ShippingPolicy(){

return(

<>

<Navbar/>


<div style={pageStyle}>

<h1 style={titleStyle}>
SHIPPING POLICY
</h1>


<div style={boxStyle}>

<h2>
Delivery Information
</h2>

<p>
At Scento, we carefully pack every product to ensure safe delivery.
</p>


<h3>
Processing Time
</h3>

<p>
Orders are processed within 2-3 business days.
</p>


<h3>
Delivery Time
</h3>

<p>
Delivery usually takes 5-7 business days depending on location.
</p>


<h3>
Shipping Charges
</h3>

<p>
Shipping charges will be calculated during checkout.
</p>


<h3>
Order Tracking
</h3>

<p>
Once your order is shipped, tracking details will be shared with you.
</p>


</div>


</div>


<Footer/>

</>

);

}



const pageStyle:CSSProperties={

background:"#050505",
minHeight:"100vh",
padding:"50px 20px",
color:"#fff"

};


const titleStyle:CSSProperties={

textAlign:"center",
color:"#d4af37",
fontSize:"40px",
letterSpacing:"3px",
marginBottom:"40px"

};


const boxStyle:CSSProperties={

maxWidth:"900px",
margin:"auto",
background:"#111",
padding:"35px",
borderRadius:"20px",
border:"1px solid #333",
lineHeight:"1.8"

};


export default ShippingPolicy;