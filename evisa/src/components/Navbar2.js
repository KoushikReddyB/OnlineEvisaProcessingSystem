import React from 'react'
import logo from '../assests/logo.png'
function Navbar2() {
  return (
    <div>
      <div class="navbar-logo-left">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" class="navbar-logo-left-container shadow-three w-nav">
            <div class="container">
                <div class="navbar-wrapper"><a href="#" class="navbar-brand w-nav-brand"><img src={logo}
                            loading="lazy" width="66" alt="" /></a>
                    <div class="text-block">eVisaIndia</div>
                    <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                        <ul role="list" class="nav-menu-two w-list-unstyled">
                            <li>
                                <div class="nav-divider"></div>
                            </li>
                        </ul>
                    </nav>
                    <div class="menu-button w-nav-button">
                        <div class="w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar2
