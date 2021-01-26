import React, { useState } from 'react';
import './Form.css';


    


    const Form = () =>{
      let greetings="";
    const cssStyle={};
    let currdate=new Date();
    currdate=currdate.getHours();
    
    if(currdate>=3 && currdate<=12){
        greetings="Good Morning";
        cssStyle.color="#00F0FF";
        
    }
    else if(currdate>12 && currdate<=18){
        greetings="Good Afternoon";
        cssStyle.color="yellow";
       
    }
    else if((currdate>18 && currdate<=24) || (currdate>=0 && currdate<3)){
        greetings="Good Night";
        cssStyle.color="#D500FF";
    }
      
    let [first,setfname]=useState("");
    let [last,setlname]=useState("");
    let [firstname,setfirstname]=useState();
    let [lastname,setlastname]=useState();
  
    const fnames=(gg) => {
      setfname(gg.target.value)
    }
    const lnames=(wp) => {
      setlname(wp.target.value)
  
    }
    const clicking = (wow) =>{
      wow.preventDefault();
      setfirstname(first);
      setlastname(last);
    }
    
        return (<>
        
            <hr className="seperator" className="new_seperator"/>
            
            <h1 id="form" className="form_h1" style={cssStyle}>{greetings} {firstname} {lastname}</h1>
            <input className="first" type="text" placeholder="Enter your first name" onChange={fnames} value={first} /><br></br>
            <input className="second" type="text" placeholder="Enter your last name" onChange={lnames} value={last} /><br></br>
            <button className="form_button" onClick={clicking}>Submit 👍</button>


        </>);
    }

    export default Form;