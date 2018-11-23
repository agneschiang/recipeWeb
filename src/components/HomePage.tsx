import * as React from "react"



export default class HomePage extends React.Component<{}>{



    public render(){
        return(
            <div className="banner">
    <div className="bg-color">
      <div className="container">
        <div className="row">
          <div className="banner-text text-center">
            <div className="text-border">
              <h2 className="text-dec">Health & Quality</h2>
            </div>
            <div className="intro-para text-center quote">
              <p className="big-text">Getting Healthy Today . . . Better Tomorrow.</p>
              <p className="small-text">If you don't think your anxiety, depression, sadness and stress impact your physical health, think again. All of these emotions trigger chemical reactions in your body, which can lead to inflammation and a weakened immune system. Learn how to cope, sweet friend. There will always be dark days.</p>
            </div>
            <a href="#feature" className="mouse-hover">
              <div className="mouse"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  
  <section id="feature" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="header-section text-center">
          <h2>CREATE</h2>

          <hr className="bottom-line"/>
        </div>
        <div className="feature-info">
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>POST</h4>
                <p>User able to create a new post and share it out</p>
              </div>
              <div className="fea-img pull-left"/>
                
              
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>UPDATE</h4>
                <p>Update the information if you there is something that is not right</p>
              </div>
              <div className="fea-img pull-left">
                <i/>
              </div>
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Delete</h4>
                <p>If you find something really inapproiate, you can delete it</p>
              </div>
              <div className="fea-img pull-left">
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

        )
    }

}


