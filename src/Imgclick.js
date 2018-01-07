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
 <h2>Event .click()</h2>
 <p class="lead">จากรูปหากมีการคลิกที่รูปภาพ ก็จะสั่งให้ไปคลิกที่ลิงค์ด้วย</p>
 <img id="myPic" className="changeBorder" src="https://www.picz.in.th/images/2018/01/07/106904557.jpg"/><br/>
 <a href="#" id="myLink">Please Click</a>
    </div>

    );
  }
}
