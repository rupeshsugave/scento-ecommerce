import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import type { CSSProperties } from "react";


type Variant = {

  size:string;
  sku:string;
  price:number;
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





function PerfumeDetails(){



const {id}=useParams();



const {addToCart}=useCart();





const [product,setProduct]=useState<Product|null>(null);



const [selectedFragrance,setSelectedFragrance]=
useState<Fragrance|null>(null);




const [selectedVariant,setSelectedVariant]=
useState<Variant|null>(null);




const [quantity,setQuantity]=useState(1);



const [loading,setLoading]=useState(true);



const [error,setError]=useState("");



const [showAdded,setShowAdded]=useState(false);







useEffect(()=>{


fetchProduct();


},[id]);









const fetchProduct=async()=>{


try{


setLoading(true);



const {data}=await api.get(`/perfumes/${id}`);





if(data.success){


const productData=data.perfume;


setProduct(productData);




if(productData.fragrances?.length){


setSelectedFragrance(
productData.fragrances[0]
);



setSelectedVariant(
productData.fragrances[0].variants[0]
);


}



}

else{


setError("Product not found");


}



}

catch(error){


console.log(error);


setError(
"Unable to load product"
);



}

finally{


setLoading(false);


}



};









const handleAddToCart=()=>{



if(
!product ||
!selectedVariant ||
!selectedFragrance
)

return;





addToCart({



name:

product.name+
" - "+
selectedFragrance.name,



image:product.image,



size:selectedVariant.size,



price:selectedVariant.price,



quantity:quantity,



total:

selectedVariant.price *
quantity



});





setShowAdded(true);



setTimeout(()=>{


setShowAdded(false);


},2000);




};









const increaseQuantity=()=>{



if(
selectedVariant &&
quantity < selectedVariant.stock
)

{


setQuantity(quantity+1);


}


};









const decreaseQuantity=()=>{


if(quantity>1){


setQuantity(quantity-1);


}



};









if(loading){



return(

<>


<Navbar/>


<div

style={loadingStyle}

>

Loading Luxury Product...

</div>


</>


);


}









if(error || !product){



return(

<>


<Navbar/>


<div

style={errorPageStyle}

>


{error || "Product Not Found"}


</div>



</>


);


}







return(

<><Navbar/>


<div

style={pageStyle}

>


{
showAdded &&

<div

style={successPopup}

>

✓ Added To Cart

</div>

}





<div

style={containerStyle}

>





<div

style={imageCard}

>


<img

src={
product.image ||
"/images/perfumes/default.png"
}

alt={product.name}

style={productImage}

/>


</div>








<div

style={detailCard}

>


<h1

style={productTitle}

>

{product.name}

</h1>





<p

style={descriptionStyle}

>

{product.description}

</p>






<h2

style={priceStyle}

>

₹{selectedVariant?.price}

</h2>







<h3>

Select Fragrance

</h3>



<div

style={buttonGroup}

>


{

product.fragrances.map((frag)=>(


<button

key={frag.name}

onClick={()=>{


setSelectedFragrance(frag);


setSelectedVariant(
frag.variants[0]
);


setQuantity(1);


}}

style={

selectedFragrance?.name===frag.name

?

activeButton

:

normalButton

}

>

{frag.name}

</button>


))

}



</div>








<h3>

Select Size

</h3>



<div

style={buttonGroup}

>


{

selectedFragrance?.variants.map((variant)=>(


<button

key={variant.sku}

onClick={()=>{


setSelectedVariant(variant);


setQuantity(1);


}}


style={

selectedVariant?.sku===variant.sku

?

activeButton

:

normalButton

}

>

{variant.size}

</button>


))


}



</div>







<h3>

Quantity

</h3>



<div

style={quantityBox}

>


<button

style={qtyButton}

onClick={decreaseQuantity}

>

-

</button>



<span>

{quantity}

</span>




<button

style={qtyButton}

onClick={increaseQuantity}

>

+

</button>


</div>







{

selectedVariant?.stock===0 &&


<p

style={stockStyle}

>

Currently Out Of Stock

</p>


}








<button

disabled={
selectedVariant?.stock===0
}


onClick={handleAddToCart}


style={

selectedVariant?.stock===0

?

disabledButton

:

cartButton

}

>

ADD TO CART

</button>







<div

style={ingredientBox}

>


<h2>

Ingredients

</h2>


<p>

{

product.ingredients ||

"Premium quality fragrance ingredients."

}

</p>


</div>



</div>





</div>



</div>


</>

);

}








const pageStyle:CSSProperties={

background:"#050505",

minHeight:"100vh",

padding:"50px 25px",

color:"white"

};




const loadingStyle:CSSProperties={

background:"#050505",

minHeight:"100vh",

display:"flex",

alignItems:"center",

justifyContent:"center",

color:"#d4af37",

fontSize:"28px"

};




const errorPageStyle:CSSProperties={

background:"#050505",

minHeight:"100vh",

display:"flex",

alignItems:"center",

justifyContent:"center",

color:"white",

fontSize:"25px"

};




const containerStyle:CSSProperties={

maxWidth:"1300px",

margin:"auto",

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",

gap:"40px"

};




const imageCard:CSSProperties={

background:"rgba(255,255,255,.05)",

border:"1px solid rgba(212,175,55,.3)",

borderRadius:"30px",

padding:"40px",

display:"flex",

justifyContent:"center",

alignItems:"center"

};




const productImage:CSSProperties={

width:"100%",

maxWidth:"500px",

height:"520px",

objectFit:"contain",

borderRadius:"25px"

};




const detailCard:CSSProperties={

background:"rgba(255,255,255,.05)",

border:"1px solid rgba(212,175,55,.3)",

borderRadius:"30px",

padding:"40px"

};




const productTitle:CSSProperties={

fontSize:"48px",

color:"#d4af37",

letterSpacing:"3px"

};




const descriptionStyle:CSSProperties={

color:"#bbb",

fontSize:"18px",

lineHeight:"30px"

};




const priceStyle:CSSProperties={

color:"#d4af37",

fontSize:"42px"

};




const buttonGroup:CSSProperties={

display:"flex",

gap:"15px",

flexWrap:"wrap",

margin:"20px 0"

};




const activeButton:CSSProperties={

padding:"14px 25px",

borderRadius:"30px",

background:"#d4af37",

border:"none",

fontWeight:"bold",

cursor:"pointer"

};




const normalButton:CSSProperties={

padding:"14px 25px",

borderRadius:"30px",

background:"#222",

color:"white",

border:"1px solid #555",

cursor:"pointer"

};




const quantityBox:CSSProperties={

display:"flex",

alignItems:"center",

gap:"25px",

fontSize:"25px"

};




const qtyButton:CSSProperties={

width:"45px",

height:"45px",

borderRadius:"50%",

background:"#111",

color:"#d4af37",

border:"1px solid #d4af37",

fontSize:"25px",

cursor:"pointer"

};




const cartButton:CSSProperties={

width:"100%",

height:"60px",

marginTop:"35px",

background:"#d4af37",

border:"none",

borderRadius:"15px",

fontWeight:"bold",

fontSize:"18px",

cursor:"pointer"

};




const disabledButton:CSSProperties={

...cartButton,

background:"#555",

cursor:"not-allowed"

};




const stockStyle:CSSProperties={

color:"red",

fontWeight:"bold"

};




const ingredientBox:CSSProperties={

marginTop:"40px",

borderTop:"1px solid #333",

paddingTop:"25px",

color:"#ccc"

};




const successPopup:CSSProperties={

position:"fixed",

top:"100px",

right:"30px",

background:"#d4af37",

color:"black",

padding:"18px 30px",

borderRadius:"30px",

fontWeight:"bold",

zIndex:9999

};




export default PerfumeDetails;
