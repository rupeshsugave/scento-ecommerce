import { createContext, useContext, useState } from "react";


export type CartItem = {

  name:string;

  image:string;

  size:string;

  price:number;

  quantity:number;

  total:number;

  stock?:number;

};



type CartContextType = {

  cart:CartItem[];

  addToCart:(item:CartItem)=>void;

  removeFromCart:(index:number)=>void;

  increaseQuantity:(index:number)=>void;

  decreaseQuantity:(index:number)=>void;

  changeSize:(index:number,size:string,price:number)=>void;

  clearCart:()=>void;

};




const CartContext = createContext<CartContextType | null>(null);





export function CartProvider(
{
 children
}:{
 children:React.ReactNode
}

){



const [cart,setCart] = useState<CartItem[]>(()=>{


const saved = localStorage.getItem("cart");


return saved ? JSON.parse(saved) : [];


});






const updateCart=(newCart:CartItem[])=>{


setCart(newCart);


localStorage.setItem(
"cart",
JSON.stringify(newCart)
);


};








const addToCart=(item:CartItem)=>{


const existing = cart.findIndex(

(product)=>

product.name===item.name &&
product.size===item.size

);




let updatedCart;



if(existing!==-1){



updatedCart = cart.map(
(product,index)=>{


if(index===existing){


const qty =
product.quantity + item.quantity;



return {

...product,

quantity:qty,

total:qty * product.price

};


}



return product;



}

);



}

else{


updatedCart=[

...cart,

item

];


}



updateCart(updatedCart);



};









const removeFromCart=(index:number)=>{


const updated = cart.filter(
(_,i)=>i!==index
);


updateCart(updated);


};









const increaseQuantity=(index:number)=>{


const updated = cart.map(

(item,i)=>{


if(i===index){


const qty=item.quantity+1;


return {


...item,


quantity:qty,


total:qty*item.price


};


}



return item;


}

);



updateCart(updated);


};









const decreaseQuantity=(index:number)=>{


const updated = cart.map(

(item,i)=>{


if(i===index && item.quantity>1){


const qty=item.quantity-1;


return {


...item,


quantity:qty,


total:qty*item.price


};



}



return item;



}

);



updateCart(updated);


};









const changeSize=(

index:number,

size:string,

price:number

)=>{



const updated = cart.map(

(item,i)=>{


if(i===index){



return {


...item,


size:size,


price:price,


total:price * item.quantity



};


}



return item;


}

);



updateCart(updated);


};








const clearCart=()=>{


setCart([]);


localStorage.removeItem("cart");


};








return(


<CartContext.Provider

value={{

cart,

addToCart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

changeSize,

clearCart

}}

>


{children}


</CartContext.Provider>


);



}








export function useCart(){



const context = useContext(CartContext);



if(!context){


throw new Error(
"useCart must be used inside CartProvider"
);


}



return context;



}