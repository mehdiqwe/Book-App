import Styles from "./Favorites.module.css"

function Favorites({book :{image, title}}) {
  return (
    <div className={Styles.favorites}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Favorites