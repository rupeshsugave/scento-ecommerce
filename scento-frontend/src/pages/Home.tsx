import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";



function Home(){


const navigate = useNavigate();




return(

<>


<Navbar/>


<Hero/>




<section
style={sectionStyle}
>


<h1
style={sectionTitle}
>
Luxury Collections
</h1>




<div
style={collectionGrid}
>



<div

style={collectionCard}

onClick={()=>navigate("/category/perfumes")}

>


<h2>
Perfumes
</h2>


<p>
Premium long lasting handmade fragrances
</p>


<button style={goldButton}>
EXPLORE
</button>


</div>





<div

style={collectionCard}

onClick={()=>navigate("/category/soaps")}

>


<h2>
Luxury Soaps
</h2>


<p>
Natural handmade bathing experience
</p>


<button style={goldButton}>
EXPLORE
</button>


</div>





<div

style={collectionCard}

onClick={()=>navigate("/category/car perfume")}

>


<h2>
Car Perfumes
</h2>


<p>
Elegant fragrance for your journey
</p>


<button style={goldButton}>
EXPLORE
</button>


</div>





<div

style={collectionCard}

onClick={()=>navigate("/category/candles")}

>


<h2>
Luxury Candles
</h2>


<p>
Premium home fragrance collection
</p>


<button style={goldButton}>
EXPLORE
</button>


</div>




</div>


</section>







<section
style={darkSection}
>


<h1
style={sectionTitle}
>
Why Choose Scento
</h1>




<div
style={featureGrid}
>


<div style={featureCard}>

<h2>
✨
</h2>

<h3>
Handmade Products
</h3>

<p>
Created with care and premium ingredients
</p>

</div>





<div style={featureCard}>

<h2>
🌿
</h2>

<h3>
Premium Quality
</h3>

<p>
Luxury fragrance experience at affordable prices
</p>

</div>





<div style={featureCard}>

<h2>
⏳
</h2>

<h3>
Long Lasting
</h3>

<p>
Designed for memorable fragrance moments
</p>

</div>



</div>


</section><section
style={sectionStyle}
>


<h1
style={sectionTitle}
>
Premium Experience
</h1>



<div
style={experienceBox}
>


<h2>
Affordable Luxury Fragrances
</h2>


<p>
Discover premium handmade perfumes, candles and fragrance products
crafted for a beautiful lifestyle.
</p>



<button

onClick={()=>navigate("/category/perfumes")}

style={goldButton}

>
SHOP NOW
</button>



</div>


</section>





<footer
style={footerStyle}
>


<h2
style={{
color:"#d4af37"
}}
>
SCENTO
</h2>


<p>
Premium Handmade Fragrance Brand
</p>


<p>
© 2026 Scento. All Rights Reserved.
</p>


</footer>





</>

);

}







const sectionStyle: CSSProperties = {


background:"#050505",

color:"white",

padding:"80px 30px"

};





const darkSection: CSSProperties = {


background:"#0b0b0b",

color:"white",

padding:"80px 30px"

};





const sectionTitle: CSSProperties = {


textAlign:"center",

color:"#d4af37",

fontSize:"38px",

letterSpacing:"4px",

marginBottom:"50px"

};





const collectionGrid: CSSProperties = {


maxWidth:"1200px",

margin:"auto",

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",

gap:"30px"

};





const collectionCard: CSSProperties = {


background:"linear-gradient(145deg,#171717,#090909)",

padding:"35px",

borderRadius:"25px",

border:"1px solid rgba(212,175,55,.4)",

textAlign:"center",

cursor:"pointer",

transition:"0.3s"

};





const goldButton: CSSProperties = {


marginTop:"20px",

padding:"14px 35px",

background:"#d4af37",

color:"black",

border:"none",

borderRadius:"30px",

fontWeight:"bold",

cursor:"pointer"

};





const featureGrid: CSSProperties = {


maxWidth:"1100px",

margin:"auto",

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",

gap:"30px"

};





const featureCard: CSSProperties = {


background:"#151515",

padding:"35px",

borderRadius:"25px",

border:"1px solid #333",

textAlign:"center"

};





const experienceBox: CSSProperties = {


maxWidth:"900px",

margin:"auto",

background:"linear-gradient(145deg,#161616,#080808)",

padding:"50px",

borderRadius:"30px",

border:"1px solid #d4af37",

textAlign:"center"

};





const footerStyle: CSSProperties = {


background:"#000",

color:"#aaa",

padding:"40px",

textAlign:"center",

borderTop:"1px solid #333"

};





export default Home;