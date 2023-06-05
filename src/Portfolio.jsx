import React from 'react';
import './port.css';
import ME from './profile.jpeg';
import me2 from './git.png';
import me3 from './insta.jpg';
import me4 from './link.png';
const Portfolio=()=> {

  return (
    <>
      <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
 
    <div class="hero">
      <nav>
        <ul>

          <li><a href="Portfolio.jsx">Home</a></li>
          <li><a href="About.jsx">About</a></li>
          <li><a href="pros.html">Pros</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <div class="content">
      

      <center>
  
        <img src={ME} />
        <h1>Hello, I’m <span>SOM</span></h1>
      </center>
      </div>
    </div>
    <></>
    
    <div class="content1">
    <center>
        <h1><span>About</span> me:</h1>
        <br/>
        <br/>
        <div class="p">
          Hi, I am <span>Som</span>. I am a <span>full stack developer</span> and can create a creative and pleasent websites<br />for my client according to their wish
          till now<br /> I have created more than 1000 webpages for different clients from different companies.<br />If you want any webpages to be created<br />
          just <span>contact me</span> I have given my details.
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </center>
        <div class="pros">
          <center>
        <h1><span>Languages</span> Known:</h1>
        <br/><br/>
        <h2>Python<br/>C<br/>C#<br/>Java<br/>JavaScript<br/>ReactJS</h2>
        </center>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="cont">
            <center>
                <h1><span>Contact</span> me:</h1>
                <br/>
                <br/>
          
                <ul>
                <li><a href="https://github.com/SOMEASVAR"><img src={me2} /></a></li>
    
                <li><a href="https://www.instagram.com/_somesh_42/?next=%2F"><img src={me3} /></a></li>
                <li><a href="https://www.linkedin.com/in/someasvar-r-2828a323b/"><img src={me4} /></a></li>
                
                  </ul>
            </center>
        </div>
        
      </div></>
      
   
  );
}
export default Portfolio;