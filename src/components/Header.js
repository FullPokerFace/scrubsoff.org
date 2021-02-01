//Images
import facebookIcon from "../assets/icons/facebook-icon.svg"
import instagramIcon from "../assets/icons/instagram-icon.svg"
import twitterIcon from "../assets/icons/twitter-icon.svg"
import youtubeIcon from "../assets/icons/youtube-icon.svg"
import logo from "../assets/logo.svg"
import burgerMenu from "../assets/icons/burger-menu.svg"

//Components import
import Navigation from './Partials/Navigation';


export default function Header() {

  const showMobileMenu = () =>{
    document.querySelector('.mobile-menu-links').style.transform = 'translateX(-100%)';
  }

    return (
        <header >
        <div className="top-bar">
        <div className="max-width">
          <span>Connect with Us</span>
            <a href="https://www.facebook.com/arkadiysafarov" ><img src={facebookIcon} alt="Connect On Facebook"/></a>
            <a href="https://www.instagram.com/cdcgov/" ><img src={instagramIcon} alt="Connect On Instagram"/></a>
            <a href="https://twitter.com/cdcgov" ><img src={twitterIcon} alt="Connect On Twitter "/></a>
            <a href="https://www.youtube.com/c/arkadiysafarov" ><img src={youtubeIcon} alt="Connect On Youtube "/></a>
          </div>
        </div>
        <div className="max-width">

        <ul>
          <li>
              <img className="header-logo" src={logo} alt="Scrubs Off Logo"/>
          </li>
          <li onClick={showMobileMenu} className="burger-menu-wrapper">
        <div className="mobile-menu-links">
        <Navigation/>
        </div>
            <img className="burger-menu" src={burgerMenu} alt="Mobile Menu" />
          </li>
      
        </ul>
        </div>
      </header>
    )
}
