import React, { useState } from 'react';
import './Topbar.css'
const Topbar = () => 
{
    let gg= new Date().toLocaleTimeString();
  let after;
  [gg,after]=useState(gg);
  const fnc=() =>
  {
    after(new Date().toLocaleTimeString());
  }

  setInterval(fnc,1000);
    return (<>
        <div className="topbar">
          <div className="time"> {gg}</div>
          <div className="stylemenu">
          <div className="menu" style={{color:"red"}}><a className="tag" href="#heroes">Heroes </a></div>
          <div className="menu" style={{color:"red"}}><a className="tag"href="#blog">Blog</a></div>
          <div className="menu" style={{color:"red"}}><a className="tag" href="#form">Form</a></div>
          </div>
        </div>

    </>)
}
export default Topbar;