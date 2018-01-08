import React, { Component } from 'react';
import $ from 'jquery';


export default class Dbclick extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
$(document).ready(function(){
  myDoubleClick();
});
function myDoubleClick(){

  $('.test').dblclick(function(){
    var strShow = $(this).css("background-color");
    $("#showResult").html(strShow).css("color",strShow);
  });
}

  }

  render() {
    return (
      <div>
         <header class="bg-primary text-white">
   <div class="container text-center">
     <h1>Event dbclick() </h1>
     <p class="lead">ฟงก์ชั่น .dbclick() มีวิธีใช้งานเหมือนกับ .click()</p>
   </div>
   </header>
   <br/>
   <div class="container">
     <div class="row">
       <div class="col-lg-8 mx-auto">
         <h2>Event .dbclick()</h2>
         <p class="lead">ฟังก์ชั่น .dbclick() มีวิธีใช้งานเหมือนกับ .click() ต่างกันก็เพียงว่า .dbclick() ใช้ตรวจสอบ การดับเบิลคลิก ส่วน click() ใช้ตรวจสอบการคลิกเท่านั้น</p>
         <div class="container">
      <div class="row">
        <div class="col">
         <h3>Please double click</h3>
         <table>
         <tr>
         <td><div id="myRed" className="test"></div></td>
         <td><div id="myGreen" className="test"></div></td>
         <td><div id="myBlue" className="test"></div></td>
         <td><div id="myOrange" className="test"></div></td>

         </tr>
         </table>
         <div id="showResult"></div>
        </div>
        </div>
    <br/>
    <br/>
     <br/>
      <br/>
   </div>
   </div>
   </div>
   </div>
   </div>



    );
  }
}
