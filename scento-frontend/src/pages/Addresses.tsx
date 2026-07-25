import React, { useEffect, useState } from "react";
import api from "../services/api";


interface Address {

    _id?: string;
    name:string;
    phone:string;
    house:string;
    street:string;
    city:string;
    state:string;
    pincode:string;
    isDefault?:boolean;

}



const Addresses:React.FC = () => {


const [addresses,setAddresses] = useState<Address[]>([]);

const [showForm,setShowForm] = useState(false);

const [editId,setEditId] = useState<string | null>(null);



const [form,setForm] = useState<Address>({

name:"",
phone:"",
house:"",
street:"",
city:"",
state:"",
pincode:""

});



const user =
JSON.parse(
localStorage.getItem("user") || "{}"
);


const userId = user._id;





// GET ADDRESSES

const fetchAddresses = async()=>{


try{


const res =
await api.get(
`/addresses/${userId}`
);


setAddresses(
res.data.addresses || []
);



}
catch(error){

console.log(error);

}


};





useEffect(()=>{


if(userId){

fetchAddresses();

}


},[]);






// INPUT CHANGE

const handleChange = (
e:React.ChangeEvent<HTMLInputElement>
)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







// SAVE ADDRESS

const saveAddress = async()=>{


try{


if(editId){


await api.put(

`/addresses/${editId}`,

form

);


}
else{


await api.post(

"/addresses",

{

...form,

userId

}

);


}



setShowForm(false);

setEditId(null);



setForm({

name:"",
phone:"",
house:"",
street:"",
city:"",
state:"",
pincode:""

});



fetchAddresses();



}
catch(error){

console.log(error);

}


};






// DELETE ADDRESS

const deleteAddress = async(id:string)=>{


try{


await api.delete(

`/addresses/${id}`

);



fetchAddresses();


}
catch(error){

console.log(error);

}


};






// DEFAULT ADDRESS

const makeDefault = async(id:string)=>{


try{


await api.put(

`/addresses/default/${id}`

);



fetchAddresses();


}
catch(error){

console.log(error);

}


};






// EDIT ADDRESS

const editAddress = (address:Address)=>{


setForm({

name:address.name,
phone:address.phone,
house:address.house,
street:address.street,
city:address.city,
state:address.state,
pincode:address.pincode

});


setEditId(
address._id || null
);


setShowForm(true);


};return (

<div style={styles.container}>


<h1 style={{color:"#fff"}}>
    Your Addresses
</h1>




<button

style={styles.addBtn}

onClick={()=>setShowForm(true)}

>

+ Add New Address

</button>







{
showForm &&


<div style={styles.formBox}>


<h2 style={{color:"#fff"}}>

{
editId
?
"Edit Address"
:
"Add Address"
}

</h2>






{

[
["name","Full Name"],
["phone","Phone Number"],
["house","House / Flat"],
["street","Street"],
["city","City"],
["state","State"],
["pincode","Pincode"]

].map((item:any)=>(



<input

key={item[0]}

name={item[0]}

placeholder={item[1]}

value={
(form as any)[item[0]]
}

onChange={handleChange}

style={styles.input}


/>


))


}







<button

style={styles.saveBtn}

onClick={saveAddress}

>

Save Address

</button>





<button

style={styles.cancelBtn}

onClick={()=>setShowForm(false)}

>

Cancel

</button>



</div>


}









<div style={styles.grid}>


{


addresses.map((address)=>(



<div

key={address._id}

style={styles.card}

>





{

address.isDefault &&


<span style={styles.default}>

DEFAULT

</span>


}






<h3>

{address.name}

</h3>





<p>

📞 {address.phone}

</p>





<p>

{address.house},

{address.street}

</p>





<p>

{address.city},

{address.state}

</p>





<p>

PIN : {address.pincode}

</p>







<div>



<button

style={styles.smallBtn}

onClick={()=>editAddress(address)}

>

Edit

</button>







<button

style={styles.deleteBtn}

onClick={()=>deleteAddress(address._id!)}

>

Delete

</button>







<button

style={styles.defaultBtn}

onClick={()=>makeDefault(address._id!)}

>

Set Default

</button>



</div>





</div>



))


}



</div>





</div>

);

};const styles:any = {


container:{

padding:"40px",

background:"#0b0b0b",

minHeight:"100vh",

color:"#fff"

},




addBtn:{

padding:"12px 22px",

background:"#d4af37",

color:"#000",

border:"none",

borderRadius:"8px",

cursor:"pointer",

fontWeight:"600",

fontSize:"15px"

},




formBox:{

background:"#161616",

padding:"25px",

marginTop:"25px",

borderRadius:"15px",

maxWidth:"500px",

boxShadow:"0 10px 30px rgba(0,0,0,0.5)"

},




input:{

width:"100%",

padding:"13px",

margin:"8px 0",

border:"1px solid #444",

borderRadius:"8px",

background:"#0f0f0f",

color:"#fff",

fontSize:"15px",

boxSizing:"border-box"

},




saveBtn:{

padding:"12px 22px",

background:"#d4af37",

color:"#000",

border:"none",

borderRadius:"8px",

cursor:"pointer",

fontWeight:"600"

},




cancelBtn:{

marginLeft:"10px",

padding:"12px 22px",

background:"#333",

color:"#fff",

border:"none",

borderRadius:"8px",

cursor:"pointer"

},




grid:{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:"25px",

marginTop:"35px"

},




card:{

background:"#161616",

padding:"25px",

borderRadius:"15px",

boxShadow:"0 10px 30px rgba(0,0,0,0.5)",

color:"#fff"

},




default:{

background:"#d4af37",

color:"#000",

padding:"6px 12px",

borderRadius:"20px",

fontSize:"12px",

fontWeight:"700"

},




smallBtn:{

padding:"8px 14px",

marginRight:"8px",

background:"#fff",

color:"#000",

border:"none",

borderRadius:"6px",

cursor:"pointer"

},




deleteBtn:{

padding:"8px 14px",

marginRight:"8px",

background:"#8b0000",

color:"#fff",

border:"none",

borderRadius:"6px",

cursor:"pointer"

},




defaultBtn:{

padding:"8px 14px",

background:"#d4af37",

color:"#000",

border:"none",

borderRadius:"6px",

cursor:"pointer"

}


};



export default Addresses;