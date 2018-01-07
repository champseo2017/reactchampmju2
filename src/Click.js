import React, { Component } from 'react';
import $ from 'jquery';
import Imgclick from './Imgclick';

export default class Click extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
  $("#myData").click(function(){
    $(this).toggleClass("myBlue");
  });

  }

  render() {
    return (
      <div>
      <header class="bg-primary text-white">
<div class="container text-center">
  <h1>Event Click</h1>
  <p class="lead">ถ้าผู้ใช้คลิกเอลิเมนต์ที่เรากำหนด ก็จะไปรันคำสั่งที่ได้เขียนขึ้น</p>
</div>
</header>
<div class="container">
  <div class="row">
    <div class="col-lg-8 mx-auto">
      <h2>About this page</h2>
      <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
 <div id="myData" className="basic myBlue">Please Click Me!</div>
     <Imgclick />
 <br/>
  <br/>
   <br/>

    </div>
  </div>
</div>
</div>
    );
  }
}
