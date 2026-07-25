import { Link } from "react-router-dom";


function Footer() {


  return (


    <footer
      style={{
        background: "#050505",
        color: "white",
        padding: "60px 40px 25px",
        borderTop: "1px solid rgba(212,175,55,.25)"
      }}
    >


      <div

        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "40px"
        }}

      >



        {/* Brand */}


        <div>


          <h2

            style={{
              color:"#d4af37",
              letterSpacing:"6px",
              fontWeight:300
            }}

          >

            SCENTO

          </h2>



          <p

            style={{
              color:"#aaa",
              lineHeight:"1.8"
            }}

          >

            Luxury handmade perfumes and premium lifestyle
            products crafted to create unforgettable moments.

          </p>


        </div>





        {/* Quick Links */}


        <div>


          <h3 style={{color:"#d4af37"}}>

            Quick Links

          </h3>



          <p>

            <Link to="/" style={linkStyle}>
              Home
            </Link>

          </p>



          <p>

            <Link to="/collections" style={linkStyle}>
              Collections
            </Link>

          </p>



          <p>

            <Link to="/cart" style={linkStyle}>
              Cart
            </Link>

          </p>



          <p>

            <Link to="/account" style={linkStyle}>
              My Account
            </Link>

          </p>


        </div>






        {/* Customer Care */}


        <div>


          <h3 style={{color:"#d4af37"}}>

            Customer Care

          </h3>




          <p>

            <Link to="/contact" style={linkStyle}>
              Contact Us
            </Link>

          </p>




          <p>

            <Link to="/shipping-policy" style={linkStyle}>
              Shipping Policy
            </Link>

          </p>




          <p>

            <Link to="/return-policy" style={linkStyle}>
              Return Policy
            </Link>

          </p>




          <p>

            <Link to="/wishlist" style={linkStyle}>
              Wishlist
            </Link>

          </p>




          <p>

            <Link to="/my-orders" style={linkStyle}>
              My Orders
            </Link>

          </p>


        </div>








        {/* Contact */}


        <div>


          <h3 style={{color:"#d4af37"}}>

            Contact

          </h3>




          <p style={textStyle}>

            📧 scento999@gmail.com

          </p>




          <p style={textStyle}>

            📞 +91 98765 43210

          </p>




          <p style={textStyle}>

            📍 Pune, Maharashtra, India

          </p>




          <p style={textStyle}>

            🕒 Mon - Sat : 10:00 AM - 7:00 PM

          </p>


        </div>



      </div>







      <div

        style={{
          marginTop:"50px",
          paddingTop:"20px",
          borderTop:"1px solid #333",
          textAlign:"center",
          color:"#777"
        }}

      >


        © {new Date().getFullYear()} SCENTO. All Rights Reserved.


      </div>





    </footer>


  );


}





const linkStyle = {


  color:"#ddd",

  textDecoration:"none",

  fontSize:"15px"


};





const textStyle = {


  color:"#aaa",

  fontSize:"15px",

  lineHeight:"28px"


};





export default Footer;