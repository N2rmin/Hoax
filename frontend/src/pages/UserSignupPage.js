import React from "react";
import {signup} from '../api/apiCalls';
class UserSignupPage extends React.Component{
    
    state ={
        username:null,
        displayName:null,
        password :null,
        passwordRepead :null,
        pendingApiCall :false
    }

    onChange = (event)=>{

        //Object destoying
        const{name,value}=event.target

        // const value = event.target.value;
        // const name = event.target.name;
        this.setState({
            [name]:value
        })
    }
    
    
    // onChangeUsername = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         username:event.target.value
    //     })
    // };

    // onChangeDisplayName = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         displayName:event.target.value
    //     })
    // };

    // onChangePassword = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         password:event.target.value
    //     })
    // };

    // onChangePasswordRepead = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         passwordRepead:event.target.value
    //     })
    // };

 

onClickSignUp = async event=>{
    event.preventDefault();

const {username, displayName, password}=this.state;

    const body = {
        username,
        displayName,
        password
    };

    this.setState({pendingApiCall:true})

    try{
   const response= await signup(body);
    }catch(error){

    }
this.setState({pendingApiCall:false});
    // signup(body) //postan success donub donmemesine baxir. defaultda okeydir
    // .then((response) => {
    //     this.setState({pendingApiCall:false})
    // }).catch(error =>{
    //     this.setState({pendingApiCall:false})
    // });
};

    render(){
        const {pendingApiCall}=this.state;
        return(
            <div className="container">
        <form>
            <h1 className="text-center">Sign Up</h1>
            <div className="form-goup">
                <label>Username</label>
                <input className="form-control" name="username" onChange={this.onChange}/>
            </div>
            <div className="form-goup">
                <label>Display Name</label>
                <input className="form-control" name="displayName" onChange={this.onChange}/>
            </div>
            <div className="form-goup">
                <label>Password</label>
                <input className="form-control" type="password" name="password" onChange={this.onChange} />
            </div>
            <div className="form-goup">
                <label>Password Repeat</label>
                <input  className="form-control" type="password" name="passwordRepead" onChange={this.onChange} />
            </div>
          <div  className="text-center">
            <button  className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall}>
          {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
Sign Up</button>
            </div>
        </form>
        </div>
        );
    }
}

export default UserSignupPage;
