import { useState } from "react";

import { FaHeart } from "react-icons/fa";

import Styles from "./BookCards.module.css"

function BookCards({book, addHandler}) {
    const {image, title, author, language, pages} = book
    const [liked, setLiked] = useState(false)

    const likeHandler = () => {
        addHandler(book, liked)
        setLiked(liked => !liked)
    }
  return (
    <div className={Styles.card}>
        <img src={image} alt={title} />
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <span>{language}</span>
            <span>{pages}</span>
        </div>
        <button onClick={likeHandler}>
            <FaHeart color={liked ? "red" : "#e0e0e0"} fontSize={"1.5rem"}/>
        </button>
    </div>
  )
}

export default BookCards