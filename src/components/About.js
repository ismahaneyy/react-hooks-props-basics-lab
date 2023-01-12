import React from "react";
import Links from "./Links";

function About(props) {
  let bio = props.bio
  if (bio){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
  }
  else{
    return(
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={props.linkedin} github={props.github}/>
    </div>
    );
  }

}

export default About;
