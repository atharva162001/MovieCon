import React from 'react'
import "./CSS Files/Card.css"
import { img_300, unavailable } from "../config/config"
import ContentModal from './ContentModal'

const Card = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {

    return (
        <>
            <ContentModal
                media_type={media_type}
                id={id}
            >
                <img src={poster ? `${img_300}/${poster}` : unavailable} alt="title" className="img-fluid rounded-3" />
                <div className="text-center my-2 movieHeader">
                    {title}
                </div>
                <div className="textContainer">
                    <span>{media_type.toUpperCase()}</span>
                    <span>{vote_average}</span>
                    <span>{date}</span>
                </div>
            </ContentModal>
        </>
    )
}

export default Card
