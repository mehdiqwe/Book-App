import { useState } from "react"

import {books as bookData} from "../constants/mockData"
import BookCards from "./BookCards"
import Favorites from "./Favorites"
import SearchBox from "./SearchBox"

import Styles from "./Books.module.css"

function Books() {
    const [books, setBooks] = useState(bookData)
    const [liked, setLiked] = useState([])
    const [search, setSearch] = useState("")
    console.log(search)

    const addHandler = (data, status) => {
        if(status) {
            const newBooks = liked.filter(i => i.id !== data.id)
            setLiked(newBooks)
        } else {
            setLiked(liked => ([...liked, data]))
        }
    }

    const searchHandler = () => {
        if(search) {
            const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
            setBooks(newBooks)
        } else {
            setBooks(bookData)
        }
    }
  return (
    <>
        <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
        <div className={Styles.container}>
            <div className={Styles.cards}>
                {books.map(book => <BookCards key={book.id} book={book} addHandler={addHandler}/>)}
            </div>
            {!!liked.length && 
                <div className={Styles.favorites}>
                    <h4>Favorites</h4>
                    {liked.map(book => <Favorites key={book.id} book={book}/>)}
                </div>
            }
        </div>
    </>
  )
}

export default Books