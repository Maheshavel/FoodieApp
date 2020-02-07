import React from 'react';
import '../stylesheet/loginstyles.css';
import logo from '../images/logo.png';
import TextInput from '../components/TextInput';
class LoginPage extends React.Component{
    constructor(){
        super();
        this.state={
            name : "soorya",
            username : "",
            password : "",
            showCredential : false
        };
        
    }

    onChangemethod1=(e) => {
        this.setState({username : e.target.value})
    }
    onChangemethod2=(e) => {
        this.setState({password : e.target.value})
    }
    myfun=(e) => {
        var ck = e.target.checked
            if(ck===true)
                alert("You have ckecked");
            else
                alert("You have UN-checked");
    }

    render(){
        return(
            <div class="main-container login-page">
            <div class="login-bg">
            </div>
            <div class="login-form">
                <h3>{this.state.name}</h3>
                <h3>{this.state.username}</h3>
                <h3>{this.state.password}</h3>
                <div class="app-logo">
                    <img src={logo} alt="food logo" width="1000%"/>
                </div>
                <h2>SIGN IN</h2>
                <form>
                    <TextInput type="text" placeholder="Enter Username" value="username" changefun={this.onChangemethod1}/>
                    {/* <div class="form-field">
                        <input type="text" class="username" placeholder="Enter username" onChange={(eve) => this.setState({username : eve.target.value})}/>
                    </div> */}
                    <TextInput type="password" placeholder="Enter password" value="password" changefun={this.onChangemethod2}/>
                    {/* <div class="form-field">
                         <input type="password" class="password" placeholder="Enter Password" onChange={(eve) => this.setState({password : eve.target.value})}/>
                    </div> */}
                    <div class="form-field">
                        <button class="app-button" type="button" onClick={() =>this.setState({showCredential : true})}>LOGIN</button>
                    </div>
                    <span class="forgot-password">Forgot Password?</span>
                    <a class="link" href="hgh">Click here</a>
                    <input type="checkbox" value="hello" onClick={this.myfun}/>check here
                    {
                        this.state.showCredential && <div>
                        <p>Username : {this.state.username}</p>
                        <p>Password : {this.state.password}</p>
                            </div>
                    }
                    
                    {/* <h5>{this.state.username}</h5> */}
                </form>
            </div>
        </div>
        )
    }
}

export default LoginPage;