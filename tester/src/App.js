import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap"
// import Menu from "../components/Test.js"
import Menu from "./components/MenuComponents"
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {DISHES} from "./shared/dishes"

// function App() {
//   return (
//     <div className="container-fluid App">
//       <Navbar dark color="primary">
//         <div className="container navbar_container">
//             <NavbarBrand href="/"> Chester project</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//       home page
//     </div>
//   );
// }

// export default App;

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      dishes: DISHES
    }
     
  
  }

  render(){
    return(
      <div className="container-fluid App">
       <Navbar dark color="primary">
         <div className="container navbar_container">
             <NavbarBrand href="/"> Chester project</NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes={this.state.dishes}/>
       home page
    </div>
    )
  }
}