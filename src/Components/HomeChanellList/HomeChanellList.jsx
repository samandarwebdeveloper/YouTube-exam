import "./HomeChanellList.scss"

import { Link } from "react-router-dom"


function HomeChanellList({ id, img, name}) {

    return (
        <Link className="home-channel__item-link" to={{ 
            pathname: `/video/${id}`, 
            }}>
            <img className="home-channel__item-img" src={img} alt="pic" />
            <p className="home-channel__item__title">{name}</p>
            <span>123k views  ·  1 months ago</span>
            <span> Dollie Blair</span>
        </Link>
    )
}

export default HomeChanellList;