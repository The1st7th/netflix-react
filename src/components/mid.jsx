import React from 'react';
import image from '../assets/images/key.svg';


function Mid(){
    
    return (
      <div>
<div className ="middle">
  <div className = "container" >
  <div className="midicons"  id= "1">
    <img className = "icon" src={image} title="only click here" alt=""/>
    <h6 className = "text selected" >   Cancel any time</h6>
  </div>
  <div className ="midicons " id= "2">
    <img className= "icon" src="../assets/images/icon_devices.png" title="only click here"alt=""/>
    <h6 className = "text nonselected" >Watch on any devices</h6>
  </div>
  <div className ="midicons nonselected" id="3">
    <img className = "icon" src="../assets/images/price-tag.svg" title="only click here" alt=""/>
    <h6 className = "text nonselected" >Pick our price</h6>
  </div>
  </div>
  </div>
      </div>
    );
  }
  
  export default Mid