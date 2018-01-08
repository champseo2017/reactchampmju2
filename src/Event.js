import React, { Component } from 'react';
import $ from 'jquery';


export default class Event extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{
   $(document).ready(function(){
     mouseAction();
   });
   function mouseAction(){
      $('.basicRed').mouseup(function(myEvent){
          var x = myEvent.pageX;
          var y = myEvent.pageY;
          $('.showCoordinate').html('Coordinate is : '+ x +','+y);

      });

   }

  }

  render() {
    return (
      <div>
   <header class="bg-primary text-white">
<div class="container text-center">
<h1>Event ส่งค่าผ่านออบเจ็กต์ Event </h1>
<p class="lead">ในขณะที่เกิดอีเวนต์ ไม่ว่าจะเป็นการคลิกเมาส์ ดับเบิลคลิก หรืออื่นๆเราสามารถนำข้อมูลบางอย่างจากอีเวนต์มาใช้ประโยชน์ได้</p>
</div>
</header>
<br/>
<div class="container">
<div class="row">
 <div class="col-lg-8 mx-auto">
   <h2>ส่งค่าผ่าน Event</h2>
   <p class="lead">event page x และ event page y แสดงตำแหน่งของการคลิก เมาส์ ซึ้งเป็นการส่งข้อมูลผ่านออบเจ็กต์ Event</p>
   <div class="container">
<div class="row">
  <div class="col">
   <h3>ส่งค่าผ่านออบเจ็กต์ Event</h3>
   <div class="basicRed">Click me!</div>
   <div></div><div className="showCoordinate"></div>

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
