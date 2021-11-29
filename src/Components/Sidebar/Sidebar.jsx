import "./Sidebar.scss"


import { Link, NavLink } from "react-router-dom"
//images

import HomeIcon from "../../Assets/images/homeIcon"
import TrendingIcon from "../../Assets/images/trendingIcon"
import SubscriptionIcon from "../../Assets/images/subscriptionIcon"
import LibraryIcon from "../../Assets/images/library"
import HistoryIcon from "../../Assets/images/historyIcon"
import WatchLaterIcon from "../../Assets/images/watchLaterIcon"
import FavoritiesIcon from "../../Assets/images/favoritiesIcon"
import LikedIcon from "../../Assets/images/likedIcon"
import MusicIcon from "../../Assets/images/musicIcon"
import GamesIcon from "../../Assets/images/gamesIcon"
import ShowMore from "../../Assets/images/showMore"
import SettingsIcon from "../../Assets/images/settingsIcon"
import UserChanelIcon from "../../Assets/images/user.png"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__main">
                <div className="sidebar__lists">
                    <ul className="sidebar-top__list">
                        <li className="sidebar-top__item"><NavLink className="navlink" activeClassName="navlink-active" to="/"  exact><HomeIcon /><span>Home</span></NavLink></li>
                        <li className="sidebar-top__item"><NavLink className="navlink" activeClassName="navlink-active" to="/trend" ><TrendingIcon /><span>Trending</span></NavLink></li>
                        <li className="sidebar-top__item"><NavLink className="navlink" activeClassName="navlink-active" to="/subscribe" ><SubscriptionIcon /><span>Subscriptions</span></NavLink></li>
                    </ul>
                    <ul className="sidebar-bottom__list">
                        <li><LibraryIcon /><span>Library</span></li>
                        <li><HistoryIcon/><span>History</span></li>
                        <li><WatchLaterIcon /><span>Watch later</span></li>
                        <li><FavoritiesIcon /><span>Favourites</span></li>
                        <li><LikedIcon /><span>Liked videos</span></li>
                        <li><MusicIcon /><span>Music</span></li>
                        <li><GamesIcon /><span>Games</span></li>
                        <li><ShowMore /><span>Show more</span></li>
                    </ul>
                    <div className="sidebar__channels-box">
                        <h3>Subscriptions</h3>
                        <ul className="sidebar__channels-list">
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Gussie Singleton</span></Link>
                            </li>
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Nora Francis</span></Link>
                            </li>
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Belle Briggs</span></Link>
                            </li>
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Eunice Cortez</span></Link>
                            </li>
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Emma Hanson</span></Link>
                            </li>
                            <li>
                                <Link className="channels__link" to="/channel"><img src={UserChanelIcon} alt="user" /><span>Leah Berry</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="settings__btn"><SettingsIcon /><span>Setting</span></button>
            </div>

        </div>
    )
}

export default Sidebar;