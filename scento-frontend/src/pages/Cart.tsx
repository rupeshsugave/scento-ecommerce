import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { CSSProperties } from "react";


function Cart(){

const {
cart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
changeSize,
clearCart
}=useCart();


const navigate = useNavigate();


const [showLoginPopup,setShowLoginPopup] = useState(false);



const subtotal = cart.reduce(
(sum,item)=>sum + item.total,
0
);


const delivery = subtotal > 999 ? 0 : 50;


const discount = subtotal > 1500 ? 100 : 0;


const finalTotal =
subtotal + delivery - discount;



const checkout = ()=>{


const user = localStorage.getItem("user");


if(!user){


setShowLoginPopup(true);


setTimeout(()=>{

navigate("/login");

},2000);


return;

}


navigate("/checkout");


};





return(

<>

<Navbar/>


<div
style={pageStyle}
>


<h1
style={titleStyle}
>
MY CART
</h1>




{
cart.length===0 ?


<div
style={emptyStyle}
>


<h1>
🛒
</h1>


<h2>
Your cart is empty
</h2>


<p>
Discover our luxury fragrances
</p>



<button

onClick={()=>navigate("/")}

style={goldButton}

>
START SHOPPING
</button>


</div>



:


<div
style={containerStyle}
>



{
cart.map((item,index)=>(


<div

key={index}

style={cardStyle}

>


<img

src={item.image}

alt={item.name}

style={imageStyle}

/>



<div
style={contentStyle}
>


<h2>
{item.name}
</h2>



<p
style={textStyle}
>
Size: {item.size}
</p>





<div
style={sizeContainer}
>


{
["8ml","15ml","30ml","60ml"].map(size=>(


<button

key={size}


onClick={()=>{


let price = 99;


if(size==="15ml")
price = 149;


if(size==="30ml")
price = 329;


if(size==="60ml")
price = 699;



changeSize(
index,
size,
price
);


}}



style={{
...sizeButton,

background:
item.size===size
?"#d4af37"
:"#111",

color:
item.size===size
?"black"
:"white",

border:
item.size===size
?"2px solid #d4af37"
:"1px solid #555"

}}

>

{size}

</button>


))

}


</div>





<div
style={quantityBox}
>


<button

onClick={()=>decreaseQuantity(index)}

style={qtyButton}

>
-
</button>



<span
style={quantityText}
>
{item.quantity}
</span>



<button

onClick={()=>increaseQuantity(index)}

style={qtyButton}

>
+
</button>


</div>





<h2
style={priceStyle}
>
₹{item.total}
</h2>





<button

onClick={()=>removeFromCart(index)}

style={removeButton}

>
REMOVE
</button>



</div>



</div>



))

}





<div
style={summaryStyle}
>


<h2>
Order Summary
</h2>



<div style={row}>
<span>Subtotal</span>
<span>₹{subtotal}</span>
</div>



<div style={row}>
<span>Delivery</span>
<span>₹{delivery}</span>
</div>



<div style={row}>
<span>Discount</span>
<span>-₹{discount}</span>
</div>



<hr/>


<h1
style={totalStyle}
>
₹{finalTotal}
</h1>



<button

onClick={checkout}

style={checkoutButton}

>
PROCEED TO CHECKOUT
</button>



<button

onClick={clearCart}

style={clearButton}

>
CLEAR CART
</button>



</div>



</div>


}



{
showLoginPopup &&

<div
style={popup}
>


<div
style={popupBox}
>


<h1
style={popupTitle}
>
🔒 Login Required
</h1>


<p>
Please login before checkout
</p>


</div>


</div>

}



</div>


</>

);

}const pageStyle: CSSProperties = {

background:"#050505",

minHeight:"100vh",

padding:"40px 20px",

color:"white"

};



const titleStyle: CSSProperties = {

textAlign:"center",

color:"#d4af37",

letterSpacing:"4px",

marginBottom:"40px"

};



const emptyStyle: CSSProperties = {

textAlign:"center",

marginTop:"100px"

};



const containerStyle: CSSProperties = {

maxWidth:"1200px",

margin:"auto"

};



const cardStyle: CSSProperties = {

background:"linear-gradient(145deg,#171717,#090909)",

border:"1px solid #333",

borderRadius:"25px",

padding:"25px",

display:"flex",

gap:"30px",

alignItems:"center",

flexWrap:"wrap",

marginBottom:"25px"

};



const imageStyle: CSSProperties = {

width:"180px",

height:"220px",

objectFit:"contain",

background:"#111",

border:"1px solid #d4af37",

borderRadius:"20px"

};



const contentStyle: CSSProperties = {

flex:1

};



const textStyle: CSSProperties = {

color:"#bbb"

};



const sizeContainer: CSSProperties = {

display:"flex",

gap:"10px",

flexWrap:"wrap"

};



const sizeButton: CSSProperties = {

padding:"8px 16px",

borderRadius:"20px",

cursor:"pointer",

fontWeight:"bold"

};



const quantityBox: CSSProperties = {

display:"flex",

alignItems:"center",

gap:"15px",

margin:"25px 0"

};



const qtyButton: CSSProperties = {

width:"42px",

height:"42px",

borderRadius:"50%",

border:"1px solid #d4af37",

background:"#111",

color:"white",

cursor:"pointer",

fontSize:"22px"

};



const quantityText: CSSProperties = {

fontSize:"20px"

};



const priceStyle: CSSProperties = {

color:"#d4af37"

};



const removeButton: CSSProperties = {

background:"#8b0000",

color:"white",

border:"none",

padding:"10px 25px",

borderRadius:"20px",

cursor:"pointer"

};



const summaryStyle: CSSProperties = {

marginTop:"40px",

background:"#111",

border:"1px solid #333",

borderRadius:"25px",

padding:"30px"

};



const row: CSSProperties = {

display:"flex",

justifyContent:"space-between",

margin:"15px 0",

fontSize:"18px"

};



const totalStyle: CSSProperties = {

color:"#d4af37"

};



const goldButton: CSSProperties = {

marginTop:"20px",

padding:"15px 35px",

background:"#d4af37",

border:"none",

borderRadius:"30px",

fontWeight:"bold",

cursor:"pointer"

};



const checkoutButton: CSSProperties = {

width:"100%",

padding:"16px",

background:"#d4af37",

border:"none",

borderRadius:"15px",

fontWeight:"bold",

cursor:"pointer",

marginTop:"20px"

};



const clearButton: CSSProperties = {

width:"100%",

padding:"14px",

background:"#222",

color:"white",

border:"1px solid #d4af37",

borderRadius:"15px",

marginTop:"15px",

cursor:"pointer"

};



const popup: CSSProperties = {

position:"fixed",

inset:0,

background:"rgba(0,0,0,.8)",

display:"flex",

alignItems:"center",

justifyContent:"center",

zIndex:9999

};



const popupBox: CSSProperties = {

background:"#111",

padding:"40px",

borderRadius:"25px",

border:"2px solid #d4af37",

textAlign:"center"

};



const popupTitle: CSSProperties = {

color:"#d4af37"

};



export default Cart;