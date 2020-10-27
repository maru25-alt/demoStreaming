import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
          <div className="footer__top">
              <p> <a href="/">Home</a> &nbsp; |  &nbsp;<a href="/">Terms and Conditions</a>  &nbsp; |  &nbsp; <a href="/">Privacy Policy</a>  &nbsp; |   &nbsp; <a href="/">Collection Statement</a>  &nbsp; |  &nbsp; <a href="/">Help</a>  &nbsp; |   &nbsp; <a href="/">Manage Account</a></p>
              <p>Copyright &copy; 2016 DEMO Streaming All Rights Reserved</p>
          </div>
          <div className="footer__buttom">
              <ul className="socials">
                  <li><a href="/"> <i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
                  <li><a href="/"> <i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="/"><i className="fa fa-instagram    "></i></a></li>
                  
              </ul>
              <div className="footer__buttons">
                  <button>
                  <i className="fab fa-apple"></i>
                      <h6>Download on the <br></br> <span>AppStore</span></h6>
                  </button>
                  <button>
                  <i className="fab fa-google-play"></i>
                      <h6>GET IT ON<br></br> <span>Google Play</span></h6>
                  </button>
                  <button>
                   <i className="fab fa-microsoft"></i>
                      <h6>Get it from<br></br> <span>Microsoft</span></h6>
                  </button>
              </div>
          </div>
        </div>
    )
}
