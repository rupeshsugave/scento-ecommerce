import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { CSSProperties } from "react";


function Collections(){


const navigate = useNavigate();




const collections = [


{
name:"Perfumes",
image:"/images/collections/perfumes.png",
description:"Luxury handmade fragrances"
},


{
name:"Soaps",
image:"/images/collections/soaps.png",
description:"Natural premium soaps"
},


{
name:"Candles",
image:"/images/collections/candles.png",
description:"Aesthetic luxury candles"
},


{
name:"Car Perfumes",
image:"/images/collections/car-perfume.png",
description:"Premium car fragrances"
},


{
name:"Wax Sachets",
image:"/images/collections/wax.png",
description:"Long lasting fragrance"
},


{
name:"Diffuser Set",
image:"/images/collections/diffuser.png",
description:"Elegant home fragrance"
},


{
name:"Tealights",
image:"/images/collections/tealights.png",
description:"Warm luxury ambience"
},


{
name:"Urali",
image:"/images/collections/urali.png",
description:"Traditional fragrance decor"
}


];





return(


<>


<Navbar/>


<div style={pageStyle}>


<h1 style={titleStyle}>

OUR COLLECTIONS

</h1>



<div style={gridStyle}>{
collections.map((item)=>(


<div

key={item.name}

onClick={()=>navigate(
`/category/${item.name.toLowerCase()}`
)}

style={cardStyle}



onMouseEnter={(e)=>{


const card =
e.currentTarget as HTMLDivElement;


card.style.transform =
"translateY(-10px)";


card.style.boxShadow =
"0 25px 50px rgba(212,175,55,.25)";


}}



onMouseLeave={(e)=>{


const card =
e.currentTarget as HTMLDivElement;


card.style.transform =
"translateY(0)";


card.style.boxShadow =
"0 15px 35px rgba(0,0,0,.5)";


}}



>


<img

src={item.image}

alt={item.name}

style={imageStyle}

/>



<h2 style={cardTitle}>

{item.name}

</h2>




<p style={descriptionStyle}>

{item.description}

</p>




<button style={buttonStyle}>

EXPLORE →

</button>



</div>


))


}



</div>


</div>


</>


);


}






const pageStyle:CSSProperties = {


background:"#080808",

minHeight:"100vh",

padding:"60px 40px",

color:"white"

};





const titleStyle:CSSProperties = {


textAlign:"center",

color:"#d4af37",

fontSize:"48px",

letterSpacing:"6px",

marginBottom:"60px",

fontWeight:300

};





const gridStyle:CSSProperties = {


maxWidth:"1200px",

margin:"auto",

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",

gap:"35px"

};





const cardStyle:CSSProperties = {


background:
"linear-gradient(145deg,#181818,#0d0d0d)",

border:
"1px solid rgba(212,175,55,.35)",

borderRadius:"25px",

padding:"30px",

textAlign:"center",

cursor:"pointer",

transition:"0.4s",

boxShadow:
"0 15px 35px rgba(0,0,0,.5)"

};





const imageStyle:CSSProperties = {


width:"180px",

height:"180px",

objectFit:"contain",

borderRadius:"20px",

marginBottom:"20px"

};





const cardTitle:CSSProperties = {


color:"#d4af37",

fontSize:"26px",

letterSpacing:"2px"

};





const descriptionStyle:CSSProperties = {


color:"#aaa",

marginTop:"10px",

lineHeight:"1.6"

};





const buttonStyle:CSSProperties = {


marginTop:"20px",

padding:"12px 28px",

borderRadius:"30px",

border:"1px solid #d4af37",

background:"transparent",

color:"#d4af37",

cursor:"pointer",

fontWeight:"bold"

};





export default Collections;