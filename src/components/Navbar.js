import React from 'react';
import img from '../images/logoWhite.png';
import '../stylesheet/Restaurantstyles.css'

export default class Navbar extends React.Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div class="nav">
        <div class="logo">
            <img src={img} alt="logo"/>
        </div>
        <div class="user-img">
            <h1>jhg</h1>
            <div class="dot">
            </div>
        </div>
        </div>
        );
    }
}
