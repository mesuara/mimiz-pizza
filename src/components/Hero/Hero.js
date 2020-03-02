import React, { Component } from 'react'
import WelcomeImage from './images/dough.png'
import { Link } from 'react-router-dom'

export default class Hero extends Component {
  render() {
    return (

        <div id="home-search-section" className="home-search-section-area bg-image home-header-one" style={{backgroundImage: `url(${WelcomeImage})`}}>
                    
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

        

                <div className="welcome-text text-center tb">
                
                  <div className="tb-cell">


                   
                    <div className="product-search-form" action="#" method="get">
                     <a className="btn btn-default btn-primary" href="#menu">Order</a>
                    </div>{/*/.product-search-form*/}
                  </div>{/*/.tb-cell*/}
                </div>{/*/.welcome-text*/}
              </div>{/*/.col-lg-12*/}
            </div>{/*/.row*/}
          </div>{/*/.container*/}
        </div>

    )
  }
}
