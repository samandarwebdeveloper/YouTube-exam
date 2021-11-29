import "./Video.scss"

//components
import NextVideo from "../NextVideo/NextVideo"
import { useState, useEffect } from "react"

//images 
import LikeBnt from "../../Assets/images/like-btn.png"
import DisLikeBnt from "../../Assets/images/dislike-btn.png"
import ShareBtn from "../../Assets/images/share-btn.png"
import MoreBnt from "../../Assets/images/More.png"
import Food from "../../Assets/images/food.png"


function VideoPage() {
    const [ photos, setPhotos ] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then(response => response.json())
        .then(data => setPhotos(data));
    }, []);
    return (
        <div className="video">
            <div className="video-show__box">
                <iframe className="video-iframe" width={560} height={315} src="https://www.youtube.com/embed/axT6oXcsyto" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


                <div className="show-video__infos">
                    <div className="show-video-info">
                        <h2 className="show-video-name">Dude You Re Getting A Telescope</h2>
                        <span className="show-video__watch-times">123k views</span>
                    </div>
                    <div className="show-video__functions">
                        <ul className="show-video__func-list">
                            <li className="show-video__func-item"><button className="shoe-video__func-btn"><img src={LikeBnt} alt="btn" /><span>123k</span></button></li>
                            <li className="show-video__func-item"><button className="shoe-video__func-btn"><img src={DisLikeBnt} alt="btn" /><span>435k</span></button></li>
                            <li className="show-video__func-item"><button className="shoe-video__func-btn"><img src={ShareBtn} alt="btn" /><span>Share</span></button></li>
                        </ul>
                        <button className="more-btn"><img src={MoreBnt} alt="btn" /></button>
                    </div>
                </div>
                <div className="show-video__comment-box">
                     <div className="show-video__channel">
                        <img className="channel-img" src={Food} alt="channel" />
                        <div>
                            <h2 className="channel-name">Food & Drink</h2>
                            <span>Published on 14 Jun 2019</span>
                            <p className="show-video__title">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                            <button className="show-more__btn">Show more</button>
                        </div>
                    </div>
                    <button className="subscribe-btn">Subscribe 2.3m</button>
                </div>
            </div>
            <div className="next-video__box">
                <div className="next-video__head">
                    <h2 className="next-text">Next</h2>
                    <div className="switch">
                        <input type="checkbox" className="switch-input" />
                        <label className="switch-label">Autoplay</label>
                    </div>
                </div>
            <ul className="next-video__list">
                    { photos.length > 0 && photos.map(photo => ( <li className="next-video__item" key={photo.id}>
                        <NextVideo id={photo.id} photoId={photo.id} img={photo.thumbnailUrl} name={photo.title} /> </li>))}
                </ul>
            </div>
        </div>
    )
}

export default VideoPage;