import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
      return (
        <div>

     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
       <div class="container">
         <a class="navbar-brand" href="#">How to write React JS chicken</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarResponsive">
           <ul class="navbar-nav ml-auto">
             <li class="nav-item">
               <a class="nav-link"><Link to="/">Home</Link></a>
             </li>
             <li class="nav-item">
               <a class="nav-link"><Link to="/click">Jquery Click</Link></a>
             </li>
             <li class="nav-item">
               <a class="nav-link"><Link to="/clicktextbox">Clicktext box</Link></a>
             </li>
             <li class="nav-item">
               <a class="nav-link"><Link to="/Dbclick">Dbclick</Link></a>
             </li>
             <li class="nav-item">
               <a class="nav-link"><Link to="/Event">Event</Link></a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
    {this.props.children}


       <footer class="py-5 bg-dark">
         <div class="container">
           <p class="m-0 text-center text-white">Copyright &copy; bMJU 2017</p>
         </div>

       </footer>
     </div>
      );
    }
  }
