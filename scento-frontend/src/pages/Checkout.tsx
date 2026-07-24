import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { CSSProperties } from "react";


function Checkout(){


const navigate = useNavigate();


const {cart}=useCart();



const [address,setAddress]=useState({

name:"",
email:"",
phone:"",
address:"",
city:"",
state:"",
pincode:""

});



const [error,setError]=useState("");




const subtotal = cart.reduce(

(sum,item)=>sum + item.total,

0

);



const delivery = subtotal > 999 ? 0 : 50;


const discount = subtotal > 1500 ? 100 : 0;



const finalTotal =
subtotal + delivery - discount;





const handleContinue=()=>{


const isEmpty = Object.values(address).some(

(value)=>value.trim()===""

);



if(isEmpty){

setError(
"Please fill all delivery details"
);

return;

}





const nameRegex=/^[A-Za-z ]+$/;


if(!nameRegex.test(address.name)){


setError(
"Please enter a valid name"
);

return;

}





const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!emailRegex.test(address.email)){


setError(
"Please enter a valid email address"
);

return;

}





const phoneRegex=/^[6-9]\d{9}$/;



if(!phoneRegex.test(address.phone)){


setError(
"Please enter valid 10 digit mobile number"
);

return;

}





const placeRegex=/^[A-Za-z ]+$/;



if(!placeRegex.test(address.city)){


setError(
"Please enter valid city name"
);

return;

}





if(!placeRegex.test(address.state)){


setError(
"Please enter valid state name"
);

return;

}




const pincodeRegex=/^\d{6}$/;



if(!pincodeRegex.test(address.pincode)){


setError(
"Please enter valid 6 digit pincode"
);

return;

}




setError("");



navigate("/payment",{

state:{
address
}

});


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
CHECKOUT
</h1>



<div
style={mainContainer}
>



<div
style={formCard}
>


<h2>
Delivery Address
</h2>



{
error &&

<div
style={errorBox}
>
⚠️ {error}
</div>

}




<input

placeholder="Full Name"

value={address.name}

onChange={(e)=>

setAddress({

...address,

name:e.target.value

})

}

style={inputStyle}

/>



<input

placeholder="Email"

value={address.email}

onChange={(e)=>

setAddress({

...address,

email:e.target.value

})

}

style={inputStyle}

/>



<input

placeholder="Phone Number"

value={address.phone}

onChange={(e)=>

setAddress({

...address,

phone:e.target.value

})

}

style={inputStyle}

/>



<textarea

placeholder="Full Address"

value={address.address}

onChange={(e)=>

setAddress({

...address,

address:e.target.value

})

}

style={textareaStyle}

/>



<input

placeholder="City"

value={address.city}

onChange={(e)=>

setAddress({

...address,

city:e.target.value

})

}

style={inputStyle}

/>



<input

placeholder="State"

value={address.state}

onChange={(e)=>

setAddress({

...address,

state:e.target.value

})

}

style={inputStyle}

/>



<input

placeholder="Pincode"

value={address.pincode}

onChange={(e)=>

setAddress({

...address,

pincode:e.target.value

})

}

style={inputStyle}

/>



<button

onClick={handleContinue}

style={continueButton}

>
CONTINUE TO PAYMENT
</button>



</div><div
style={summaryCard}
>


<h2>
Order Summary
</h2>



{
cart.length===0 ?


<p>
Your cart is empty
</p>


:

cart.map((item,index)=>(


<div

key={index}

style={productRow}

>


<div>

<h3>
{item.name}
</h3>


<p>
Size: {item.size}
</p>


<p>
Quantity: {item.quantity}
</p>


</div>



<h3
style={{
color:"#d4af37"
}}
>
₹{item.total}
</h3>



</div>


))

}





<hr/>




<div style={summaryRow}>

<span>
Subtotal
</span>

<span>
₹{subtotal}
</span>

</div>




<div style={summaryRow}>

<span>
Delivery
</span>

<span>
₹{delivery}
</span>

</div>




<div style={summaryRow}>

<span>
Discount
</span>

<span>
-₹{discount}
</span>

</div>




<hr/>




<h1
style={totalStyle}
>
₹{finalTotal}
</h1>



</div>



</div>


</div>


</>

);

}






const pageStyle: CSSProperties = {


background:"#050505",

minHeight:"100vh",

color:"white",

padding:"40px 20px"

};





const titleStyle: CSSProperties = {


textAlign:"center",

color:"#d4af37",

letterSpacing:"4px",

marginBottom:"40px"

};





const mainContainer: CSSProperties = {


maxWidth:"1200px",

margin:"auto",

display:"grid",

gridTemplateColumns:"1fr 1fr",

gap:"30px"

};





const formCard: CSSProperties = {


background:"#111",

padding:"35px",

borderRadius:"25px",

border:"1px solid #333"

};





const summaryCard: CSSProperties = {


background:"#111",

padding:"35px",

borderRadius:"25px",

border:"1px solid #333",

height:"fit-content"

};





const inputStyle: CSSProperties = {


width:"100%",

padding:"15px",

margin:"10px 0",

background:"#222",

border:"1px solid #555",

borderRadius:"10px",

color:"white",

fontSize:"15px"

};





const textareaStyle: CSSProperties = {


width:"100%",

height:"100px",

padding:"15px",

margin:"10px 0",

background:"#222",

border:"1px solid #555",

borderRadius:"10px",

color:"white",

fontSize:"15px",

resize:"none"

};





const errorBox: CSSProperties = {


background:"#8b0000",

padding:"12px",

borderRadius:"10px",

marginBottom:"15px",

textAlign:"center"

};





const continueButton: CSSProperties = {


width:"100%",

padding:"16px",

marginTop:"20px",

background:"#d4af37",

border:"none",

borderRadius:"15px",

fontWeight:"bold",

fontSize:"16px",

cursor:"pointer"

};





const productRow: CSSProperties = {


display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"15px 0",

borderBottom:"1px solid #333"

};





const summaryRow: CSSProperties = {


display:"flex",

justifyContent:"space-between",

margin:"15px 0",

fontSize:"18px"

};





const totalStyle: CSSProperties = {


color:"#d4af37",

textAlign:"right"

};





export default Checkout;