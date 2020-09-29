import React,{useState} from 'react';
import { Route, Switch ,Redirect,Link} from "react-router-dom";

const Navbar=()=>{
    const [active1,setActive1]=useState(false)
    const [active2,setActive2]=useState(false)
    const [active3,setActive3]=useState(false)
    
   const handleClick1=()=>{
        setActive1(!active1)
        setActive2(false)
        setActive3(false)
   }
   const handleClick2=()=>{
        setActive2(!active2)
        setActive1(false)
        setActive3(false)
}
const handleClick3=()=>{
        setActive3(!active3)
        setActive1(false)
        setActive2(false)
}


   return(
    
    <ul class="nav nav-tabs" style={{display:'grid',gridTemplateColumns: '1fr 1fr 1fr'}}>

        <li class="nav-item">
            < Link to="/en" className={active1?"nav-link active":"nav-link" }onClick={()=>handleClick1()}>English</Link>
        </li>
        <li class="nav-item">
            <Link to="/hi" className={active2?"nav-link active":"nav-link" } onClick={()=>handleClick2()}>Hindi</Link>
        </li>
        <li class="nav-item">
            <Link to="/fr" className={active3?"nav-link active":"nav-link" }onClick={()=>handleClick3()}>French</Link>
        </li>
    </ul>    


   )}

export default Navbar;
