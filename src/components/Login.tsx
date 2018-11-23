import * as React from "react";
import Facebook from './Facebook';


interface IState{
    error:any,
    password: any,
    username:any,
    
     
    
   
  }



export default class Login extends React.Component<{}, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
          error: '',
          password: '',
          username: '',
          
        };
    
        
      }


      public render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
    
        return (
           <div className="login-form">
              <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Log in</h2>       
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                  </div>
                  <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                      <a href="#" className="pull-right">Forgot Password?</a>
                    </div>        
                </form>
                  <p className="text-center"><a href="#">Create an Account</a></p>
            

              <div className="facebook">
                <Facebook/>
              
              
              </div>
              <div className="footer">Copyright By Agnes <strong>2018</strong>.</div>
            </div>




        );
      }
  }
  







  
      
    
      





