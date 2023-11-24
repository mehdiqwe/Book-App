import Styles from "./Layouts.module.css"

function Layouts({children}) {
  return (
    <>
        <header className={Styles.header}>
            <h1>Book App</h1>
            <a href="https://botostart.ir">Botostart</a>
        </header>
        {children}
        <footer className={Styles.footer}>
            <p>Created by Mhd with love</p>
        </footer>
    </>
  )
}

export default Layouts