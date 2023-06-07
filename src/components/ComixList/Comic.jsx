import React from "react";
import { Link } from "react-router-dom";
import "./ComixList"

const Comic = (comic) => {



    return(
        <Link to = {`/comix/${comic.id}/${comic.title}`}{...comic}> 
            <div className="comic-item">
                <div className="comic-item-img">
                    <img src = {comic.cover_img} alt="comic cover" />
                </div>
                <div className="comic-item-info">
                    <div className="comic-item-info-item">
                        <span>{comic.title}</span>
                    </div>        
                </div>
            </div>
        </Link>
    )
}

export default Comic;