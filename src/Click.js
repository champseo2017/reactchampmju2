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
<br/>
<div class="container">
  <div class="row">
    <div class="col-lg-8 mx-auto">
      <h2>Event .click()</h2>
      <p class="lead">Jquery API มีฟังก์ชั่นที่เกียวกับการควบคุมอีเวนต์อยู่หลายฟังก์ชั่น แต่ฟังก์ชั่นที่ถือว่าใช้ บ่อยมากๆ คือ ฟังก์ชั่น clik() โดยถ้าผู้ใช้คลิกเอลิเมนต์ที่เรากำหนด ก็จะไปรันคำสั่งที่ได้เขียนขึ้น</p>
 <div id="myData" className="basic myBlue">Please Click Me!</div>
 <br/>
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
