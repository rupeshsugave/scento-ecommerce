import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import type { CSSProperties } from "react";


interface OrderItem {

name:string;
image:string;
size:string;
price:number;
quantity:number;
total:number;

}


interface Order {

_id:string;

items:OrderItem[];

address:any;

paymentMethod:string;

subtotal:number;

delivery:number;

discount:number;

total:number;

status:string;

createdAt:string;

}



function MyOrders(){


const [orders,setOrders]=useState<Order[]>([]);

const [loading,setLoading]=useState(true);





useEffect(()=>{


const fetchOrders=async()=>{


try{


const user = JSON.parse(

localStorage.getItem("user") || "{}"

);



if(!user._id){

setLoading(false);

return;

}



const response = await fetch(

`http://localhost:5000/api/orders/user/${user._id}`

);



const data = await response.json();



if(data.success){

setOrders(data.orders);

}



}


catch(error){

console.log(error);

}


finally{

setLoading(false);

}


};



fetchOrders();


},[]);






return(

<>


<Navbar/>



<div style={pageStyle}>


<h1 style={titleStyle}>
MY ORDERS
</h1>



{

loading ?


<h2 style={centerStyle}>
Loading Orders...
</h2>



:


orders.length===0 ?



<h2 style={centerStyle}>
No Orders Found
</h2>



:



orders.map((order)=>(



<div

key={order._id}

style={orderCard}


>



<div style={orderHeader}>


<div>

<h2>
Order ID
</h2>


<p>
{order._id}
</p>

</div>




<div>

<h3 style={goldText}>
{order.status}
</h3>

<p>
{new Date(order.createdAt).toLocaleDateString()}
</p>

</div>



</div>





<div>


{

order.items.map((item,index)=>(



<div

key={index}

style={productBox}

>


<img

src={item.image}

style={imageStyle}

/>



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


<p style={goldText}>
₹{item.price * item.quantity}
</p>


</div>


</div>


))


}



</div>






<hr/>



<div style={summary}>


<p>
Payment: {order.paymentMethod}
</p>


<p>
Subtotal: ₹{order.subtotal}
</p>


<p>
Delivery: ₹{order.delivery}
</p>


<p>
Discount: ₹{order.discount}
</p>



<h2 style={goldText}>
Total: ₹{order.total}
</h2>



</div>




</div>



))


}



</div>



</>


);


}





const pageStyle:CSSProperties={

background:"#050505",

minHeight:"100vh",

padding:"40px 20px",

color:"white"

};



const titleStyle:CSSProperties={

textAlign:"center",

color:"#d4af37",

letterSpacing:"5px",

marginBottom:"40px"

};



const centerStyle:CSSProperties={

textAlign:"center",

color:"#ccc"

};



const orderCard:CSSProperties={

maxWidth:"1000px",

margin:"30px auto",

background:"#111",

padding:"30px",

borderRadius:"25px",

border:"1px solid #333"

};



const orderHeader:CSSProperties={

display:"flex",

justifyContent:"space-between",

borderBottom:"1px solid #333",

paddingBottom:"20px"

};



const productBox:CSSProperties={

display:"flex",

gap:"20px",

alignItems:"center",

padding:"20px 0",

borderBottom:"1px solid #222"

};



const imageStyle:CSSProperties={

width:"80px",

height:"90px",

objectFit:"contain",

background:"white",

borderRadius:"10px"

};



const summary:CSSProperties={

marginTop:"20px",

fontSize:"18px"

};



const goldText:CSSProperties={

color:"#d4af37"

};



export default MyOrders;