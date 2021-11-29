import "./Home.scss";

//hooks
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useRef } from "react";

//components 
import HomeChanellList from "../../HomeChanellList/HomeChanellList";
import HomeRecomendedChannel from "../../HomeRecomendedChanell/HomeRecomendedChanell";

//images 
import UserHomeChanel from "../../../Assets/images/user-home-chanel.png"
import FoodChannel from "../../../Assets/images/food.png"
import LeftArrow from "../../../Assets/images/Left-Arrow.png"
import RightArrow from "../../../Assets/images/Right-Arrow.png"

function Home() {
    const myRef = useRef()
    const myRecRef = useRef()
    const myLastRef =useRef()
    
    const handleNext = () => {
        const allPrev = document.querySelectorAll('.prev');
        allPrev.forEach((link) => link.classList.remove('prev')
        );
        myRef.current.classList.add("next");
    }
    const handlePrev = () => {
        const allNext = document.querySelectorAll('.next');
        allNext.forEach((link) => link.classList.remove('next')
        );
        myRef.current.classList.add("prev");
    }
    

    // const recHandleNext = () => {
    //     const allClass = document.querySelectorAll('.rec-prev');
    //     allClass.forEach((link) => link.classList.remove('rec-prev')
    //     );
    //     myRef.current.classList.add("rec-next");
    // }
    // const recHandlePrev = () => {
    //     const allClass = document.querySelectorAll('.rec-next');
    //     allClass.forEach((link) => link.classList.remove('rec-next')
    //     );
    //     myRef.current.classList.add("rec-prev");
    // }
    const [ photos, setPhotos ] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then(response => response.json())
        .then(data => setPhotos(data));
    }, []);

    return (
        <div className="home">
            <div>
                <div className="home-channel__header">
                        <Link className="home-channel__link" to="/channel">
                            <img src={UserHomeChanel} alt="user" />
                            <span>Dollie Blair</span>
                        </Link>
                    <div>
                        <button className="home-channels__btn" onClick={handlePrev}>
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <button className="home-channels__btn" onClick={handleNext}>
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <div className="channel-list">
                    <ul className="home-channel__list" ref={myRef}>
                    { photos.length > 0 && photos.map(photo => ( <li className="home-channel__item" key={photo.id} >
                        <HomeChanellList id={photo.id} photoId={photo.id} img={photo.thumbnailUrl} name={photo.title} /> </li>))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="home-channel__header">
                    <div>
                        <h2 className="home__recomended-lead">Recommended</h2>
                    </div>
                    <div>
                        <button className="home-channels__btn" onClick={handlePrev}>
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <button className="home-channels__btn" onClick={handleNext}>
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <div className="channel-list">
                    <ul className="home-recomended-channel__list" ref={myRecRef}>
                    { photos.length > 0 && photos.map(photo => ( <li className="home-recomended-channel__item" key={photo.id}>
                        <HomeRecomendedChannel id={photo.id} photoId={photo.id} img={photo.url} name={photo.title} /> </li>))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="home-channel__header">
                    <div className="recomended__channel-left">
                        <Link className="recomended__channel-link" to="/channel">
                            <img src={FoodChannel} alt="channel" />
                            <span>Food & Drink</span>
                        </Link>
                        <p className="recomended-text">Recommended channel for you</p>
                    </div>
                    <div>
                        <button className="subscribe-btn">Subscribe 2.3m</button>
                        <button className="home-channels__btn" onClick={handlePrev}>
                            <img src={LeftArrow} alt="Arrow" />
                        </button>
                        <button className="home-channels__btn" onClick={handleNext}>
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <div className="channel-list">
                    <ul className="home-channel__list" ref={myLastRef}>
                    { photos.length > 0 && photos.map(photo => ( <li className="home-channel__item" key={photo.id}>
                        <HomeChanellList id={photo.id} photoId={photo.id} img={photo.thumbnailUrl} name={photo.title} /> </li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;
