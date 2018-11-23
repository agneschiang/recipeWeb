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
        const {UserId} = this.state;
        const {isLoggIn} = this.state;
        if(isLoggIn){
            return(<h1>Here is the userId:  {UserId} </h1>)

            
        } else{
            fbContent = (<FacebookLogin
                appId="1940752682712533"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
            
        }
        return(
            <div className="facebook">
                <div className="facebook-show">
                    <p>{UserId}</p>
                        {fbContent}
                
                
                </div>
            </div>
        
        );
            

    }
}