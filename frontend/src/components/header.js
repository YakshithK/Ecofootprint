import { Navbar } from "./navbar"

export const Header = () => {
    return(
        <header style={{ height: 65, backgroundColor: 'green', display: 'flex',justifyContent: 'center'}}>
            <Navbar />
        </header>
    )
}