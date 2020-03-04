import React, { Component } from 'react'
import WelcomeImage from './images/background-hero.png'
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
                    <h1 id='soon'> Coming Soon</h1>

                  <h1>217 e 86th st. New York, NY 10028</h1>
                   
                    <div className="product-search-form" action="#" method="get">
                     <a className="btn btn-default order-btn" href="#menu">Order</a>
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
