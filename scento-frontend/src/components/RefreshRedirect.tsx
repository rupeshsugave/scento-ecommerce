import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RefreshRedirect(){

  const navigate = useNavigate();


  useEffect(()=>{


    const handleBeforeUnload = () => {

      sessionStorage.setItem(
        "refreshed",
        "true"
      );

    };


    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );


    return ()=>{

      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );

    };


  },[]);



  useEffect(()=>{


    const refreshed =
    sessionStorage.getItem("refreshed");


    if(refreshed){

      sessionStorage.removeItem(
        "refreshed"
      );

      navigate("/");

    }


  },[]);



  return null;

}


export default RefreshRedirect;