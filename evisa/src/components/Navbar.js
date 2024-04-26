
import gov from '../assests/img11.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <div class="navbar-logo-left">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" class="navbar-logo-left-container shadow-three w-nav">
            <div class="container">
                <div class="navbar-wrapper"><a href="#" class="navbar-brand w-nav-brand"><img src={gov}
                            loading="lazy" width="66" alt="" /></a>
                    <div class="text-block">Online E-Visa</div>
                    <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                        <ul role="list" class="nav-menu-two w-list-unstyled">
                            <li><a href="#" class="nav-link">About us</a></li>
                            <li><Link to="/apply" class="nav-link">Apply E-Visa</Link></li>
                            <li><Link to="/check" class="nav-link">Check Status</Link></li>
                            <li><Link to="/show" class="nav-link">Applications</Link></li>
                            <li>
                                <div class="nav-divider"></div>
                            </li>
                            <li><a href="#team" class="nav-link-accent">Team</a></li>
                            <li class="mobile-margin-top-10"><Link to="/apply" class="button-primary w-button">Apply Now</Link>
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

export default Navbar
