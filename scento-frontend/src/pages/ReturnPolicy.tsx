import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { CSSProperties } from "react";


function ReturnPolicy(){

return(

<>

<Navbar/>


<div style={pageStyle}>

<h1 style={titleStyle}>
RETURN POLICY
</h1>


<div style={boxStyle}>


<h2>
Returns & Replacement
</h2>


<p>
We want you to love your Scento products. If you receive a damaged or incorrect product, please contact us.
</p>


<h3>
Eligible Returns
</h3>


<p>
Products can be replaced within 7 days of delivery in case of damage or wrong item received.
</p>


<h3>
Non Returnable Items
</h3>


<p>
Opened or used perfume products cannot be returned due to hygiene reasons.
</p>


<h3>
Refund Process
</h3>


<p>
Approved refunds will be processed after verification.
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


export default ReturnPolicy;