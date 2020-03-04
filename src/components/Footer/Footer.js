import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';


export default class Footer extends Component {


    render() {
        return (

                <footer id="footer" className="site-footer">
     
                {/* Start footer widgets area */}
                <div className="footer-widgets-area">
                    <div className="container-fluid">
                    <div className="row">
                      
                        <div className="col-lg-12 footer">
                      

                      
                        <div class="mapouter"><div class="gmap_canvas"><iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=217%20east%2086th%20st%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net"></a></div></div>

                       
                        </div>{/*/.col-lg-13*/}

         

                    </div>{/*/.row*/}
                    </div>{/*/.container*/}
                </div>{/* End footer widgets area */}
                {/* Start footer copyright area */}
                <div className="footer-copyright-area bg-gray">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="copyright text-center">
                            © Copyrighted by <a href="/">MIMI'S PIZZA 2020.</a> 
                        </div>
                        </div>
                    </div>{/*/.row*/}
                    </div>{/*/.container*/}
                </div>{/*End footer copyright area */}
                </footer>

        )
    }
}
