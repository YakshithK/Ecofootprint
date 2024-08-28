import { Navbar } from "./navbar"

export const Header = () => {
    return(
        <header style={{ backgroundColor: 'green', display: '-ms-flexbox', justifyContent: 'flex-end'}}>
            <Navbar />
        </header>
    )
}