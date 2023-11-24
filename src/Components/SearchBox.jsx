import { IoSearch } from "react-icons/io5";

import Styles from "./SearchBox.module.css"

function SearchBox({search, setSearch, searchHandler}) {
  return (
    <div className={Styles.search}>
        <input 
            type="text" 
            value={search} 
            placeholder="Search title..." 
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={searchHandler}>
            <IoSearch />
        </button>
    </div>
  )
}

export default SearchBox