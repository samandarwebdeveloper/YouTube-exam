import "./HomeRecomendedChanell.scss"


import { Link } from "react-router-dom"

function HomeRecomendedChannel({id, img, name}) {
    return (       
        <Link className="home-recomended-channel__item-link" to={{ 
                pathname: `/video/${id}`, 
                }}>
            <img className="home-recomended-channel__item-img" src={img} alt="pic" />
            <p className="home-recomended-channel__item__title">{name}</p>
            <span>123k views  ·  1 months ago</span>
            <span> Dollie Blair</span>
        </Link>
                 
    )
}

export default HomeRecomendedChannel;