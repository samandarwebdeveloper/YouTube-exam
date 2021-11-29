import "./Channel.scss"

import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useRef } from "react";

//components 
import HomeChanellList from "../HomeChanellList/HomeChanellList";

//images 
import UserHomeChanel from "../../Assets/images/user-channel.png"
import NotificationIcon from "../../Assets/images/notification-icon-black.png"
import Search from "../../Assets/images/search.png"
import VideoChannel from "../../Assets/images/Video-channel.png"
import RecUser from "../../Assets/images/rec-user.png"
import RecUserSec from "../../Assets/images/rec-user2.png"
import RecUserThir from "../../Assets/images/rec-user3.png"
import LeftArrow from "../../Assets/images/Left-Arrow.png"
import RightArrow from "../../Assets/images/Right-Arrow.png"


function Channel() {
    const myRef = useRef()

    const handleNext = () => {
        const allClass = document.querySelectorAll('.prev');
        allClass.forEach((link) => link.classList.remove('prev')
        );
        myRef.current.classList.add("next");
    }
    const handlePrev = () => {
        const allClass = document.querySelectorAll('.next');
        allClass.forEach((link) => link.classList.remove('next')
        );
        myRef.current.classList.add("prev");
    }

    const [ photos, setPhotos ] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then(response => response.json())
        .then(data => setPhotos(data));
    }, []);
    return (
        <div className="channel">
            <div className="cover-image">
            </div>
            <div className="channel-info__wrapper">
                <div className="channel-info__box">
                    <img src={UserHomeChanel} alt="user" />
                    <div>
                        <h3>Margaret Phelps</h3>
                        <span>245K subscribed</span>
                    </div>
                </div>
                <div className="channel__info-btns">
                    <button className="channel-notification__btn"><img src={NotificationIcon} alt="notification" /></button>
                    <button className="subscribe-btn">Subscribe 2.3m</button>
                </div>
            </div>
            <div className="channel-info">
                <div className="channel-info__content">
                    <ul className="channel-content__list">
                        <li className="channel-content__item"><NavLink to="/channel" className="channel-content__link" activeClassName="channel-content__link-active">Home</NavLink></li>
                        <li className="channel-content__item"><NavLink to="/videos" className="channel-content__link" activeClassName="channel-content__link-active">Videos</NavLink></li>
                        <li className="channel-content__item"><NavLink to="/playlist" className="channel-content__link" activeClassName="channel-content__link-active">Playlists</NavLink></li>
                        <li className="channel-content__item"><NavLink to="/channels" className="channel-content__link" activeClassName="channel-content__link-active">Channels</NavLink></li>
                        <li className="channel-content__item"><NavLink to="/discussion" className="channel-content__link" activeClassName="channel-content__link-active">Discussion</NavLink></li>
                        <li className="channel-content__item"><NavLink to="/about" className="channel-content__link" activeClassName="channel-content__link-active">About</NavLink></li>
                        <li className="channel-content__item"><img src={Search} alt="search" /></li>
                    </ul>
                    <div className="channel-content__lead-video">
                        <Link className="channel-content__video-link" to="/video">
                            <img className="video__img" src={VideoChannel} alt="video" />
                            <div className="channel-video__box">
                                <h3 className="channel-video__title">Choosing The Best Audio Player Software For Your Computer</h3>
                                <p className="channel-video__text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                                <span className="channel-video__date">11k views  ·  6 months ago</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="channel-rec-channels">
                    <p className="rec-channel__lead">Recommended channel</p>
                    <ul className="rec-channel__list">
                        <li className="rec-channel__item"><Link className="channel-rec__link" to="/channel"><img src={RecUser} alt="user" /><span>Flora Benson</span></Link></li>
                        <li className="rec-channel__item"><Link className="channel-rec__link" to="/channel"><img src={RecUserSec} alt="user" /><span>Violet Cobb</span></Link></li>
                        <li className="rec-channel__item"><Link className="channel-rec__link" to="/channel"><img src={RecUserThir} alt="user" /><span>Phillip Mullins</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className="channel__video__wrap">
            <div className="channel__video-header">
                <Link className="channel__link" to="/channel">
                    <span>Margaret Phelps videos</span>
                </Link>
                <div>
                    <button className="channels__btn" onClick={handlePrev}>
                        <img src={LeftArrow} alt="Arrow" />
                    </button>
                    <button className="channels__btn" onClick={handleNext}>
                        <img src={RightArrow} alt="Arrow" />
                    </button>
                </div>
            </div>
                <div className="channel-list">
                    <ul className="channel__list" ref={myRef}>
                        { photos.length > 0 && photos.map(photo => ( <li className="home-channel__item" key={photo.id}>
                            <HomeChanellList id={photo.id} photoId={photo.id} img={photo.thumbnailUrl} name={photo.title} /> </li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Channel;