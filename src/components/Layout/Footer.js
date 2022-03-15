import React from "react";
import "./Footer.css";
import Main from "../../Data/Images/chemical.png";
const Footer = () => {
  return(
    <div className="all">
      <div className="footer-container">
      
      <div className="top">
        
        <h3>CHESS </h3>
          
        <div className="Social">
          <p>Dept. of Chemical engg</p> 
            <p>Indian Institute of Technology Roorkee, </p>
            <p>Roorkee, Uttarakhand 247667</p>
          <p>82516165165</p>
          <a className="email" href="#">iitroorkee@chemicalengineering</a>
          <a className="facebook" href="https://www.facebook.com/dosw.iitr/" target = "_blank" rel="noopener noreferrer">
            
            </a>
        </div>
      </div>
      <div className="top2">
        <a className="home" href = "#">Home</a>
        <a className="home" href = "#">Events</a>
        <a className="home" href="#">Blog</a>
        <a className="home" href = "#">Team</a>
        <a className="home" href = "#">About Us</a>
        <a className="home" href = "#">Contact Us</a>

      </div>
  
      

          
          
    <div className="bgbox">
      <div className="image2">
      <img src= {Main} alt={"Chemical"}></img>
      
      </div>
      </div>    
    
    </div>
    <div className="copyright">
    <p>Copyright &copy;2022, All Rights Reserved, Institute Computer Centre, IIT Roorkee. </p>

    </div>
    
      
    </div>
    
    
    
    
  
  );
};

export default Footer;
