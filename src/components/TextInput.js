import React from 'react';

export default class TextInput extends React.Component{
    constructor(props){
        super();
        console.log(props);
        
    };

    render(){
        return(
            <div class="form-field">
                <input  type={this.props.type} class="username" placeholder={this.props.placeholder} onChange={this.props.changefun}/>
            </div>
        );
    }
}