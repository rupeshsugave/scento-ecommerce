import { useNavigate } from "react-router-dom";
import "./Hero.css";


function Hero(){


const navigate = useNavigate();



return(

<section className="hero">



<div className="hero-left">



<div className="luxury-badge">

PREMIUM HANDMADE FRAGRANCES

</div>




<p className="hero-subtitle">

THE ART OF LUXURY FRAGRANCE

</p>




<h1>

Crafted for

<br/>

those who

<br/>

<span>
leave an impression.
</span>

</h1>




<p className="hero-description">

Discover Scento's exclusive collection of
handmade perfumes, luxury candles, car fragrances
and premium lifestyle products designed for
unforgettable moments.

</p>





<div className="hero-buttons">



<button

className="hero-btn"

onClick={()=>navigate("/collections")}

>

EXPLORE COLLECTION →

</button>





<button

className="hero-outline-btn"

onClick={()=>navigate("/category/perfumes")}

>

VIEW PERFUMES

</button>



</div>





<div className="hero-features">



<div>

<h3>
100%
</h3>

<p>
Handmade
</p>

</div>




<div>

<h3>
Premium
</h3>

<p>
Quality
</p>

</div>




<div>

<h3>
Long
</h3>

<p>
Lasting
</p>

</div>



</div>




</div>





<div className="hero-right">


<div className="hero-glow"></div>



<img

src="/images/hero.png"

alt="Scento Luxury Perfume"

/>



</div>




</section>


);


}


export default Hero;