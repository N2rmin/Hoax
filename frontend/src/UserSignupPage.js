import React from "react";

class UserSignupPage extends React.Component{
    
    state ={
        username:null,
        displayName:null,
        password :null,
        passwordRepead :null,
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




    render(){
        return(
        <form>
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input name="username" onChange={this.onChange}/>
            </div>
            <div>
                <label>Display Name</label>
                <input name="displayName" onChange={this.onChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={this.onChange} />
            </div>
            <div>
                <label>Password Repeat</label>
                <input type="password" name="passwordRepead" onChange={this.onChange} />
            </div>
          
            <button disabled={!this.state.agreedClicked}>Sign Up</button>
        </form>
        );
    }
}

export default UserSignupPage;