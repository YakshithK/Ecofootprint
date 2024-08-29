import { Navbar } from "./navbar"

export const Header = () => {
    return(
        <header style={{ height: 40, backgroundColor: 'green', display: 'wrap', justifyContent: 'flex-end'}}>
            <Navbar />
        </header>
    )
}