import React from 'react';
import Navbar from '../components/Navbar';
import { Card } from '../components/card';
export class RestaurantPage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <Navbar/>
            <Card/>
            </div>
        );
    }
}