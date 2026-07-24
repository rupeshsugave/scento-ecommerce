import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import type { CSSProperties } from "react";



type Variant = {

size:string;

price:number;

sku:string;

stock:number;

};



type Fragrance = {

name:string;

variants:Variant[];

};




type Product = {

_id:string;

name:string;

category:string;

image:string;

description:string;

ingredients:string;

fragrances:Fragrance[];

};






function CategoryProducts(){



const {category}=useParams();



const [products,setProducts]=useState<Product[]>([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");





useEffect(()=>{

fetchProducts();

},[category]);






const fetchProducts = async()=>{


try{


setLoading(true);

setError("");



const {data}=await api.get("/perfumes");



if(data.success){



const filtered = data.perfumes.filter(

(item:Product)=>{


const itemCategory =
item.category?.toLowerCase();



const selectedCategory =
category?.toLowerCase() || "";



return(

itemCategory===selectedCategory ||

itemCategory+"s"===selectedCategory ||

itemCategory===selectedCategory.slice(0,-1)

);



}

);



setProducts(filtered);



}



}

catch(error){


console.log(error);


setError(
"Unable to load products. Please try again."
);



}


finally{


setLoading(false);


}


};






const getStartingPrice=(product:Product)=>{


const prices =

product.fragrances?.flatMap(

(frag)=>

frag.variants.map(

(v)=>v.price

)

) || [];



return prices.length

?

Math.min(...prices)

:

0;


};






return(


<>


<Navbar/>





<div style={pageStyle}>



<h1 style={titleStyle}>

{category}

</h1>





{
loading &&


<div style={loaderBox}>


<div style={loader}></div>


<p>

Loading luxury products...

</p>


</div>


}






{
error &&


<div style={errorBox}>


<h2>

{error}

</h2>


<button

onClick={fetchProducts}

style={retryButton}

>

RETRY

</button>


</div>


}






<div style={gridStyle}>{

products.map((item)=>(


<div

key={item._id}

style={cardStyle}


onMouseEnter={(e)=>{


const card =
e.currentTarget as HTMLDivElement;


card.style.transform =
"translateY(-8px)";


card.style.boxShadow =
"0 25px 60px rgba(212,175,55,.25)";


}}



onMouseLeave={(e)=>{


const card =
e.currentTarget as HTMLDivElement;


card.style.transform =
"translateY(0)";


card.style.boxShadow =
"0 15px 40px rgba(0,0,0,.5)";


}}


>



<img

src={item.image}

alt={item.name}

style={imageStyle}

/>





<h2>

{item.name}

</h2>





<p style={descriptionStyle}>

{item.description?.slice(0,80)}

...

</p>





<h3 style={priceStyle}>

Starting ₹{getStartingPrice(item)}

</h3>





<p style={fragranceStyle}>

{item.fragrances?.length || 0}

&nbsp; Fragrance Options

</p>





<Link

to={`/perfume/${item._id}`}

>


<button style={viewButton}>

VIEW PRODUCT

</button>


</Link>





</div>


))


}




</div>





{

products.length===0 && !loading && !error &&


<p style={centerText}>

No products available

</p>


}




</div>


</>

);


}







const pageStyle:CSSProperties={


background:"#050505",

minHeight:"100vh",

padding:"50px 30px",

color:"white"

};





const titleStyle:CSSProperties={


textAlign:"center",

color:"#d4af37",

letterSpacing:"5px",

marginBottom:"50px",

textTransform:"uppercase"

};





const gridStyle:CSSProperties={


display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",

gap:"35px",

maxWidth:"1200px",

margin:"auto"

};





const cardStyle:CSSProperties={


background:
"linear-gradient(145deg,#171717,#090909)",

padding:"25px",

borderRadius:"25px",

border:
"1px solid rgba(212,175,55,.4)",

textAlign:"center",

transition:"0.4s",

boxShadow:
"0 15px 40px rgba(0,0,0,.5)",

cursor:"pointer"

};





const imageStyle:CSSProperties={


width:"220px",

height:"280px",

objectFit:"contain",

background:"white",

borderRadius:"20px",

marginBottom:"20px",

transition:"0.4s"

};





const descriptionStyle:CSSProperties={


color:"#aaa",

lineHeight:"1.5",

minHeight:"45px"

};





const priceStyle:CSSProperties={


color:"#d4af37",

fontSize:"22px"

};





const fragranceStyle:CSSProperties={


color:"#bbb",

fontSize:"15px"

};





const viewButton:CSSProperties={


marginTop:"20px",

padding:"14px 35px",

background:"#d4af37",

border:"none",

borderRadius:"30px",

fontWeight:"bold",

cursor:"pointer"

};





const centerText:CSSProperties={


textAlign:"center",

marginTop:"40px",

fontSize:"20px"

};





const loaderBox:CSSProperties={


display:"flex",

flexDirection:"column",

alignItems:"center",

justifyContent:"center",

gap:"15px",

marginTop:"40px"

};





const loader:CSSProperties={


width:"45px",

height:"45px",

borderRadius:"50%",

border:"4px solid #333",

borderTop:"4px solid #d4af37",

animation:"spin 1s linear infinite"

};





const errorBox:CSSProperties={


textAlign:"center",

marginTop:"40px",

color:"#ff6b6b"

};





const retryButton:CSSProperties={


marginTop:"20px",

padding:"12px 30px",

background:"#d4af37",

border:"none",

borderRadius:"25px",

fontWeight:"bold",

cursor:"pointer"

};





export default CategoryProducts;