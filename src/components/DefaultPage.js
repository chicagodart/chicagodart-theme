import React, { Component } from 'react';

//components
import Sidebar from './Sidebar'

class DefaultPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div>      
        <div>

          <div className="hero-img">
            <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
          </div>
          
          <div className="max-width-12 mx-auto">
            <div className="clearfix mx3">
              <div className="col col-8">
                <div>
                  <h2>Fill Sub-heading</h2>
                  <p>sub-heading content</p>
                </div>

                <div>
                  <h2>Fill Sub-heading2</h2>
                  <p>sub-heading2 content</p>
                </div>

              </div>
              <div className="col col-4 center">
                <Sidebar items={this.state}/>
              </div>
            </div>
          </div>

        </div>        
      </div>
    )
  }

}

export default DefaultPage;