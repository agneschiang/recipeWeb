import * as React from "react";
import FacebookLogin from 'react-facebook-login';


interface IState{
    isLoggIn: boolean,
    UserId: any,
    name: any,
    email: any,
    picture: any
}



export default class Facebook extends React.Component<{},IState>{
    constructor(props: any){
        super(props)
        this.state = {
            email:"",
            name: "",
            picture:"",
            isLoggIn:false,
            UserId: "",
            

        }
    }

    public componentClicked(){
        console.log("click")
    }
    
    public responseFacebook(response:any){
        console.log(response)
        this.setState({
            isLoggIn:true,
            UserId: response.name,
            email:response.email,
            picture: response.picture.data.url

        })
        
        console.log(response);
    }



    public render(){

        let fbContent;
        const {isLoggIn} = this.state;

        if(isLoggIn){
            alert("You have login already");
            fbContent = (
                
                <div style = {{
                    width:'400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            );
        } else{
            fbContent = (<FacebookLogin
                appId="1940752682712533"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
            
        }
        return(
            <div>
                
            {fbContent}
            </div>
        
        );
            

    }
}