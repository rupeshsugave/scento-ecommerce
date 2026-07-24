import { Link } from "react-router-dom";


function Footer(){


return(


<footer

style={{
background:"#050505",
color:"white",
padding:"60px 40px 25px",
borderTop:"1px solid rgba(212,175,55,.25)"
}}

>


<div

style={{
maxWidth:"1200px",
margin:"auto",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"40px"
}}

>



<div>

<h2

style={{
color:"#d4af37",
letterSpacing:"6px",
fontWeight:300
}}

>

SCENTO

</h2>


<p

style={{
color:"#aaa",
lineHeight:"1.7"
}}

>

Luxury handmade perfumes and premium lifestyle
products crafted to create unforgettable moments.

</p>


</div>





<div>


<h3 style={{color:"#d4af37"}}>

Quick Links

</h3>



<p>
<Link to="/" style={linkStyle}>
Home
</Link>
</p>


<p>
<Link to="/collections" style={linkStyle}>
Collections
</Link>
</p>


<p>
<Link to="/cart" style={linkStyle}>
Cart
</Link>
</p>


</div>






<div>


<h3 style={{color:"#d4af37"}}>

Customer Care

</h3>


<p style={textStyle}>
Contact Us
</p>


<p style={textStyle}>
Shipping Policy
</p>


<p style={textStyle}>
Return Policy
</p>


</div>







<div>


<h3 style={{color:"#d4af37"}}>

Contact

</h3>


<p style={textStyle}>
📧 support@scento.com
</p>


<p style={textStyle}>
📞 +91 98765 43210
</p>


<p style={textStyle}>
📍 Maharashtra, India
</p>


</div>





</div>





<div

style={{
marginTop:"50px",
paddingTop:"20px",
borderTop:"1px solid #333",
textAlign:"center",
color:"#777"
}}

>


© {new Date().getFullYear()} SCENTO. All Rights Reserved.


</div>




</footer>


);


}





const linkStyle={

color:"#ddd",

textDecoration:"none",

fontSize:"15px"

};



const textStyle={

color:"#aaa",

fontSize:"15px"

};



export default Footer;