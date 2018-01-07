import React, { Component } from 'react';
import $ from 'jquery';


export default class Imgclick extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
  $("#myPic").click(function(){
    $("#myLink").click();
  });
  $("#myLink").click(function() {
    alert("You click the link too.");
  });

  }

  render() {
    return (
      <div>
 <h2>About this page</h2>
 <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
 <img id="myPic" className="changeBorder" src="https://www.picz.in.th/images/2018/01/07/106904557.jpg"/><br/>
 <a href="#" id="myLink">Please Click</a>
    </div>

    );
  }
}
