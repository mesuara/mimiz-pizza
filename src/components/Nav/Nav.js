import React, { Component } from 'react'
import Logo from './images/logo.png';

//import Menu from './images/menu/menu.png';

import { Link, NavLink } from 'react-router-dom'



export default class Nav extends Component {

    render() {
        return (
            <header id="site-header" className="header-area">
            <div className="header-inner">
               <div className="container-fluid">
               <div className="row">
                   <div className="col">
                   <div className="logo-menu-wrap hidden-xs hidden-sm">
                       {/* <div className="logo">
                       <Link  to={{
                           pathname: '/'
                       }}>
                           <img src={Logo} alt="logo" width='80' />
                       </Link>
                       </div> */}



                       <nav className="menu">
                       <div id='logoMobile'>
                            <img src={Logo} alt="MIMIS PIZZA logo"  />
                        </div>    
                       <ul id="nav">
                          
                           <li><h1>
                               <NavLink exact 
                                        activeClassName="active-link"
                                        to={{
                                           pathname: '/menu'
                                       }}>
                                       MENU
                               </NavLink>
                               </h1>
                           </li>
                           <li><h1>
                               <NavLink exact 
                                        activeClassName="active-link"
                                        to={{
                                           pathname: '/'
                                       }}>
                                        <img src={Logo} alt="MIMIS PIZZA logo" width='80' />
                               </NavLink>
                               </h1>
                           </li>
                               <li>
                                   <h1>

                                   <NavLink  to={{
                                       pathname: '/call'
                                    }}
                                    exact 
                                    activeClassName="active-link"
                                    >
                                           CONTACT
                                   </NavLink>
                                    </h1>
                               </li>
                          

                          

                           
                          
                          
                          
                       </ul>
                       </nav>
                      
                   </div>
                   </div>
               </div>
               </div>
           </div>
           <div id="sticky-header"></div>
                              
            {/* <div className="mobile-menu">
                 <a className="mobile-logo" href="/"><img src={Logo} alt="logo" />

    

                 </a>   

                 

            </div> */}
            </header>
        )
    }
}


