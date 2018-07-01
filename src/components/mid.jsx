import React from 'react';
import image from '../assets/images/key.svg';
import image2 from '../assets/images/icon_devices.png';
import image3 from '../assets/images/price-tag.svg';


function Mid(){
    
    return (
      <div>
             <style jsx>{`
.middle{
  background:black;
  width:100%;
  height:300px;
}

.icon{
  height: 30%;
  width:20%;
  margin-top:5%;
  margin-left: 30%;
}
.text{

  height: 10%;
  width:100%;
  margin-top:10%;
  margin-left: 22%;
  margin-bottom:20%;
}

.container {
  display: flex;
  background:black;
  width: 100%;
  justify-content: space-between;

}
.container > div {
  flex: 1;
  justify-content: flex-start;
  margin-left:auto;
  flex-direction: row;
  align-items: center;
}

.selected{
    font-weight: bold;
    border-bottom: 5px solid red;
}

span{
    display:inline-block;
    
    width: 70%;
}
.h6{
    padding-bottom: 20%
}
.class{
    margin-left:100%;
}
.middle1{
  background:black;
  width:100%;
  height:500px;
}

    }
    `}</style>
<div className ="middle">
  <div className = "container" >
  <div className="midicons"  id= "1">
    <img className = "icon" src={image} title="only click here" alt=""/>
    <h6 className = "text selected" >   Cancel any time</h6>
  </div>
  <div className ="midicons " id= "2">
    <img className= "icon" src={image2} title="only click here"alt=""></img>
    <h6 className = "text nonselected" >Watch on any devices</h6>
  </div>
  <div className ="midicons nonselected" id="3">
    <img className = "icon" src={image3} title="only click here" alt=""/>
    <h6 className = "text nonselected" >Pick our price</h6>
  </div>
  </div>
  </div>
      </div>
    );
  }
  
  export default Mid