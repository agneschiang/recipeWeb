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
          <h2>Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt vitae, maiores, magni dolorum aliquam.</p>
          <hr className="bottom-line"/>
        </div>
        <div className="feature-info">
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Latest Technologies</h4>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
              </div>
              <div className="fea-img pull-left"/>
                
              
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Toons Background</h4>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
              </div>
              <div className="fea-img pull-left">
                <i className="fa fa-drupal"/>
              </div>
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Award Winning Design</h4>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
              </div>
              <div className="fea-img pull-left">
                <i className="fa fa-trophy"/>
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


