import "./NextVideo.scss"

import { Link } from "react-router-dom"

function NextVideo({id, img, name}) {
    return (
        <Link className="next-video__item-link" to={{ 
            pathname: `/video/${id}`, 
            }}>
            <img className="next-video__item-img" src={img} alt="pic" />
            <p className="next-video__item__title">{name}</p>
            <span>123k views  ·  1 months ago</span>
            <span> Dollie Blair</span>
        </Link>
    )
}

export default NextVideo;