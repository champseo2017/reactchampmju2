import React, { Component } from 'react';
import $ from 'jquery';


export default class Clicktextbox extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
   $(document).ready(function(){
     myShow();
   });
   function myShow(){
     $('#showIt').click(function(){
       var myFirstName = $('#myName').val();
       var myLastName = $('#myLast').val();
       $('#outPutStr').html('My name is: ' + myFirstName + ' ' + myLastName);
     });
   }

  }

  render() {
    return (
      <div>
      <header class="bg-primary text-white">
<div class="container text-center">
  <h1>Event .click(textbox)</h1>
  <p class="lead">ถ้าผู้ใช้คลิกเอลิเมนต์ที่เรากำหนด ก็จะไปรันคำสั่งที่ได้เขียนขึ้น</p>
</div>
</header>
<br/>
<div class="container">
<div class="row">
  <div class="col-lg-8 mx-auto">
 <h2>Event .click(textbox)</h2>
 <p class="lead">เมื่อคลิกที่ปุ่ม ก็จะแสดงชื่อและนามสกุลที่กรอกบนฟอร์ม โดยใช้ฟังก์ชั่น click() </p>
 <div class="row">

       <div class="col-sm-6">
       <form>
        <table>
        <tr>
        <td>Name</td>
        <td><input type="text" id="myName"/></td>
        </tr>
        <tr>
        <td>Lastname</td>
        <td><input type="text" id="myLast"/></td>
        </tr>
        <tr>
        <td>click for show >><input id="showIt" type="button" value="Show"/></td>
        <td><div id="outPutStr"></div></td>
        </tr>
        </table>
       </form>
       <br/>

       </div>
     </div>
    </div>
    </div>
    </div>
    </div>

    );
  }
}
