import React from 'react';
import res_img from '../images/restaurant.jpg';
import '../stylesheet/Restaurantstyles.css';
import data from '../Data/mockData.json';

export class Card extends React.Component{
    constructor(){
        super();
        console.log(data);
        
    }

    render(){
        return(
            <div class="main-view">
           {

           data.map((n) =>
                <div class="single">
                <img src={res_img} alt="logo"/>
                <h3>{n.name}</h3>
                <h5>{n.cuisines}</h5>
                {/* <img class="img-location" src="img/location.png" alt=""/> */}
                {n.rating}
                <hr class="line"/>
                <div class="review">
                    <h6>{n.reviews}</h6>
                </div>  
            </div>
        
            
            )
            }
            
            </div>
        );
    }
}