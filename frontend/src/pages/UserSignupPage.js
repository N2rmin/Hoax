import React from "react";
import {signup} from '../api/apiCalls';
import Input from "../components/input";
class UserSignupPage extends React.Component{
    
    state ={
        username:null,
        displayName:null,
        password :null,
        passwordRepead :null,
        pendingApiCall :false,
        errors:{}
    }

    onChange = (event)=>{

        //Object destoying
        const{name,value}=event.target;

        const errors={... this.state.errors}; //kopyasini alir

        errors[name]=undefined;

        if (name === 'password' || name === 'passwordRepead'){
            if (name ==='password' && value !== this.state.passwordRepead ){
                errors.passwordRepead='Password mismatch';
            }else if(name==='passwordRepead' && value !== this.state.password){
                errors.passwordRepead = 'Password mismatch';
            }else{
                errors.passwordRepead = undefined;
            }
    }
        // const value = event.target.value;
        // const name = event.target.name;
        this.setState({
            [name]:value,
            errors
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

        if(error.response.data.validationErrors){
        this.setState({errors:error.response.data.validationErrors});
        }
        //console.log(error.response.data.validationErrors);
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
        const {pendingApiCall,errors}=this.state;
        const {username,displayName,password,passwordRepead}=errors;
        return(
            <div className="container">
        <form>
            <h1 className="text-center">Sign Up</h1>
            <Input name="username" label="Username" error={username} onChange={this.onChange}/>
            <Input name="displayName" label="Display Name" error={displayName} onChange={this.onChange}/>
            <Input name="password" label="Password" error={password} onChange={this.onChange}  type="password"/>
            <Input name="passwordRepead" label="Password Repead" error={passwordRepead} onChange={this.onChange} type="password" />
            
          
          <div  className="text-center">
            <button  className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall || passwordRepead !== undefined }>
          {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
Sign Up</button>
            </div>
        </form>
        </div>
        );
    }
}

export default UserSignupPage;
