import "./Header.scss"

//images 
import HamMenu from "../../Assets/images/Menu.png"
import Logo from "../../Assets/images/logo.png"
import VideoIcon from "../../Assets/images/video-icon.png"
import AppIcon from "../../Assets/images/apps-icon.png"
import NotificationIcon from "../../Assets/images/notification-icon.png"
import UserPic from "../../Assets/images/Userpic.png"



function Header() {
    return (
        <div className="site-header">
            <header className="header-logo">
                <img src={HamMenu} alt="menu" width="20" height="17" />
                <a href="/">
                    <img src={Logo} alt="site logo" width="116" height="25" />
                </a>
            </header>
            <input className="header-input" type="search" placeholder="Search" />
            <nav className="header__navigation">
                <ul className="header__navigation-list">
                    <li>
                        <button><img src={VideoIcon} alt="video" /></button>
                    </li>
                    <li>
                        <button><img src={AppIcon} alt="Apps" /></button>
                    </li>
                    <li>
                        <button className="notification__btn"><img src={NotificationIcon} alt="Notification" /></button>
                    </li>
                    <li>
                        <button><img src={UserPic} alt="User" /></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;