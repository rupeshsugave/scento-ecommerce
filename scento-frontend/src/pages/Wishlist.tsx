import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../services/api";
import type { CSSProperties } from "react";


interface Product {

    productId:string;
    name:string;
    image:string;
    price:number;

}



function Wishlist(){


const user = JSON.parse(

    localStorage.getItem("user") || "{}"

);



const [products,setProducts] = useState<Product[]>([]);





const fetchWishlist = async()=>{


try{


const res = await api.get(

`/wishlist/${user._id}`

);



if(res.data.wishlist){

setProducts(

res.data.wishlist.products || []

);

}



}
catch(error){

console.log(error);

}


};





useEffect(()=>{


if(user._id){

fetchWishlist();

}


},[]);








const removeWishlist = async(productId:string)=>{


try{


await api.delete(

`/wishlist/${user._id}/${productId}`

);



fetchWishlist();



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

❤️ MY WISHLIST

</h1>





{

products.length === 0 ?


<div style={emptyStyle}>

<h2>

Your wishlist is empty

</h2>

<p>

Save your favourite Scento products here.

</p>

</div>



:


<div style={gridStyle}>


{

products.map((product)=>(


<div

key={product.productId}

style={cardStyle}

>


<img

src={product.image}

style={imageStyle}

/>



<h2>

{product.name}

</h2>


<p style={priceStyle}>

₹ {product.price}

</p>




<button

style={removeButton}

onClick={()=>removeWishlist(product.productId)}

>

Remove

</button>



</div>


))


}



</div>


}



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

color:"#d4af37",

fontSize:"40px",

letterSpacing:"3px",

marginBottom:"40px"


};





const emptyStyle:CSSProperties={


textAlign:"center",

background:"#111",

padding:"50px",

borderRadius:"20px",

maxWidth:"600px",

margin:"auto"


};





const gridStyle:CSSProperties={


maxWidth:"1200px",

margin:"auto",

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",

gap:"25px"


};





const cardStyle:CSSProperties={


background:"#111",

border:"1px solid #2d2d2d",

padding:"20px",

borderRadius:"20px",

textAlign:"center"


};





const imageStyle:CSSProperties={


width:"100%",

height:"250px",

objectFit:"contain",

borderRadius:"15px"


};





const priceStyle:CSSProperties={


color:"#d4af37",

fontSize:"20px",

fontWeight:"bold"


};





const removeButton:CSSProperties={


background:"#b30000",

color:"#fff",

border:"none",

padding:"10px 20px",

borderRadius:"8px",

cursor:"pointer"


};




export default Wishlist;